import { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useTemps = () => {
  const [numeros, setNumeros] = useState({
    number1: 0,
    number2: 0,
    number3: 0,
  });
  const [animacionIniciada, setAnimacionIniciada] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !animacionIniciada) {
      setAnimacionIniciada(true);

      const incremento = 1;
      const intervalo = 80;

      const temporizador1 = setInterval(() => {
        setNumeros((prevNumeros) => {
          const nuevoNumero1 = prevNumeros.number1 + incremento;
          return {
            ...prevNumeros,
            number1: nuevoNumero1 >= 30 ? 30 : nuevoNumero1,
          };
        });
      }, intervalo);

      const temporizador2 = setInterval(() => {
        setNumeros((prevNumeros) => {
          const nuevoNumero2 = prevNumeros.number2 + incremento;
          return {
            ...prevNumeros,
            number2: nuevoNumero2 >= 40 ? 40 : nuevoNumero2,
          };
        });
      }, intervalo);

      const temporizador3 = setInterval(() => {
        setNumeros((prevNumeros) => {
          const nuevoNumero3 = prevNumeros.number3 + incremento;
          return {
            ...prevNumeros,
            number3: nuevoNumero3 >= 20 ? 20 : nuevoNumero3,
          };
        });
      }, intervalo);

      setTimeout(() => {
        clearInterval(temporizador1);
        clearInterval(temporizador2);
        clearInterval(temporizador3);
      }, Math.max(30 - numeros.number1, 40 - numeros.number2, 5 - numeros.number3) * intervalo);
    }
  }, [inView, animacionIniciada, numeros]);
  return {
    ref,
    numeros,
  };
};
