import React from "react";
import { Progress } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';
import useDateValidation from "../../hooks/useDateValidation";

const CSS_HANDLES = [
  'popup__information--main-title',
  'popup__information-container',
  'popup__information-item',
  'popup__information-item--title',
  'popup__information-item--value'
]

export default function PopUpSummary({popUpData}:PopUpGeneralProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DATE VALIDATION
  const { fechaIncio, fechaFinal, fechaValida, loading } = useDateValidation({
    fechaInicio: popUpData.fechaInicio,
    fechaFinal: popUpData.fechaFinal
  });

  //JSX
  if(loading) {
    return (
      <div>
        <Progress type="steps" steps={['inProgress']} />
      </div>
    )
  }

  return (
    <div>
      <div className={`${handles['popup__information--main-title']}`}>
        <h4>Información General</h4>
      </div>

      <ul className={`${handles['popup__information-container']}`}>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Categorias Asociadas:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.categoriasAsociadas}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Plu Asociado:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.pluAsociado}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Url Imagen Desktop:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.imagenDesktop}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Url Imagen Mobile:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.imagenMobile}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Precio Sin Descuento:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.precioSinDescuento}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Precio Con Descuento:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {popUpData.precioConDescuento}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Fecha de Inicio:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {fechaIncio}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Fecha Final:
          </div>
          <div className={`${handles['popup__information-item--value']}`}>
            {fechaFinal}
          </div>
        </li>

        <li className={`${handles['popup__information-item']}`}>
          <div className={`${handles['popup__information-item--title']}`}>
            Estado:
          </div>
          <div
            className={`${handles['popup__information-item--value']}`}
            style={fechaValida ? {color: "green", fontWeight: 600} : {color: "red", fontWeight: 600}}>
            {fechaValida ? 'Activo' : 'Inactivo'}
          </div>
        </li>

      </ul>
    </div>
  )
}
