import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommissionTab from "./CommissionTab";
import SignupTab from "./SignupTab";
import ReffredSignupTab from "./ReffredSignupTab";
const Report = () => {
    return (
        <Tabs defaultValue="Commission" className="">
            <TabsList className="">
                <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Commission">Commission</TabsTrigger>
                <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Signups">Signups</TabsTrigger>
                <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Reffered">Reffered Signups</TabsTrigger>

            </TabsList>
            <TabsContent value="Commission">

            <CommissionTab/>
            </TabsContent>
            <TabsContent value="Signups">
            <SignupTab/>
            </TabsContent>
            <TabsContent value="Reffered">
               <ReffredSignupTab/>
            </TabsContent>
        </Tabs>
    );
}

export default Report;