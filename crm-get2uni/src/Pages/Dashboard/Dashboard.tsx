import { ChartLineMultiple } from "@/components/Charts/LineChart";
import { ChartRadialStacked } from "@/components/Charts/RadialChart";


const Dashboard = () => {
    return (
       <>
       <ChartLineMultiple/>
       <div className="flex gap-4 items-center justify-evenly">

       <ChartRadialStacked/>
       <ChartRadialStacked/>
       <ChartRadialStacked/>

       </div>
       </>
    );
}

export default Dashboard;
