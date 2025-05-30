import { Outlet, useLocation } from "@remix-run/react";
import { NavBar } from "~/components/HotelOwner/Navbar";
import { Sidebar } from "~/components/HotelOwner/Sidebar";
import { Dashboard } from "./Dashboard";

export function Layout() {
    const location=useLocation();
    const dashboardPath=location.pathname.includes('/owner/');

  return (
    <div className="flex flex-col ">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <div >
          <Sidebar />
        </div>
        <div className="flex  p-4 pt-10 md:px-10  h-full">
            {!(dashboardPath) && <Dashboard />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
