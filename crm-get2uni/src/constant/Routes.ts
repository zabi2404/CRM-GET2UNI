import { lazy } from "react";




const Dashboard = lazy(()=>(import('../Pages/Dashboard/Dashboard')))
const Student = lazy(() => import("@/Pages/Student/Student"));
const NotFound = lazy(() => import("@/Pages/Not Found/NotFound"));
const Agent = lazy(() => import("@/Pages/Agent/Agent"));
const Report = lazy(() => import("@/Pages/Report/Report"));
const Ambasddar = lazy(() => import("@/Pages/Ambasddar/Ambasddar"));
const Commission = lazy(() => import("@/Pages/Commission/Commission"));
const Message = lazy(() => import("@/Pages/Message/Message"));
const Notification = lazy(() => import("@/Pages/Notification/Notification"));
const University = lazy(() => import("@/Pages/University/University"));
const Setting = lazy(() => import("@/Pages/Setting/Setting"));
const Login = lazy(() => import("@/Pages/Auth/Login"));
const SignUp = lazy(() => import("@/Pages/Auth/SignUp"));
const ForgetPassword = lazy(() => import("@/Pages/Auth/Forget-Password"));
const AddStudent = lazy(() => import("@/Pages/AddStudent/AddStudent"));
const AddAmbasddar = lazy(() => import("@/Pages/AddAmbasdar/AddAmbasddar"));
const AddLead = lazy(() => import("@/Pages/AddLead/AddLead"));
const Leads = lazy(() => import("@/Pages/Leads/Leads"));
const AddAgents = lazy(()=>import('../Pages/AddAgent/AddAgents'));



export {
  Dashboard,
  Student,
  AddStudent,
  Agent,
  AddAgents,
  Ambasddar,
  AddAmbasddar,
  Commission,
  Report,
  Leads,
  AddLead,
  Notification,
  Message,
  University,
  Setting,
  Login,
  SignUp,
  ForgetPassword,
  NotFound
};