import { PayoutHistoryTable } from "@/components/Tables/PayoutHistoryTable";
import { PayoutReqTable } from "@/components/Tables/PayoutReqTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Commission = () => {
    return (
        <Tabs defaultValue="account" className="">
        <TabsList className="">
          <TabsTrigger className="px-8 cursor-pointer"  value="account">Payout Request</TabsTrigger>
          <TabsTrigger className="px-8 cursor-pointer" value="password">Payout History</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <PayoutReqTable/>
            </TabsContent>
        <TabsContent value="password"><PayoutHistoryTable/></TabsContent>
      </Tabs>
    );
}

export default Commission;