import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";
import {
    Dashboard, Student, AddStudent, Agent, AddAgents, Ambasddar, AddAmbasddar,
    Commission, Report, Leads, Notification, Message, University, Setting,
    Login, SignUp, ForgetPassword, NotFound
} from "./constant/Routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "student",
                element: <Student />
            },
            {
                path: "add-student",
                element: <AddStudent />
            },
            {
                path: "agent",
                element: <Agent />
            },
            {
                path: "add-agent",
                element: <AddAgents />
            },
            {
                path: "ambassador",
                element: <Ambasddar />
            },
            {
                path: "add-ambassador",
                element: <AddAmbasddar />
            },
            {
                path: "commission",
                element: <Commission />
            },
            {
                path: "report",
                element: <Report />
            },
            {
                path: "leads",
                element: <Leads />
            },
            {
                path: "notification",
                element: <Notification />
            },
            {
                path: "message",
                element: <Message />
            },
            {
                path: "university",
                element: <University />
            },
            {
                path: "setting",
                element: <Setting />
            },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
        ],
    },
    { path: "*", element: <NotFound /> },
]);
