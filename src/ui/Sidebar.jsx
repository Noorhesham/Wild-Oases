import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader"
function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 bg-gray-0 border-r border-gray-100 py-20 px-6  row-span-full">
      <Logo />
      <MainNav />
      <Uploader/>
    </aside>
  );
}

export default Sidebar;
