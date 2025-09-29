import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import {
    Dashboard, Student, AddStudent, Agent, AddAgents, Ambasddar, AddAmbasddar,
    Commission, Report, Leads, Notification, Message, University, Setting,
    Login, SignUp, ForgetPassword, NotFound
} from "./constant/Routes";
import { SidebarProvider } from "./components/ui/sidebar";
import AmbassddorProfile from "./Pages/Ambassdor Profile/AmbassddorProfile";
import AgentProfile from "./Pages/Agent Profile/AgentProfile";
import StudentProfile from "./Pages/StudentProfile/StudentProfile";
import Testign from "./Testing";

export const router = createBrowserRouter([
    {
        // This is the main application layout for authenticated users
        path: "/",
        element: (
            <SidebarProvider>
                <MainLayout />
            </SidebarProvider>
        ),
        children: [
            {
                index: true, // This is the dashboard at "/"
                element: <Dashboard />,
            },
            {
                path: "student",
                element: <Student />,
            },
            {
                path: "add-student",
                element: <AddStudent />,
            },
            {
                path:"student/:id",
                element:<StudentProfile/>
            },
            {
                path: "agent",
                element: <Agent />,
            },
            {
                path: "add-agent",
                element: <AddAgents />,
            },
            {
                path:"agent/:id",
                element:<AgentProfile/>

            },
            {
                path: "ambassador",
                element: <Ambasddar />,
            },
            {
                path: "add-ambassador",
                element: <AddAmbasddar />,
            },
            {
                path:"ambassador/:id",
                element:<AmbassddorProfile/>

            },
            {
                path: "commission",
                element: <Commission />,
            },
            {
                path: "report",
                element: <Report />,
            },
            {
                path: "leads",
                element: <Leads />,
            },
            {
                path: "notification",
                element: <Notification />,
            },
            {
                path: "message",
                element: <Message />,
            },
            {
                path: "university",
                element: <University />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
            {
                path:'testing',
                element:<Testign/>
            }
        ],
    },
    {
        // This is a separate, top-level layout for authentication
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "forget-password",
                element: <ForgetPassword />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);