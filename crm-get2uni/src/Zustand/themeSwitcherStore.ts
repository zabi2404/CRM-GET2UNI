import { create } from "zustand";


type themeState ={
     theme:string | null,
     setTheme:(value:string)=>void
}

export const useTheme = create<themeState>(() => ({
 theme:localStorage.getItem('theme'),

 setTheme:(value:string)=>{
   
  localStorage.setItem('theme',value)
       if(value === 'light'){
            document.documentElement.classList.remove('dark')
            return
        }   
        document.documentElement.classList.add(value)

 }
}));
