import { createContext } from "react";

  export const context = createContext({
    phone: "",
    setPhone:() => {},
    validator: null,
    handleCheck:() => {},
  
  })