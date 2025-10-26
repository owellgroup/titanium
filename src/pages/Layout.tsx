import { Outlet } from "react-router-dom";
import TopNav from "@/components/TopNav";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <MainNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
