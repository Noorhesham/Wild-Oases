import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled.a`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-2 pt-5">
        <li className="group" >
          <NavLink className="flex gap-3 items-center font-semibold text-2xl py-6 px-10 transition-all duration-300  text-gray-600
           hover:bg-gray-100 hover:text-gray-800 rounded-sm " to="/dashboard">
                 <HiOutlineHome className="group-hover:text-blue-600" />
            <span>Home</span>
            </NavLink>
        </li>
        <li className="group" >
          <NavLink className="flex gap-3 items-center font-semibold text-2xl py-6 px-10 transition-all duration-300  text-gray-600
           hover:bg-gray-100 hover:text-gray-800 rounded-sm " to="/bookings">
                 <HiOutlineCalendarDays className="group-hover:text-blue-600" />
            <span>Bookings</span>
            </NavLink>
        </li>
        <li className="group" >
          <NavLink className="flex gap-3 items-center font-semibold text-2xl py-6 px-10 transition-all duration-300  text-gray-600
           hover:bg-gray-100 hover:text-gray-800 rounded-sm " to="/cabins">
                 <HiOutlineHomeModern className="group-hover:text-blue-600" />
            <span>Cabins</span>
            </NavLink>
        </li>
        <li className="group" >
          <NavLink className="flex gap-3 items-center font-semibold text-2xl py-6 px-10 transition-all duration-300  text-gray-600
           hover:bg-gray-100 hover:text-gray-800 rounded-sm " to="/users">
                 <HiOutlineUsers className="group-hover:text-blue-600" />
            <span>Users</span>
            </NavLink>
        </li>
        <li className="group" >
          <NavLink className="flex gap-3 items-center font-semibold text-2xl py-6 px-10 transition-all duration-300  text-gray-600
           hover:bg-gray-100 hover:text-gray-800 rounded-sm " to="/settings">
                 <HiOutlineCog6Tooth className="group-hover:text-blue-600" />
            <span>Settings</span>
            </NavLink>
        </li>
      
      </ul>
    </nav>
  );
}

export default MainNav;
