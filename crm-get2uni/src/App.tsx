import toast, { Toaster } from "react-hot-toast"
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {

  // const { t, i18n } = useTranslation();

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
      {/* <Toaster />
      <p className="text-foreground"
        onClick={calltoast}
      >hi</p>

      <div className="flex justify-center flex-col items-center">
        <h1>{t("welcome")}</h1>
        <button onClick={() => {i18n.changeLanguage("fr")

          theme()
        }}
          className="block accent-accent"
          >FR</button>
        <button onClick={() => {i18n.changeLanguage("en")
           theme1()
        }}>EN</button>
      </div> */}

    <RouterProvider router={router}/>
    </>
  )
}

export default App

