import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import FormField from "../../ui/FormField";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabinn";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({cabinToEdit={},CloseForm}) {
  //the hook form library gives us register function that takes the id of input as the name of prop and the value as the value in the object
  //it gives us the handle submit that takes 2 functions one for success one for error aand the reset function too 
  //formState to return some states like errors state 
  //...destruct result of calling register() that takes name and some required validate and things in order to fill the form successfully
  //if the register success=> fill the form and return OBJ else send error that will be receieved in formstate errors
  const {id:editId,...editValues}=cabinToEdit;
  const isEditSession=Boolean(editId)

  //Form Hook setup
  const { register, handleSubmit,reset,getValues,formState} = useForm({defaultValues:isEditSession?editValues:{}});
  const {errors}=formState;

  const {isCreating,createCabin}=useCreateCabin();
  const {isEditing,editCabin}=useEditCabin()
  
  function onSubmit (data){
    createCabin({...data,image:data.image[0]},{onSuccess:(data)=>{
      reset();
      CloseForm?.()
    }});
  }
  function onEdit(data){
    const image= typeof data.image==='string'?data.image:data.image[0];
    editCabin({newCabinData:{...data,image},id:editId},{onSuccess:(data)=>{
      reset();
      CloseForm?.()
    }})
  }
  function onError(errors){
    console.log(errors)
  }

  const isWorking=isEditing||isCreating;

  return (
    <form onSubmit={isEditSession?handleSubmit(onEdit,onError):handleSubmit(onSubmit,onError)}className={` text-[1.4rem]${CloseForm?'w-[80rem]':"py-5 px-10  bg-white border-gray-100 rounded-md"}`} >
    <FormRow label="Cabin name" error={errors?.name?.message}><input autoComplete="False"
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md" disabled={isWorking}
          type="text" id="name" {...register("name",{required:"This field is required.. 😥"})}/>
          </FormRow>
    <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}> <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number" disabled={isWorking}
          id="maxCapacity" {...register("maxCapacity",{required:"This field is required.. 😥",min:{value:1,
          message:'Capacity should at least be 1'}})}/>
          </FormRow>
    <FormRow label="Regular price" error={errors?.regularPrice?.message}>  <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number" disabled={isWorking}
          id="regularPrice"  {...register("regularPrice",{required:"This field is required.. 😥",min:{value:1,
            message:'Capacity should at least be 1'}})}
        />
          </FormRow>
    <FormRow label="Discount" error={errors?.discount?.message}>   <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number" disabled={isWorking}
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
          type="file"  {...register("image",{required:isEditSession?false:"This field is required.. 😥"})}
          className="text-xl rounded-xl file:font-semibold file:py-3 file:px-4 file:mr-5 file:border-none 
      file:text-[color:var(--color-brand-50)] file:transition-colors file:duration-150  file:bg-[color:var(--color-brand-600)] 
  file:cursor-pointer file:hover:bg-[color:var(--color-brand-700)] "
        />
      </FormField>

      <FormField>
        {/* type is an HTML attribute! */}
        <Button onClick={()=>CloseForm?.()} variation="secondary"  type="reset" disabled={isWorking}>
          Cancel
        </Button>
        <Button variation="primary">{isEditSession?"Edit ":"Add "}cabin</Button>
      </FormField>
    </form>
  );
}

export default CreateCabinForm;
