import { Settings } from "lucide-react";
import { TypeSelect } from "../common/TypeSelect";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        
        <div className="flex justify-between p-4 ">
            <div>
                <h1>Welcome Admin</h1>
                <p>Admin Dashboard</p>
            </div>

            <div className="flex  items-center gap-4">
              <TypeSelect
              placeHolder="Quick Add"
              value1="Add Student"
              value2="Add Ambassddor"
              value3="Add Agent"
              value4="Add Lead"
              />
               <Settings 
               className="cursor-pointer"
               onClick={()=>{
                navigate('/setting')
               }}
               />
            </div>
        </div>
        </>
    );
}

export default Header;
