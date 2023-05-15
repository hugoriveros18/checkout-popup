import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { ModalDialog, Button, Input, Alert } from 'vtex.styleguide';
import './styles.css';
import usePopUpState from "../../hooks/usePopUpState";
import { PopUpActions } from "../../typings/variables";

const CSS_HANDLES = [
  'popup-edition__global-container',
  'popup-edition__two-columns',
  'popup-edition__time-label'
]

export default function PopUpEdition({popUpData}:PopUpGeneralProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //POP UP EDITION STATE
  const {state, dispatch, handleSubmit} = usePopUpState({popUpData});

  //JSX
  return (
    <div>
      <Button onClick={() => dispatch({type: PopUpActions.handleModal, payload: true})}>
        Editar Pop Up
      </Button>

      <ModalDialog
        centered
        loading={state.loadingFetch}
        isOpen={state.isModalOpen}
        onClose={() => dispatch({type: PopUpActions.handleModal, payload: false})}
        cancelation={{
          onClick: () => dispatch({type: PopUpActions.handleModal, payload: false}),
          label: 'Cancelar'
        }}
        confirmation={{
          onClick: handleSubmit,
          label: 'Guardar'
        }}
      >
        <div className={`${handles['popup-edition__global-container']}`}>

          <div className={`${handles['popup-edition__two-columns']}`}>
            {/* CATEGORIAS ASOCIADAS */}
            <Input
              placeholder="80/90/91"
              required
              value={state.categoriasAsociadas}
              label="Categorias Asociadas"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangeCategoriaAsociada, payload: event.target.value})
              }}
              errorMessage={state.categoriasAsociadasError}
            />
            {/* PLU ASOCIADO */}
            <Input
              placeholder="634521"
              required
              value={state.pluAsociado}
              label="Plu Asociado"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangePluAsociado, payload: event.target.value})
              }}
              errorMessage={state.pluAsociadoError}
            />
          </div>

          {/* IMAGEN DESKTOP */}
          <div>
          <Input
              placeholder="
              https://www.url-desktop.com/"
              required
              value={state.imagenDesktop}
              label="Url Imagen Desktop"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangeImagenDesktop, payload: event.target.value})
              }}
              errorMessage={state.imagenDesktopError}
            />
          </div>

          {/* IMAGEN MOBILE */}
          <div>
          <Input
              placeholder="
              https://www.url-mobile.com/"
              required
              value={state.imagenMobile}
              label="Url Imagen Mobile"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangeImagenMobile, payload: event.target.value})
              }}
              errorMessage={state.imagenMobileError}
            />
          </div>

          <div className={`${handles['popup-edition__two-columns']}`}>
            {/* PRECIO SIN DESCUENTO */}
            <Input
              placeholder="$565.900"
              required
              value={state.precioSinDescuento}
              label="Precio Sin Descuento"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangePrecioSinDescuento, payload: event.target.value})
              }}
              errorMessage={state.precioSinDescuentoError}
            />
            {/* PRECIO CON DESCUENTO */}
            <Input
              placeholder="$209.900"
              required
              value={state.precioConDescuento}
              label="Precio Con Descuento"
              onChange={(event:any) => {
                dispatch({type: PopUpActions.handleChangePrecioConDescuento, payload: event.target.value})
              }}
              errorMessage={state.precioConDescuentoError}
            />
          </div>

          <div className={`${handles['popup-edition__two-columns']}`}>
            {/* FECHA Y HORA INICIO */}
            <label className={`${handles['popup-edition__time-label']}`}>
              Fecha y Hora de Inicio
              <input type="datetime-local" value={state.fechaInicio} onChange={(event) => {
                dispatch({type: PopUpActions.handleChangeFechaIncio, payload: event.target.value})
              }}/>
            </label>
            {/* FECHA Y HORA FINAL */}
            <label className={`${handles['popup-edition__time-label']}`}>
              Fecha y Hora Final
              <input type="datetime-local" value={state.fechaFinal} onChange={(event) => {
                dispatch({type: PopUpActions.handleChangeFechaFinal, payload: event.target.value})
              }}/>
            </label>
          </div>

          {
            state.fetchSuccesfull &&
            <Alert type="success">
              Pop Up actualizado exitosamente.
            </Alert>
          }

          {
            state.fetchError &&
            <Alert type="error">
              Se ha producido un error, intentelo de nuevo.
            </Alert>
          }

        </div>
      </ModalDialog>
    </div>
  )
}

