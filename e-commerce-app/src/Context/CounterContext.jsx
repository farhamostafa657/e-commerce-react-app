import { createContext, useState } from "react";

export let CounterContext = createContext();

export default function CounterContextProvider({ children }) {
  const [count, setCount] = useState(10);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
