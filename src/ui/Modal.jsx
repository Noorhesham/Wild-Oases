import {HiXMark} from "react-icons/hi2";
import {createPortal} from "react-dom"
import { cloneElement, createContext , useContext} from "react";
import {useState} from "react";
import { useCloseModal } from "../hooks/useCloseModal";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () =>{
    setOpenName('');
    console.log('closed')
  }
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref=useCloseModal(close,true)

  if (name !== openName) return null;
  return createPortal(
    <div className=" fixed top-0 left-0 w-[100%] h-[100vh] backdrop-blur-md transition-all duration-75 ">
      <div ref={ref} className=" fixed top-[50%] left-[50%] translate-x-[-50%] z-10  translate-y-[-50%] bg-white rounded-lg shadow-lg py-14 px-16 ">
      <button onClick={close} className=" focus:ring-2 ring-cyan-500 bg-none border-none p-2 rounded-sm translate-x-2 transition-all duration-75 absolute top-[1.2rem] right-[1.9rem] hover:bg-gray-100">
        <HiXMark className=" w-10 h-10 fill-gray-500 text-gray-500"/>
      </button>
       <div> {cloneElement(children,{CloseForm:close})}</div>
      </div>
    </div>,document.body
  );
}
Modal.Open=Open
Modal.Window=Window
export default Modal;
