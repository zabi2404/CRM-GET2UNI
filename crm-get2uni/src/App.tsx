<<<<<<< HEAD
import toast, { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import TopBar from "./components/common/TopBar";
import { useEffect } from "react";
import {  useTheme } from "./Zustand/themeSwitcherStore";
import i18n from "./i18n";
import { useLanguage } from "./Zustand/LanguageSwitcherStore";
function App() {

  const {theme} = useTheme();
  const {language} = useLanguage();
  useEffect(() => {
   
    if(theme==='dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
    
    if(language === 'French'){
      i18n.changeLanguage("fr")
      return
  }else{

    i18n.changeLanguage("en")
  }
  }, [theme,language]);




  // 

  // const theme = ()=>{
  //   console.log('working');
  //   document.documentElement.classList.add("dark")
  // }

  // const theme1 = ()=>{
  //   console.log('working');
 
  //   document.documentElement.classList.remove("dark")
  // }

  // const calltoast = () => {
  //   {

  //     toast('Hello Darkness!',
  //       {
  //         icon: '👏',
  //         style: {
  //           borderRadius: '15px',
  //           background: '#3393',
  //           color: '#fff',
  //         },
  //       }
  //     )
  //   }

  // }

  return (
    <>
    <TopBar/>
     <Toaster/>

    <RouterProvider router={router}/>
=======
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
     
>>>>>>> sidebar
    </>
  )
}

export default App
