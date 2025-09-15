import { create } from "zustand";

export const useTheme = create(() => ({
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
