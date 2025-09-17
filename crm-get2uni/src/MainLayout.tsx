import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

export default function MainLayout() {
  return (
    <div className="grid grid-cols-[auto_1fr] w-full h-screen">
      
      <div className="col-span-1 row-span-2">
        <SideBar />
      </div>

      <div className="grid grid-rows-[auto_1fr] ">
      <div className="">
        <Header />
      </div>

      <main className=" md:pt-25 px-8  xsm:pt-50 overflow-y-auto">
        <Outlet />
      </main>
      </div>
      
    </div>
  );
}