import i18n from '@/i18n'
import {create}from 'zustand'

type LanguageState={
    language:string|null,
    setLanguage:(value:string)=>void
}

export const useLanguage = create<LanguageState>(()=>({
    language:localStorage.getItem('language'),
    setLanguage:(value:string)=>{
        localStorage.setItem('language',value)
        if(value === 'French'){
            i18n.changeLanguage("fr")
            return
        }
        i18n.changeLanguage("en")
    }
}))