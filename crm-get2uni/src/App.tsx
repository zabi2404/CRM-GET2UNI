import toast, { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import TopBar from "./components/common/TopBar";
import { useEffect } from "react";
import { useTheme } from "./Zustand/themeSwitcherStore";
import i18n from "./i18n";
import { useLanguage } from "./Zustand/LanguageSwitcherStore";
import { SidebarProvider } from "./components/ui/sidebar";
function App() {

  const { theme } = useTheme();
  const { language } = useLanguage();
  useEffect(() => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (language === 'French') {
      i18n.changeLanguage("fr")
      return
    } else {

      i18n.changeLanguage("en")
    }
  }, [theme, language]);



  return (
    <>

     
        <Toaster />
        <RouterProvider router={router} />
     
    </>
  )
}

export default App

