import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCabin as editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin(){
    const queryClient=useQueryClient();
    const {isLoading:isEditing,mutate:editCabin}=useMutation({mutationFn:({newCabinData,id})=>editCabinApi(newCabinData,id),onSuccess:()=>{
        toast.success('Cabin was successfully edited..!')
        queryClient.invalidateQueries({queryKey:['cabins']})
      },onError:(err)=>toast.error(err.message)
    })
    return {isEditing,editCabin}
}