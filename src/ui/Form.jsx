function Form({children,type}) {
  const style=type==="Modal"?"w-[80rem]":'py-5 px-10  bg-white border-gray-100 rounded-md ';
  return (
    <Form className={` text-[1.4rem] ${style}`} >
      {children}
    </Form>
  )
}

export default Form

