import { useTheme } from "@/Zustand/themeSwitcherStore";
import { useLanguage } from "@/Zustand/LanguageSwitcherStore";
import { DropDown } from "./DropDown";

const TopBar = () => {
    const {theme,setTheme} = useTheme();
    const {language,setLanguage}=useLanguage();

    // 
    return (
        <>
            <div className="flex justify-end p-2 gap-4 bg-white z-12 items-center ">
                
                <div className="w-[100px]">
                    
                <DropDown
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
                <DropDown
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
