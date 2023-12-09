import { NavLink } from "react-router-dom";
import {HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers} from "react-icons/hi2";

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
