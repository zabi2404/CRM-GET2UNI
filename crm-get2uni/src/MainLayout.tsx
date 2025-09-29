import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

export default function MainLayout() {
  return (
     <div className="flex flex-col">
      <div>

          <Header />
      </div>
      <div className="flex">
        <div>
       <div className="">
     <SideBar />
       </div>
        </div>
        <div className=" md:pt-25 px-8  xsm:pt-50 w-full  flex-1   min-w-0" >
          <Outlet />
        
        </div>
      </div>
    </div>
  );
}

//  <div className="flex flex-col">
//       <div>

//           <Header />
//       </div>
//       <div className="grid grid-cols-[auto_1fr]">
//         <div>
//         <SideBar />
//         </div>
//         <div className=" md:pt-25 px-8  xsm:pt-50 w-full">
//           <Outlet />
        
//         </div>
//       </div>
//     </div>



// <div className="grid grid-cols-[auto_1fr] w-full ">
  
//   <div className="col-span-1 row-span-2">
//     <SideBar />
//   </div>

//   <div className="grid grid-rows-[auto_1fr] ">
//   <div className="">
//     <Header />
//   </div>

//   <main className=" md:pt-25 px-8  xsm:pt-50 w-full">
//     <Outlet />
//   </main>
//   </div>
  
// </div>