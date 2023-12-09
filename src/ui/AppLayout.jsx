import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className=" grid grid-cols-[30%_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar /> 
      <main className=" py-24 px-20 bg-gray-50 overflow-scroll">
        <div className=" max-w-[120rem] my-0 mx-auto flex flex-col gap-16 ">
      <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
