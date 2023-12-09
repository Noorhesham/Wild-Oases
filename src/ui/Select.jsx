function Select({options,value,onChange}) {
  return (
    <select value={value} onChange={onChange} className=" text-[1.4rem] py-3 px-5 border-gray-300 rounded-sm bg-white font-semibold shadow-sm" >
      {options.map(option=><option value={option.value} key={option.value}>{option.label}</option>)}
    </select>
  )
}

export default Select
