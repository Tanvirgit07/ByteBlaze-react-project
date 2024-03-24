import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <div className="h-[52px]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
