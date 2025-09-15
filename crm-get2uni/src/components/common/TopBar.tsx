import { useTheme } from "@/Zustand/Store";
import { TypeSelect } from "./TypeSelect";

const TopBar = () => {
    const {theme,setTheme} = useTheme();

    



    return (
        <>
            <div className="flex justify-end p-2 gap-4 ">
                
                <div className="w-[100px]">
                    
                <TypeSelect
                 placeHolder="Language"
                    value1='English'
                    value2='French'
                    defaultValue="English"
                   
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
{/* 
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