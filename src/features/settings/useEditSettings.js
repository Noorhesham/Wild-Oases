import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as editSettingsApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useEditSettings(){
    const queryClient=useQueryClient();
    const {isLoading:isUpdating,mutate:editSettings}=useMutation({mutationFn:editSettingsApi,onSuccess:()=>{
        toast.success('Settings was successfully edited..!')
        queryClient.invalidateQueries({queryKey:['settings']})
      },onError:(err)=>toast.error(err.message)
    })
    return {isUpdating,editSettings}
}