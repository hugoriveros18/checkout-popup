import { useEffect, useReducer } from "react";
import usePopUpReducer from "../reducers/usePopUpReducer";
import { PopUpActions } from "../typings/variables";

const INITIAL_STATE:PopUpEdition = {
  isModalOpen: false,
  categoriasAsociadas: '',
  categoriasAsociadasError: '',
  pluAsociado: '',
  pluAsociadoError: '',
  imagenDesktop: '',
  imagenDesktopError: '',
  imagenMobile: '',
  imagenMobileError: '',
  precioSinDescuento: '',
  precioSinDescuentoError: '',
  precioConDescuento: '',
  precioConDescuentoError: '',
  fechaInicio: '',
  fechaFinal: '',
  loadingFetch: false,
  fetchSuccesfull: false,
  fetchError: false,
}

export default function usePopUpState({popUpData}:PopUpGeneralProps) {

  //REDUCER
  const [state, dispatch] = useReducer(usePopUpReducer, INITIAL_STATE);

  //EFFECTS
  useEffect(() => {
    if(popUpData){
      dispatch({type: PopUpActions.handleChangeCategoriaAsociada, payload: popUpData.categoriasAsociadas})
      dispatch({type: PopUpActions.handleChangePluAsociado, payload: popUpData.pluAsociado})
      dispatch({type: PopUpActions.handleChangeImagenDesktop, payload: popUpData.imagenDesktop})
      dispatch({type: PopUpActions.handleChangeImagenMobile, payload: popUpData.imagenMobile})
      dispatch({type: PopUpActions.handleChangePrecioSinDescuento, payload: popUpData.precioSinDescuento})
      dispatch({type: PopUpActions.handleChangePrecioConDescuento, payload: popUpData.precioConDescuento})

      if(popUpData.fechaInicio && popUpData.fechaFinal){
        dispatch({type: PopUpActions.handleChangeFechaIncio, payload: popUpData.fechaInicio.replace('DF', 'T')})
        dispatch({type: PopUpActions.handleChangeFechaFinal, payload: popUpData.fechaFinal.replace('DF', 'T')})
      }
    }
  },[popUpData])

  //METHODS
  const updatePopUpData = async () => {
    dispatch({type: PopUpActions.handleLoadingFetch, payload: true})
    await fetch(`/api/dataentities/PU/documents/${popUpData.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(
        {
          categoriasAsociadas: state.categoriasAsociadas,
          pluAsociado: state.pluAsociado,
          imagenDesktop: state.imagenDesktop,
          imagenMobile: state.imagenMobile,
          precioSinDescuento: state.precioSinDescuento,
          precioConDescuento: state.precioConDescuento,
          fechaInicio: state.fechaInicio.replace('T','DF'),
          fechaFinal: state.fechaFinal.replace('T','DF')
        }
      )
    })
    .then((res) => {
      if(res.ok) {
        dispatch({type: PopUpActions.handleFetchSuccessfull, payload: true})
      } else {
        dispatch({type: PopUpActions.handleFetchError, payload: true})
      }

      dispatch({type: PopUpActions.handleLoadingFetch, payload: false})
    })
    .then(() => {
      setTimeout(() => {
        dispatch({type: PopUpActions.resetValues})
      },2000)
    })
  }

  const handleSubmit = () => {
    let error = false;
    if(state.categoriasAsociadas === '') {
      dispatch({type: PopUpActions.categoriaAsociadaError});
      error = true;
    }
    if(state.pluAsociado === '') {
      dispatch({type: PopUpActions.pluAsociadoError});
      error = true;
    }
    if(state.imagenDesktop === '') {
      dispatch({type: PopUpActions.imagenDesktopError});
      error = true;
    }
    if(state.imagenMobile === '') {
      dispatch({type: PopUpActions.imagenMobileError});
      error = true;
    }
    if(state.precioSinDescuento === '') {
      dispatch({type: PopUpActions.precioSinDescuentoError});
      error = true;
    }
    if(state.precioConDescuento === '') {
      dispatch({type: PopUpActions.precioConDescuentoError});
      error = true;
    }

    if(error) {
      return
    }

    updatePopUpData();
  }

  //RETURN VALUES
  return {
    state: state,
    dispatch: dispatch,
    handleSubmit: handleSubmit
  }
}

