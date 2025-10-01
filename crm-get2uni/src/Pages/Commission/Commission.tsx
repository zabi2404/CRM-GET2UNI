import { PayoutHistoryTable } from "@/components/Tables/PayoutHistoryTable";
import { PayoutReqTable } from "@/components/Tables/PayoutReqTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Commission = () => {

  const navigate = useNavigate();



  const [tab, setTab] = useState("payout-request");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
  const param = urlParams.get('tab');
  if(param){
    setTab(param)
  }
  },[])


  const handleSubmit = (value:string)=>{
    setTab(value);
    const urlParams = new URLSearchParams(location.search);
   urlParams.set("tab", value);
    const query = urlParams.toString();
    navigate(`${location.pathname}?${query}`, { replace: true });
  }


    return (
        <Tabs value={tab} onValueChange={handleSubmit} className="">
        <TabsList className="">
          <TabsTrigger className=" cursor-pointer"  value="payout-request">Payout Request</TabsTrigger>
          <TabsTrigger className="max-w-[200px] w-full cursor-pointer" value="payout-history">Payout History</TabsTrigger>
        </TabsList>
        <TabsContent value="payout-request">
          <PayoutReqTable/>
            </TabsContent>
        <TabsContent value="payout-history"><PayoutHistoryTable/></TabsContent>
      </Tabs>
    );
}

export default Commission;