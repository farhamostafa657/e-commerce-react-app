import { createContext, useEffect, useState } from "react";

export let TokenCoteext = createContext();

export default function TokenCoteextProvider({ children }) {
  const [token, setToken] = useState("");

  function checkLogedIn() {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
    }
  }
  useEffect(() => {
    checkLogedIn;
  }, []);
  return (
    <TokenCoteext.Provider value={{ token, setToken }}>
      {children}
    </TokenCoteext.Provider>
  );
}
