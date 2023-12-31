import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

export const Template = () => {
  return (
    <div className="bg-slate-200 dark:bg-[#101010] flex h-screen w-screen">
      <Sidebar/>
      <div className="flex flex-col w-screen overflow-auto">
        <Navbar/>
        <div className="h-[100vh] overflow-auto">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}


export const TemplateAdm = () => {
  return (
    <div className="bg-blue-50 dark:bg-[#232323]  flex h-screen w-screen">
      <SidebarAdm/>
      <div className="flex flex-col w-screen overflow-auto">
        <NavbarAdm/>
        <div className="h-[100vh] overflow-auto">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}