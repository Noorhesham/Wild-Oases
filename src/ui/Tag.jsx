function Tag({type,children}){
  return <span style={{backgroundColor:`var(--color-${type}-100)`,color:`var(--color-${type}-700)`}} className=" w-fit uppercase
    text-lg font-bold py-1 px-4 rounded-xl ">
    {children}
  </span>
}
export default Tag;
