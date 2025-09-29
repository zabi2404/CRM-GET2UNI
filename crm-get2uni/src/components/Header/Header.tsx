import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";
import { NavigationMenu } from "../common/NavigationMenu";

const Header = () => {
    const navigate = useNavigate();
    return (
        <>

            <div className=" fixed top-0 md:left-68 right-0 z-10 bg-white dark:bg-background
        xsm:left-0
        ">
                <div className="flex justify-between px-6 pt-2
                md:hidden
                ">
                    <div>
                        <SidebarTrigger />
                    </div>
                    <div>
                        <img src="/download.png" alt="logo"
                            className="w-32"
                        />
                    </div>
                </div>

                <div className="flex justify-between p-4">
                    <div>
                        <h1 className="text-subheading2 font-semibold text-headingColor dark:text-white">Welcome Admin</h1>
                        <p className="">Admin Dashboard</p>
                    </div>

                    <div className="flex  items-center gap-4">
                        <NavigationMenu
                            placeHolder="Quick Add"
                            items={[
                                { label: "Add Student", path: "/add-student" },
                                { label: "Add Agent", path: "/add-agent" },
                                { label: "Add Ambassddor", path: "/add-ambassador" },
                            ]}
                        />
                        <Settings
                            className="cursor-pointer"
                            onClick={() => {
                                navigate('/setting')
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
