import { useState, useEffect } from "react";

export default function useRequestData() {

  //STATES
  const [popUpData, setPopUpData] = useState<any>({});
  const [loadingData, setLoadingData] = useState<boolean>(true);

  //EFFECTS
  useEffect(() => {
    const fetchPopUpData = async () => {
      await fetch(
        `/api/dataentities/PU/search?_fields=id,categoriasAsociadas,pluAsociado,imagenDesktop,imagenMobile,precioSinDescuento,precioConDescuento,fechaInicio,fechaFinal`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/vnd.vtex.ds.v10+json"
            }
        }
      )
      .then((res) => {
        if(res.ok) {
          return res.json()
        }
        throw Error();
      })
      .then((res) => {
        setPopUpData(res[0]);
      })
      .catch((error) => {
        console.error(error);
      })

      setLoadingData(false);
    }

    fetchPopUpData();
  },[])

  //RETURN VALUES
  return {
    popUpData: popUpData,
    loadingData: loadingData
  }
}
