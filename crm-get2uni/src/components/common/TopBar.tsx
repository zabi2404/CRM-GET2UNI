import { useTheme } from "@/Zustand/themeSwitcherStore";
import { TypeSelect } from "./TypeSelect";
import { useLanguage } from "@/Zustand/LanguageSwitcherStore";

const TopBar = () => {
    const {theme,setTheme} = useTheme();
    const {language,setLanguage}=useLanguage();

    // 
    return (
        <>
            <div className="flex justify-end p-2 gap-4 bg-secondary-foreground items-center">
                
                <div className="w-[100px]">
                    
                <TypeSelect
                 placeHolder="Language"
                    value1='English'
                    value2='French'
                    defaultValue={language==='French'?'French':'English'}
                onChange={(val:string)=>{
                  setLanguage(val)
                }}
                   
                />
                </div>
                <div className="w-[100px]">
                <TypeSelect
                placeHolder="Theme"
                    value1='Light'
                    value2='Dark'
                    defaultValue={theme==='dark'?'Dark':'Light'}
                    onChange={(val: string) => {
                        setTheme(val.toLowerCase())
                    }}
                />

                </div>
                
            </div>

        </>
    );
}

export default TopBar;
