import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow"

function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;
  return (
    <table className=" bg-gray-50 rounded-md overflow-hidden border-2 border-[color:var(--color-grey-200)]">
      <div className=" grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] bg-gray-50  border-b-4
       border-gray-50 uppercase font-semibold py-6 px-10 text-gray-600">
        <div></div>
        <div>cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>dicount</div>
        <div>discription</div>
       </div>
       {cabins.map(cabin=><CabinRow cabin={cabin} key={cabin.id} />)}
    </table>
  );
}

export default CabinTable;
