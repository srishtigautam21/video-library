import { useContext, createContext, useState } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ title: "", desc: "" });

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };
