import { Outlet } from "react-router-dom";
import TopBar from "./components/common/TopBar";

export default function AuthLayout() {
  return (
    <>
    
    
    <TopBar/>
<div className="pt-20">
  
      <Outlet />
</div>
      
      </> 
   
  );
}