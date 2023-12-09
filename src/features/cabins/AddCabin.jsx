import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";


function AddCabin(){
    return <div>
    <Modal>
        <Modal.Open opens="newCabin"><Button variation="primary">Add new cabin</Button></Modal.Open>
        <Modal.Window name="newCabin"><CreateCabinForm/></Modal.Window>
    </Modal>
    </div>
}

// function AddCabin() {
//     const [showForm,setshowForm]=useState(false)
//     return (<>
   
//     <Button onClick={()=>setshowForm(show=>!show)} variation="primary" >add new cabin</Button>
//        <div>
//        {showForm&&
//     <Modal CloseForm={()=>setshowForm(showForm=>false)}>
// <CreateCabinForm CloseForm={()=>setshowForm(showForm=>false)} />
//     </Modal>}

//        </div>

//        </>
//     )
// }

// 
export default AddCabin
