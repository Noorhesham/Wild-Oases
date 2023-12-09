import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { editCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function EditCabinForm() {
    const{register,handleSubmit,reset,getValues,formState}=useForm()
    const {errors}=formState

    const queryClient=useQueryClient()
    const{isLoading,mutate}=useMutation({mutationFn:editCabin,onSuccess:()=>{
        toast.success('your cabin was successfully edited')
        queryClient.invalidateQueries({queryKey:['cabin']})
    },onError:(err)=>toast.error(err.message)})
    function onSubmit (data){
        mutate({...data,image:data.image[0]});
      }
      function onError(errors){
        console.log(errors)
      }
    return (
        <Form onSubmit={handleSubmit(onSubmit,onError)}>
        <FormRow label="Cabin name" error={errors?.name?.message}><input autoComplete="False"
              className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md" disabled={isLoading}
              type="text" id="name" {...register("name",{required:"This field is required.. 😥"})}/>
              </FormRow>
        <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}> <input
              className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
              type="number" disabled={isLoading}
              id="maxCapacity" {...register("maxCapacity",{required:"This field is required.. 😥",min:{value:1,
              message:'Capacity should at least be 1'}})}/>
              </FormRow>
        <FormRow label="Regular price" error={errors?.regularPrice?.message}>  <input
              className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
              type="number" disabled={isLoading}
              id="regularPrice"  {...register("regularPrice",{required:"This field is required.. 😥",min:{value:1,
                message:'Capacity should at least be 1'}})}
            />
              </FormRow>
        <FormRow label="Discount" error={errors?.discount?.message}>   <input
              className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
              type="number" disabled={isLoading}
              id="discount" {...register("discount", {
                required: "This field is required",
                validate: (value) =>
                  Number(getValues().regularPrice) > Number(value) ||
                  "Discount should be less than regular price",
              })}
              defaultValue={0}
            />
              </FormRow>
          <FormRow label="Description for cabin" error={errors?.description?.message}>
            <textarea id="description" className=" py-2 px-4 border-gray-300 rounded-md bg-gray-50 shadow-md w-[100%] h-[8rem]"
            {...register("description",{required:"This field is required.. 😥"})}>
        </textarea>
          </FormRow>
    
          <FormField>
            <label className=" font-semibold" htmlFor="image">
              Cabin photo
            </label>
            <input id="image" accept="image/*"
              type="file"  {...register("image",{required:"This field is required.. 😥"})}
              className="text-xl rounded-xl file:font-semibold file:py-3 file:px-4 file:mr-5 file:border-none 
          file:text-[color:var(--color-brand-50)] file:transition-colors file:duration-150  file:bg-[color:var(--color-brand-600)] 
      file:cursor-pointer file:hover:bg-[color:var(--color-brand-700)] "
            />
          </FormField>
    
          <FormField>
            {/* type is an HTML attribute! */}
            <Button variation="secondary" type="reset" disabled={isLoading}>
              Cancel
            </Button>
            <Button variation="primary">Add cabin</Button>
          </FormField>
        </Form>
      );
}

export default EditCabinForm
