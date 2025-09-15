import  { Toaster } from "react-hot-toast"
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import SideBar from "./components/SideBar/SideBar";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {

  return (
    <>
     
     
        <SidebarProvider>   
          <RouterProvider router={router} />
          {/* <SideBar /> */}
          <Toaster/>
            
        </SidebarProvider>
     
    </>
  )
}

export default App
