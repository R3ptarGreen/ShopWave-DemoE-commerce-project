import { useState, useEffect, useRef } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const listenersRef = useRef([]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      notifyListeners(value);
    } catch (error) {
      console.error(error);
    }
  };

  const notifyListeners = (value) => {
    listenersRef.current.forEach((listener) => {
      listener(value);
    });
  };

  const subscribe = (listener) => {
    listenersRef.current.push(listener);
  };

  const unsubscribe = (listener) => {
    listenersRef.current = listenersRef.current.filter(
      (currentListener) => currentListener !== listener
    );
  };

  useEffect(() => {
    // Notificar a los suscriptores cuando se monta el componente
    notifyListeners(storedValue);
  }, [storedValue]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        const newValue = JSON.parse(event.newValue);
        setStoredValue(newValue);
        notifyListeners(newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Actualizar la referencia del array al montar y desmontar el componente
    const currentListeners = listenersRef.current;

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      listenersRef.current = currentListeners;
    };
  }, [key]);

  return { storedValue, setValue, subscribe, unsubscribe };
};

export default useLocalStorage;
