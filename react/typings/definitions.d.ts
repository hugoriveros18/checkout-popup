interface PopUpData {
  id: string
  categoriasAsociadas: string
  pluAsociado: string
  imagenDesktop: string
  imagenMobile: string
  precioSinDescuento: string
  precioConDescuento: string
  fechaInicio: string
  fechaFinal: string
}

interface PopUpEdition {
  isModalOpen: boolean
  categoriasAsociadas: string
  categoriasAsociadasError: string
  pluAsociado: string
  pluAsociadoError: string
  imagenDesktop: string
  imagenDesktopError: string
  imagenMobile: string
  imagenMobileError: string
  precioSinDescuento: string
  precioSinDescuentoError: string
  precioConDescuento: string
  precioConDescuentoError: string
  fechaInicio: any
  fechaFinal: any
  loadingFetch: boolean
  fetchSuccesfull: boolean
  fetchError: boolean
}

interface Field {
  key: string
  value: string
}

interface PopUpGeneralProps {
  popUpData: PopUpData
  loadingData?: boolean
}
