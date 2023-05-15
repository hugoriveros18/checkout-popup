import React from "react";
import { Progress } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';


const CSS_HANDLES = [
  'mobile-popup__title-container',
  'mobile-popup__global-container',
  'mobile-image__container',
  'mobile-info__container',
  'mobile-modalCombo__footer__form',
  'mobile-modalCombo__footer__option',
  'mobile-modalCombo__footer__button',
  'mobile-modalCombo__price',
  'mobile-modalCombo__price__old',
  'mobile-modalCombo__price__new',
  'mobile-modalCombo__footer__button',
  'mobile-modalCombo__button'
]

export default function PopUpMobile({popUpData, loadingData}:PopUpGeneralProps) {

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
    <div>
      <div className={`${handles['mobile-popup__title-container']}`}>
        <h4>Version Mobile</h4>
      </div>
      <div className={`${handles['mobile-popup__global-container']}`}>

        <div className={`${handles['mobile-image__container']}`}>
          <img src={popUpData.imagenMobile}/>
        </div>

        <div className={`${handles['mobile-info__container']}`}>
          <div className={`${handles['mobile-modalCombo__footer__form']}`}>
              <label className={`${handles['mobile-modalCombo__footer__option']}`}>
                  <div className={`${handles['mobile-modalCombo__footer__button']}`}>
                      <input type="radio" name="combo" checked></input>
                      ¡LO QUIERO!
                  </div>
                  <div className={`${handles['mobile-modalCombo__price']}`}>
                      <p className={`${handles['mobile-modalCombo__price__old']}`}>De {popUpData.precioSinDescuento}</p>
                      <p className={`${handles['mobile-modalCombo__price__new']}`}>Por {popUpData.precioConDescuento}</p>
                  </div>
              </label>
              <label className={`${handles['mobile-modalCombo__footer__option']}`}>
                  <div className={`${handles['mobile-modalCombo__footer__button']}`}>
                      <input type="radio" name="combo"></input>
                      NO, GRACIAS
                  </div>
              </label>
              <button className={`${handles['mobile-modalCombo__button']}`}>CONTINUAR</button>
          </div>
        </div>

      </div>
    </div>
  )
}
