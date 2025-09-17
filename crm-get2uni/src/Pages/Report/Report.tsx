import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommissionTab from "./CommissionTab";
import SignupTab from "./SignupTab";
import ReffredSignupTab from "./ReffredSignupTab";
const Report = () => {
    return (
        <Tabs defaultValue="Commission" className="">
            <TabsList className="">
                <TabsTrigger className="px-8 cursor-pointer" value="Commission">Commission</TabsTrigger>
                <TabsTrigger className="px-8 cursor-pointer" value="Signups">Signups</TabsTrigger>
                <TabsTrigger className="px-8 cursor-pointer" value="Reffered">Reffered Signups</TabsTrigger>

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