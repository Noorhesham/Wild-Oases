import { createContext,useState,useContext } from "react"
import {createPortal}from "react-dom"
import { HiEllipsisVertical } from "react-icons/hi2";
import { useCloseModal } from "../hooks/useCloseModal";

const MenuContext=createContext()
function Menus({children}) {
  const [OpenId,setIsOpen]=useState('');
  const [Position,setPostion]=useState(null)
  const closeMenu=()=>setIsOpen("");
  const openMenu=(id)=>setIsOpen(id);
  return (
    <MenuContext.Provider value={{OpenId,Position,setPostion,closeMenu,openMenu}}>
   {children}
    </MenuContext.Provider>
  )
}

function Menu({children}){
  return  <div className=" relative flex items-center justify-end">
  {children}
</div>
}
function Toggle({id}){ //sets the id to the state and the list appears based on it 
  const {openMenu,closeMenu,OpenId,setPostion,Position}=useContext(MenuContext)
  function handleClick(e){
    const rect=e.target.closest("svg")?.getBoundingClientRect();
    const x=window.innerWidth-rect?.width-rect?.x
    const y=rect?.y+rect?.height+8
    setPostion({x,y})
    OpenId===''||OpenId!==id?openMenu(id):closeMenu()
  }
  return <div onClick={handleClick} className=" cursor-pointer bg-none border-none p-3 rounded-sm translate-x-2 transition-all duration-75 hover:bg-gray-100
  ">
    <HiEllipsisVertical className="w-10 h-10 text-gray-700 "/>
   </div>
}
function List({children,id}){
  const {OpenId,Position,closeMenu}=useContext(MenuContext)
  const ref=useCloseModal(closeMenu)
  if(OpenId!==id) return null;
  console.log(OpenId,id)
  return  createPortal(<ul ref={ref} style={{right:Position.x,top:Position.y}} className={`absolute z-50 bg-white shadow-md rounded-md ` }>{children}</ul>,
  document.body)
}
function Button({children,icon,onClick}){
  const {closeMenu}=useContext(MenuContext)
  function handleClick(){
    onClick?.()
    closeMenu()
  }
  return <li className="flex">
    <button onClick={handleClick} className="item w-[100%] text-left bg-none border-none py-5 px-10 text-2xl  transition-all duration-75 flex items-center gap-8 hover:bg-gray-50
  [&>svg]:w-6 [&>svg]:h-6 [&>svg]:text-gray-400 [&>svg]:transition-all [&>svg]:duration-[0.3s] ">
   {icon}<span>{children}</span></button>
    </li>
}
Menus.Menu=Menu
Menus.Toggle=Toggle
Menus.List=List
Menus.Button=Button
export default Menus
