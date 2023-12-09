import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

//we have mutate function that is resposible for api and remote state with onsuccess and on error so we gather all these functions into 1 
//mutate function and we rename it then we return it to use it in the onclick prop
export function useDeleteCabin(){
    const queryClient=useQueryClient();
    const {isLoading:isDeleteing,mutate:deleteCabin}=useMutation({
        mutationFn:deleteCabinApi,
        onSuccess:()=>{
          toast.success('Successfully deleted')
          queryClient.invalidateQueries({
            queryKey:['cabins'],
          })
        },
        onError:(err)=>toast.error(err.message)
      });
      return {isDeleteing,deleteCabin}
}
