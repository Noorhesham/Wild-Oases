import {formatCurrency} from"../../utils/helpers"
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import {HiPencil, HiSquare2Stack, HiTrash} from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabinn";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete"
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
function CabinRow({cabin}) {
  const {image,name,maxCapacity,regularPrice,discount,id,description}=cabin
  const {isDeleteing,deleteCabin}=useDeleteCabin();
  const {isCreating,createCabin}=useCreateCabin();
   function handleDuplicate(){
    createCabin({name:`Copy of ${name}`,image,maxCapacity,regularPrice,discount,description})
   }
  return (
    <>
    <Table.Row column={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
     <img src={image} className=" block w-24  object-cover object-center scale-150 translate-x-[-7px]" alt="" />
     <h1 className=" text-2xl font-semibold text-gray-600 font-mono ml-7">{name}</h1>
     <div>fits up to {maxCapacity} guests</div>
     <h2 className=" font-mono font-semibold"> {formatCurrency(regularPrice)}</h2>
     {discount?<h2 className=" font-mono font-semibold text-green-700">{formatCurrency(discount)}</h2>:<h2 className=" ml-10">&mdash;</h2>}
     <div className=" flex gap-2">
      <Modal>
      <Menus.Menu>
        <Menus.Toggle id={id} />
        <Menus.List id={id}>
          <Menus.Button onClick={()=>handleDuplicate()}  icon={<HiSquare2Stack className="fill-[color:var(--color-grey-600)] hover:fill-[color:var(--color-brand-600)]
           transition-all duration-200" />}>
            Duplicate </Menus.Button>
        <Modal.Open opens="edit">
          <Menus.Button icon={ <HiPencil className="fill-[color:var(--color-grey-600)] hover:fill-[color:var(--color-brand-600)] 
          transition-all duration-200" />}>
            Edit</Menus.Button>
        </Modal.Open>
      <Modal.Open opens="delete">
          <Menus.Button icon={<HiTrash className="fill-[color:var(--color-grey-600)] hover:text-[color:var(--color-brand-600)]
           transition-all duration-200" />}>
            Delete</Menus.Button>
      </Modal.Open>
             </Menus.List>
           <Modal.Window name="edit">
           <CreateCabinForm cabinToEdit={cabin}/>
           </Modal.Window>
      <Modal.Window name="delete">
        <ConfirmDelete resourceName="cabin" disabled={isDeleteing} onConfirm={()=>deleteCabin(id)} />
      </Modal.Window>
     
      </Menus.Menu>
      </Modal> 
     </div>
    </Table.Row>
     <span>
     </span>
    </>
  )
}

export default CabinRow
