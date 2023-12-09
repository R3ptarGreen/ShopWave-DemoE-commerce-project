import { useRef } from 'react';

const useEventEmitter = () => {
  const listeners = useRef([]);

  const subscribe = (callback) => {
    listeners.current.push(callback);
  };

  const emit = (data) => {
    listeners.current.forEach((listener) => listener(data));
  };

  return { subscribe, emit };
};

export default useEventEmitter;
