import * as React from "react"
import { Home, User, Users, Star, DollarSign, BarChart2, Bell, MessageSquare, BookOpen, LogOut } from "lucide-react"
import {  useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

const data = {
  navMain: [
    { title: "dashboard", url: "/", icon: Home },
    { title: "student", url: "/student", icon: User },
    { title: "agent", url: "/agent", icon: Users },
    { title: "ambassador", url: "/ambassador", icon: Star },
    { title: "commission", url: "/commission", icon: DollarSign },
    { title: "report", url: "/report", icon: BarChart2 },
    { title: "notification", url: "/notification", icon: Bell },
    { title: "message", url: "/message", icon: MessageSquare },
    { title: "university", url: "/university", icon: BookOpen },
    { title: "logout", url: "/login", icon: LogOut },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeLink, setActiveLink] = React.useState("") // track active link

  const location = useLocation();


  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  return (

    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <img src="../../public/download.png" className="w-32 mx-auto" alt="Logo" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => {
              const Icon = item.icon
              const isActive = activeLink === item.url

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    onClick={() => setActiveLink(item.url)}
                  >

                    <Link to={item.url} className="flex items-center gap-2 font-medium">
                      {item.icon ? (
                        item.title === "notification" ? (
                          <>
                            <item.icon className="w-5 h-5" />
                            <span className={`absolute ${!isActive ? "text-primary" : 'text-white'} hover:text-white  -top-0 left-5 h-4 w-4 flex items-center justify-center text-[10px] font-medium`}>
                              99+
                            </span>
                          </>
                        ) : (
                          <item.icon className="w-5 h-5" />
                        )
                      ) : null}

                      {item.title}
                    </Link>
                  </SidebarMenuButton>

                  {/* Render submenus if they exist */}
                  {/* {item.sub?.length ? (
                    <SidebarMenuSub>
                      {item.sub.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={activeLink === sub.url}
                            onClick={() => setActiveLink(sub.url)}
                          >
                            <a href={sub.url}>{sub.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null} */}
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
