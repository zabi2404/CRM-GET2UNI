import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

export default function MainLayout() {
  return (
  
   <>
   
   <SideBar />
      <Header/>
     
        <Outlet />
        </>
   
  );
}