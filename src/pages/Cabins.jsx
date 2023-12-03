import {useState} from "react"
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import Button from "../ui/Button";
function Cabins() {
  const [showForm,setshowForm]=useState(false)
  return (
    <>
    <div className=" flex justify-between">
    <h1 className=" font-semibold text-6xl ">All Cabins</h1>
<p>Filter / Sort</p>
</div>
  <div>
    <CabinTable/>
  </div>
    <Button onClick={()=>setshowForm(show=>!show)} variation="primary" >add new cabin</Button>
    {showForm&&<CreateCabinForm/>}
  </>

  );
}

export default Cabins;
