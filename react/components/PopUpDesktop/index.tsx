import React from "react";
import { Progress } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';


const CSS_HANDLES = [
  'desktop-popup__title-container',
  'desktop-popup__global-container',
  'desktop-image__container',
  'desktop-info__container',
  'modalCombo__footer__form',
  'modalCombo__footer__option',
  'modalCombo__footer__button',
  'modalCombo__price',
  'modalCombo__price__old',
  'modalCombo__price__new',
  'modalCombo__footer__button',
  'modalCombo__button'
]

export default function PopUpDesktop({popUpData, loadingData}:PopUpGeneralProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  if(loadingData) {
    return (
      <div>
        <Progress type="steps" steps={['inProgress']} />
      </div>
    )
  }

  return (
    <>
      <div className={`${handles['desktop-popup__title-container']}`}>
        <h4>Version Desktop</h4>
      </div>
      <div className={`${handles['desktop-popup__global-container']}`}>

        <div className={`${handles['desktop-image__container']}`}>
          <img src={popUpData.imagenDesktop}/>
        </div>

        <div className={`${handles['desktop-info__container']}`}>
          <div className={`${handles['modalCombo__footer__form']}`}>
              <label className={`${handles['modalCombo__footer__option']}`}>
                  <div className={`${handles['modalCombo__footer__button']}`}>
                      <input type="radio" name="combo" checked></input>
                      ¡LO QUIERO!
                  </div>
                  <div className={`${handles['modalCombo__price']}`}>
                      <p className={`${handles['modalCombo__price__old']}`}>De {popUpData.precioSinDescuento}</p>
                      <p className={`${handles['modalCombo__price__new']}`}>Por {popUpData.precioConDescuento}</p>
                  </div>
              </label>
              <label className={`${handles['modalCombo__footer__option']}`}>
                  <div className={`${handles['modalCombo__footer__button']}`}>
                      <input type="radio" name="combo"></input>
                      NO, GRACIAS
                  </div>
              </label>
              <button className={`${handles['modalCombo__button']}`}>CONTINUAR</button>
          </div>
        </div>

      </div>
    </>
  )
}
