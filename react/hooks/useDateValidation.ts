import { useEffect, useState } from "react";

interface UseDateValidationProps {
  fechaInicio: string
  fechaFinal: string
}

export default function useDateValidation({
  fechaInicio,
  fechaFinal
}:UseDateValidationProps) {

  //STATES
  const [fechaInicioFormated, setFechaInicioFormated] = useState<string>('');
  const [fechaFinalFormated, setFechaFinalFormated] = useState<string>('');
  const [fechaActiva, setFechaActiva] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  //EFFECTS
  useEffect(() => {
    if(fechaInicio && fechaFinal) {
      setFechaInicioFormated(fechaInicio.replace('DF', ' ~ '));
      setFechaFinalFormated(fechaFinal.replace('DF', ' ~ '));

      const ahora = new Date();
      const fechaInicioInput = new Date(fechaInicio.replace('DF','T'));
      const fechaFinalInput = new Date(fechaFinal.replace('DF','T'));

      if(fechaInicioInput.getTime() < ahora.getTime() && fechaFinalInput.getTime() > ahora.getTime()) {
        setFechaActiva(true);
      }
      setLoading(false);
    }
  },[fechaInicio,fechaFinal])

  //RETURN VALUES
  return {
    fechaIncio: fechaInicioFormated,
    fechaFinal: fechaFinalFormated,
    fechaValida: fechaActiva,
    loading: loading
  }
}

