import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
function Cabins() {
  return (
    <>
    <div className=" flex justify-between">
    <h1 className=" font-semibold text-6xl ">All Cabins</h1>
    <CabinTableOperations/>
  </div>
  <div>
    <CabinTable/>
  </div>
    <AddCabin/>
  </>

  );
}

export default Cabins;
