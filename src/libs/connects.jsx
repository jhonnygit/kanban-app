import React, { useContext, useEffect, useState } from 'react';
import FluxContext from './FluxContext'; // Importa el contexto

function composeStores(stores) {
  if (!stores || typeof stores !== 'object') {
    console.error('stores no es un objeto válido:', stores);
    return {};
  }

  let ret = {};
  Object.keys(stores).forEach((k) => {
    const store = stores[k];
    ret = { ...ret, ...store.getState() };
  });
  return ret;
}

export default function connect(state = () => {}, actions = {}) {
  return function (TargetComponent) {
    return function (props) {
      const flux = useContext(FluxContext); // Usa useContext para acceder al contexto
      const [stores, setStores] = useState(flux.stores); // Estado para los stores

      // Escucha cambios en FinalStore
      useEffect(() => {
        if (!flux || !flux.FinalStore) {
          console.error('flux o flux.FinalStore no está definido');
          return;
        }

        const handleChange = () => {
          setStores(flux.stores); // Actualiza los stores cuando cambian
        };

        flux.FinalStore.listen(handleChange);

        return () => {
          flux.FinalStore.unlisten(handleChange);
        };
      }, [flux]);

      // Compone los stores y pasa las props al componente
      const composedStores = composeStores(stores);
      const mergedProps = { ...props, ...state(composedStores), ...actions };

      return <TargetComponent {...mergedProps} />;
    };
  };
}