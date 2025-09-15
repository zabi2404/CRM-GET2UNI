import { createBrowserRouter, } from "react-router-dom";
import { AddAgents, AddAmbasddar, AddStudent, Agent, Ambasddar, Commission, Dashboard, ForgetPassword, Leads, Login, Message, NotFound, Notification, Report, Setting, SignUp, Student, University } from "./constant/Routes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/student',
        element: <Student />
    },
    {
        path: '/add-student',
        element: <AddStudent />
    },
    {
        path: '/agent',
        element: <Agent />
    },
    {
        path: '/add-agent',
        element: <AddAgents />
    },
    {
        path: '/ambassador',
        element: <Ambasddar />
    },
    {
        path: '/add-ambassador',
        element: <AddAmbasddar />
    },
    {
        path: '/commission',
        element: <Commission />
    },
    {
        path: '/report',
        element: <Report />
    },
    {
        path: '/leads',
        element: <Leads />
    },
    {
        path: '/notification',
        element: <Notification />
    },
    {
        path: '/message',
        element: <Message />
    },
    {
        path: 'university',
        element: <University />
    },
    {
        path: '/setting',
        element: <Setting />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: "*",
        element: <NotFound />,
    }
])