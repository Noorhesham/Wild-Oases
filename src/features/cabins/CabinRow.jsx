import { useMutation, useQueryClient } from "@tanstack/react-query"
import {formatCurrency} from"../../utils/helpers"
import { deleteCabin } from "../../services/apiCabins"
import toast from "react-hot-toast";
function CabinRow({cabin}) {
  const {image,name,maxCapacity,regularPrice,discount,id}=cabin
  const queryClient=useQueryClient();
  const {isLoading:isDeleteing,mutate}=useMutation({
    mutationFn:deleteCabin,
    onSuccess:()=>{
      toast.success('Successfully deleted')
      queryClient.invalidateQueries({
        queryKey:['cabins'],
      })
    },
    onError:(err)=>toast.error(err.message)
  })
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr]  border-b-2
    border-gray-100 last:border-b-0  py-6 px-[2.4rem]  gap-y-[2.4rem] items-center bg-white">
     <img src={image} className=" block w-24  object-cover object-center scale-150 translate-x-[-7px]" alt="" />
     <h1 className=" text-2xl font-semibold text-gray-600 font-mono ml-7">{name}</h1>
     <div>fits up to {maxCapacity} guests</div>
     <h2 className=" font-mono font-semibold"> {formatCurrency(regularPrice)}</h2>
     <h2 className=" font-mono font-semibold text-green-700">{formatCurrency(discount)}</h2>
     <button onClick={()=>mutate(id)} disabled={isDeleteing}>Delete</button>
    </div>
  )
}

export default CabinRow
