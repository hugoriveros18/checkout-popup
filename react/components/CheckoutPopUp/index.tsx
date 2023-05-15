import React from 'react';
import { Layout, PageHeader, PageBlock } from 'vtex.styleguide';
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import PopUpDesktop from '../PopUpDesktop';
import PopUpMobile from '../PopUpMobile';
import useRequestData from '../../hooks/useRequestData';
import PopUpSummary from '../PopUpSummary';
import PopUpEdition from '../PopUpEditon';
import './styles.css';

const CSS_HANDLES = [
  'checkout-popup__global-container',
  'checkout-popup__global-container--internal'
]

export default function CheckoutPopUp() {

  //DEVICE DETECTOR
  const { isMobile } = useDevice()

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //POP UP DATA
  const {popUpData, loadingData } = useRequestData();

  //JSX
  return (
    <div className={`${handles['checkout-popup__global-container']}`}>
      <div className={`${handles['checkout-popup__global-container--internal']}`}>
        <Layout
          fullWidth
          pageHeader= {
            <PageHeader
              title="Configuración Checkout Pop Up"
            >
              <PopUpEdition popUpData={popUpData}/>
            </PageHeader>
          }
        >
          <PageBlock variation="full">
            <PopUpSummary popUpData={popUpData}/>
          </PageBlock>

          {
            isMobile &&
            <div>
              <PageBlock variation="full">
                <PopUpDesktop popUpData={popUpData} loadingData={loadingData}/>
              </PageBlock>
              <PageBlock variation="full">
                <PopUpMobile popUpData={popUpData} loadingData={loadingData}/>
              </PageBlock>
            </div>
          }
          {
            !isMobile &&
            <PageBlock variation="aside">
              <PopUpDesktop popUpData={popUpData} loadingData={loadingData}/>
              <PopUpMobile popUpData={popUpData} loadingData={loadingData}/>
            </PageBlock>
          }
        </Layout>
      </div>
    </div>
  )
}
