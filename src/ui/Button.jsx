import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};
function Button({variation,children,onClick}) {
  const small="text-md py-2 px-3 font-semibold uppercase "
  const mid="text-xl py-3.5 px-4.5"
  const large="text-2xl py-5 px-10 font-semibold"
  const styles={
    primary: large+ ' text-[color:var(--color-brand-50)] bg-[color:var(--color-brand-600)] hover:bg-[color:var(--color-brand-700)] transition-all duration-3000 ',
    secondary : large +' text-[color:var(--color-grey-600)] bg-gray-100 border-gray-300 hover:bg-gray-50 transition-all duration-200'
  }
  return (
    <button onClick={onClick} className={styles[variation]} >
      {children}
    </button>
  )
}

export default Button
