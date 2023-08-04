import { useState, useRef, useEffect } from 'react';

type SerilizerProps<T> = {
  serialize?: (value: T | Object) => string;
  deserialize?: (value: string) => T;
};

function useLocalStorageState<T>(
  key: string = '',
  defaultValue: Object = '',
  { serialize = JSON.stringify, deserialize = JSON.parse }: SerilizerProps<T> = {},
) {
  const [state, setState] = useState<T | Object>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue;
  });

  const prevKeyRef = useRef<string>(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useLocalStorageState };
