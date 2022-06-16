import { useContext, createContext, useState } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ title: "", desc: "" });
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{ modal, setModal, openModal, setOpenModal }}>
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };
