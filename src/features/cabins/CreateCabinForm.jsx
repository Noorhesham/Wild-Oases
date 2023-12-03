import styled from "styled-components";


import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormField from "../../ui/FormField";
import { useForm } from "react-hook-form";

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const { register, handleSubmit } = useForm();
  function onSubmit (data){

  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <label className=" font-semibold" htmlFor="name">
          Cabin name
        </label>
        <input autoComplete="false"
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="text"
          id="name" {...register("name")}
        />
      </FormField>

      <FormField>
        <label className="font-semibold" htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number"
          id="maxCapacity" {...register("maxCapacity")}
        />
      </FormField>

      <FormField>
        <label className=" font-semibold" htmlFor="regularPrice">
          Regular price
        </label>
        <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number"
          id="regularPrice"  {...register("regularPrice")}
        />
      </FormField>

      <FormField>
        <label className=" font-semibold" htmlFor="discount">
          Discount
        </label>
        <input
          className=" border-gray-300 bg-gray-50 rounded-md py-3 px-6 shadow-md"
          type="number"
          id="discount" {...register("discount")}
          defaultValue={0}
        />
      </FormField>

      <FormField>
        <label className=" font-semibold" htmlFor="description">
          Description for website
        </label>
        <textarea id="description" className=" py-2 px-4 border-gray-300 rounded-md bg-gray-50 shadow-md w-[100%] h-[8rem]"
        {...register("description")}>
    </textarea>
      </FormField>

      <FormField>
        <label className=" font-semibold" htmlFor="image">
          Cabin photo
        </label>
        <input
          type="file"
          className="text-xl rounded-md file:font-semibold file:py-2 file:px-4 file:mr-5 file:border-none 
      file:text-[color:var(--colort-brand-600)] file:transition-all file:duration-75
  file:cursor-pointer file:hover:bg-[color:var(--colort-brand-700)]  "
        />
      </FormField>

      <FormField>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button variation="primary">Add cabin</Button>
      </FormField>
    </Form>
  );
}

export default CreateCabinForm;
