import { useSearchParams } from "react-router-dom";

function Filter({name,options}) {
  const[searchParams,setSearchParams] =useSearchParams();
  const currentFilter=searchParams.get(name)||options[0].value;
  function handleClick(value){
    searchParams.set(name, value)
    setSearchParams(searchParams);
  }
  const style=" bg-white border-none rounded-md font-semibold py-1 px-2 text-[1.4rem] transition-all duration-75 hover:bg-[color:var(--color-brand-600)] hover:text-[color:var(--color-brand-50)] uppercase"
  return (
    <div className=" border-gray-100 bg-white shadow-sm rounded-sm p-2 flex gap-1">
      {options.map(option=><button key={option.value} className={`${currentFilter===option.value?"bg-[var(--color-brand-600)] text-white":""}${style}`} 
      onClick={()=>handleClick(option.value)} disabled={currentFilter===option.value}>{option.label}</button> )}
    </div>
  )
}

export default Filter
