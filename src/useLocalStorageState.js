import { useState, useEffect } from "react";
export default function useLocalStorageState(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const [state, setState] = useState(storedValue ? JSON.parse(storedValue) : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}