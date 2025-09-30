import StudentOverviewSection from "./StudentOverviewSection";
import StudentOnboardChannel from "./StudentOnboardChannel";
import RadialCardSection from "./RadialCardSection";
import RecentActivitySection from "./RecentActivitySection";

import HeaderDashboard from "./HeaderDashboard";
import { StudentProfileModal } from "@/components/common/StudentProfileModal";
import { AddDocumentModal } from "@/components/common/AddDocumentModal";



const Dashboard = () => {

    return (
        <>
{/*        
        <AddDocumentModal/>
       
        <StudentProfileModal/> */}
        <HeaderDashboard/>
            <StudentOverviewSection />
            <RadialCardSection />
            <StudentOnboardChannel />
            <RecentActivitySection />

        </>
    );
}

export default Dashboard;
