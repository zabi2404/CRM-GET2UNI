import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import TopBar from "./components/common/TopBar";

export default function MainLayout() {
  return (
  
   <>
   
   <SideBar />
   <div className="flex flex-1 flex-col">

   <TopBar/>
   <Header/>
        <Outlet />
   </div>

     
        </>
   
  );
}