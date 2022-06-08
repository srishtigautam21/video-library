import { useContext, createContext } from "react";

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  return <ModalContext.Provider>{children}</ModalContext.Provider>;
};
const useModal = () => useContext(ModalContext);
export { useModal, ModalProvider };
