import { PopUpActions } from "../typings/variables";

const errorInputMessage = "Este campo es obligatorio";

export default function usePopUpReducer(state:PopUpEdition, action: any) {
  switch(action.type) {

    case PopUpActions.handleModal:
      return {
        ...state,
        isModalOpen: action.payload
      }

    case PopUpActions.handleChangeCategoriaAsociada:
      return {
        ...state,
        categoriasAsociadas: action.payload,
        categoriasAsociadasError: ''
      }

    case PopUpActions.handleChangePluAsociado:
      return {
        ...state,
        pluAsociado: action.payload,
        pluAsociadoError: ''
      }

    case PopUpActions.handleChangeImagenDesktop:
      return {
        ...state,
        imagenDesktop: action.payload,
        imagenDesktopError: ''
      }

    case PopUpActions.handleChangeImagenMobile:
      return {
        ...state,
        imagenMobile: action.payload,
        imagenMobileError: ''
      }

    case PopUpActions.handleChangePrecioSinDescuento:
      return {
        ...state,
        precioSinDescuento: action.payload,
        precioSinDescuentoError: ''
      }

    case PopUpActions.handleChangePrecioConDescuento:
      return {
        ...state,
        precioConDescuento: action.payload,
        precioConDescuentoError: ''
      }

    case PopUpActions.handleChangeFechaIncio:
      return {
        ...state,
        fechaInicio: action.payload
      }

    case PopUpActions.handleChangeFechaFinal:
      return {
        ...state,
        fechaFinal: action.payload
      }

    case PopUpActions.handleLoadingFetch:
      return {
        ...state,
        loadingFetch: action.payload
      }

    case PopUpActions.handleFetchSuccessfull:
      return {
        ...state,
        fetchSuccesfull: action.payload
      }

    case PopUpActions.handleFetchError:
      return {
        ...state,
        fetchError: action.payload
      }

    case PopUpActions.resetValues:
      return {
        ...state,
        fetchError: false,
        fetchSuccesfull: false,
        isModalOpen: false
      }

    case PopUpActions.categoriaAsociadaError:
      return {
        ...state,
        categoriasAsociadasError: errorInputMessage
      }

    case PopUpActions.pluAsociadoError:
      return {
        ...state,
        pluAsociadoError: errorInputMessage
      }

    case PopUpActions.imagenDesktopError:
      return {
        ...state,
        imagenDesktopError: errorInputMessage
      }

    case PopUpActions.imagenMobileError:
      return {
        ...state,
        imagenMobileError: errorInputMessage
      }

    case PopUpActions.precioSinDescuentoError:
      return {
        ...state,
        precioSinDescuentoError: errorInputMessage
      }

    case PopUpActions.precioConDescuentoError:
      return {
        ...state,
        precioConDescuentoError: errorInputMessage
      }

    default:
      return state;

  }
}

