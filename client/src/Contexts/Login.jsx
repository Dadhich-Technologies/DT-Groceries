import  { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
      alert(open)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handletoggle = () =>{
      setOpen(!open);
      alert(open)
      
    }
  

  return (
    <LoginContext.Provider
      value={{
        open,
        setOpen,
        handleClickOpen,
        handleClose,
        handletoggle
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
