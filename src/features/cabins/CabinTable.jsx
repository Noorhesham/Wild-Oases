import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow"
import { useCabins } from "./useCabins";

function CabinTable() {
  const {isLoading,cabins}=useCabins()
  if (isLoading) return <Spinner />;
  const[searchParams]=useSearchParams()
  if(!cabins.length) return <Empty resource="cabins" />

  const filterValue=searchParams.get("discount")||"all";
  let filterCabins;
  if(filterValue==='all')filterCabins=cabins;
  if(filterValue==="with-discount")filterCabins=cabins.filter(cabin=>cabin.discount>0);
  if(filterValue==="without-discount")filterCabins=cabins.filter(cabin=>cabin.discount===0);

  const sortValue=searchParams.get("sortBy")||"StartDate-asc";
  const[field,direction]=sortValue.split('-');
  const modifire=direction==="desc"?-1:1 
  const sortCabins =
  field === "name"
    ? filterCabins.sort((a, b) => a.name.localeCompare(b.name) * modifire)
    : filterCabins?.sort((a, b) => (a[field] - b[field]) * modifire);  
  return (
    <Menus>
    <Table column={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"} className=" bg-gray-50 rounded-md overflow-hidden border-2 border-[color:var(--color-grey-200)]">
      <Table.Header >
        <div></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>dicount</div>
        <div>discription</div>
       </Table.Header>
       <Table.Body data={sortCabins} render={cabin=><CabinRow cabin={cabin} key={cabin.id} />} />
    </Table>
    </Menus>
  );
}

export default CabinTable;
