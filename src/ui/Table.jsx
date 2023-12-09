import { createContext,useContext } from "react";


const TableContext=createContext()
function Table({column,children}) {
  return (
    <TableContext.Provider value={column}>
      <div role="table"  className="bg-gray-50 rounded-md overflow-hidden border-2 border-[color:var(--color-grey-200)]">
    {children}
  </div>
    </TableContext.Provider>
  )
}
function Header({children}){
  const column=useContext(TableContext)
  return   <div as="header" style={{gridTemplateColumns:column}} role="row" className={`grid bg-gray-50  border-b-4border-gray-50 uppercase font-semibold py-6 px-10 text-gray-600`}>
    {children}
  </div>

}
function Row({children}){
  const column=useContext(TableContext)
  return   <div role="row" style={{gridTemplateColumns:column}}  className={`grid   border-b-2
  border-gray-100 last:border-b-0  py-6 px-[2.4rem]  gap-y-[2.4rem] items-center bg-white`}>
    {children}
  </div>

}
function Body({data,render}){
  if(!data.length) return <p className=" text-2xl font-semibold text-center m-10 ">No data to show at the moment </p>
  return <section className=" my-3">{data.map(render)}</section>
}
function Footer({children}){
  return <footer className=" flex p-5 bg-gray-50 justify-center">{children}</footer>
}
Table.Header=Header
Table.Row=Row
Table.Body=Body
Table.Footer=Footer
export default Table
