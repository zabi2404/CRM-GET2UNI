import { useTheme } from "@/Zustand/themeSwitcherStore";
import { useLanguage } from "@/Zustand/LanguageSwitcherStore";
import { DropDown } from "./DropDown";

const TopBar = () => {
    const {theme,setTheme} = useTheme();
    const {language,setLanguage}=useLanguage();

    // 
    return (
        <>
            <div className="fixed top-0 left-0 md:left-68 right-0  flex justify-end p-2 gap-4 bg-background z-12 items-center ">
                
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
