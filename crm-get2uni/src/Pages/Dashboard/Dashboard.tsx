import StudentOverviewSection from "./StudentOverviewSection";
import StudentOnboardChannel from "./StudentOnboardChannel";
import RadialCardSection from "./RadialCardSection";
import RecentActivitySection from "./RecentActivitySection";
import { Input } from "@/components/ui/input";
import { DropDown } from "@/components/common/DropDown";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import { DatePicker } from "@/components/common/DatePicker2";
import HeaderDashboard from "./HeaderDashboard";
import { Dialog } from "@/components/ui/dialog";
import { Dialouge } from "@/components/common/Dialouge";
import { StudentProfileModal } from "@/components/common/StudentProfileModal";



const Dashboard = () => {

    return (
        <>
       
        <StudentProfileModal/>
        <HeaderDashboard/>
            <StudentOverviewSection />
            <RadialCardSection />
            <StudentOnboardChannel />
            <RecentActivitySection />

        </>
    );
}

export default Dashboard;
