
function Button({variation,children,onClick,disabled}) {
  const danger=" text-red-100 bg-red-700 hover:bg-red-800 transition-all duration-0.75"
  const small="text-md py-2 px-3 font-semibold uppercase "
  const mid="text-xl py-3.5 px-4.5"
  const large="text-2xl py-5 px-10 font-semibold"
  const icon='focus:outline-none ml-auto '
  const secondary='focus:ring-2 ring-cyan-500 text-[color:var(--color-grey-600)] bg-gray-100 border-gray-300 hover:bg-gray-50 transition-all duration-200'
  const primary=' text-[color:var(--color-brand-50)] bg-[color:var(--color-brand-600)] hover:bg-[color:var(--color-brand-700)] transition-all duration-3000 '
  const styles={
    danger:large+danger,
    icon:icon+small,
    small:small,
    primary:large+primary,
    secondary : large +secondary,
    secondarysmall:secondary+small,
    primarysmall:primary+small
  }
  return (
    <button disabled={disabled} onClick={onClick} className={styles[variation]} >
      {children}
    </button>
  )
}

export default Button
