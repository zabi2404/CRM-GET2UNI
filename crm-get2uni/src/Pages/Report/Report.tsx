import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommissionTab from "./CommissionTab";
import SignupTab from "./SignupTab";
import ReffredSignupTab from "./ReffredSignupTab";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
const Report = () => {
  const navigate = useNavigate();


  const [tab, setTab] = useState("Commission");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const param = urlParams.get("tab");
    if (param) {
      setTab(param.toString());
      console.log(param)
    }

  }, [])

 

  const handleSubmit = (value: string) => {
    setTab(value);
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("tab", value);
    const query = urlParams.toString();
    navigate(`${location.pathname}?${query}`, { replace: true });
  }




  return (
    <Tabs value={tab} onValueChange={handleSubmit} className="">
      <TabsList className="">
        <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Commission">Commission</TabsTrigger>
        <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Signups">Signups</TabsTrigger>
        <TabsTrigger className="xsm:text-[12px] sm:text-[14px] cursor-pointer" value="Reffered">Reffered Signups</TabsTrigger>

      </TabsList>
      <TabsContent value="Commission">

        <CommissionTab />
      </TabsContent>
      <TabsContent value="Signups">
        <SignupTab />
      </TabsContent>
      <TabsContent value="Reffered">
        <ReffredSignupTab />
      </TabsContent>
    </Tabs>
  );
}

export default Report;