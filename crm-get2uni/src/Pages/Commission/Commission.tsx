import { PayoutHistoryTable } from "@/components/Tables/PayoutHistoryTable";
import { PayoutReqTable } from "@/components/Tables/PayoutReqTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useEffect } from "react";
const Commission = () => {

  // useEffect(() => {
  //  const params = new URLSearchParams(window.location.search)
   
 
   
  // }, [])
  
    return (
        <Tabs defaultValue="account" className="">
        <TabsList className="">
          <TabsTrigger className=" cursor-pointer"  value="account">Payout Request</TabsTrigger>
          <TabsTrigger className="max-w-[200px] w-full cursor-pointer" value="password">Payout History</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <PayoutReqTable/>
            </TabsContent>
        <TabsContent value="password"><PayoutHistoryTable/></TabsContent>
      </Tabs>
    );
}

export default Commission;