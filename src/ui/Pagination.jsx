import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import {PAGE_SIZE} from "../utils/constants"

function Pagination({children,active,count}) {
  const [searchParams,setSearchParams]=useSearchParams();
  let currentPage=!searchParams.get('page')?1:Number(searchParams.get('page'));
  const numPages=Math.ceil(count / PAGE_SIZE)
  function nextPage(){
    const next=currentPage!==numPages?currentPage+1:currentPage
    searchParams.set("page",next);
    setSearchParams(searchParams);
  }

  function prevPage(){
    const prev=currentPage!==1?currentPage-1:currentPage
    searchParams.set("page",prev);
    setSearchParams(searchParams);
  }

  return (
    <div className=" flex w-[100%] items-center justify-between">
      <p className=" text-[1.4rem] ml-2 [&>span]:font-semibold"> showing <span>{(currentPage-1)*PAGE_SIZE+1} </span> to  
       <span> {currentPage!==numPages?currentPage*PAGE_SIZE:count}</span> of <span> {count}</span> results</p>
      <div className=" flex gap-3">
      <button onClick={prevPage} disabled={currentPage===1}
      className={`bg-[color:var(--color-grey-50)] text-inherit border-none rounded-md  font-semibold text-[1.4rem]
      flex items-center justify-center gap-1 py-3 px-6 transition-all duration-75 first:pl-2 last:pr-2 [&>svg]:h-[2.2rem]
      [&>svg]:w-[2.2rem] hover:bg-[color:var(--color-brand-600)] hover:text-white  hover: [&>svg]:text-white
      ${active?"bg-[color:var(--color-brand-600)] text-[color:var(--color-brand-50)]":''}`}>
        <HiChevronLeft/> <span>Previous</span>
      </button>
      <button onClick={nextPage} disabled={currentPage===numPages}
      className={`bg-[color:var(--color-grey-50)] text-inherit border-none rounded-md  font-semibold text-[1.4rem]
      flex items-center justify-center gap-1 py-3 px-6 transition-all duration-75 first:pl-2 last:pr-2 [&>svg]:h-[2.2rem]
      [&>svg]:w-[2.2rem] hover:bg-[color:var(--color-brand-600)] hover:text-white  hover: [&>svg]:text-white grow
      ${active?"bg-[color:var(--color-brand-600)] text-[color:var(--color-brand-50)]":''}`}>
        <span>Next</span> <HiChevronRight/>
      </button>
      </div>
    </div>
  )
}

export default Pagination
