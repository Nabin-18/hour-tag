import { BrowserRouter } from "react-router-dom";
import SideBar from "./components/SideBar";
import UserProfile from "./components/UserProfile";
import AppRoutes from "./routes/route";// Import Routes

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="lg:w-[20%]  fixed overflow-y-auto  ">
        <SideBar />
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:ml-[20%]">
        {/* Sticky User Profile */}
        <div className="sticky top-0 z-50 w-full ">
          <UserProfile />
        </div>

        {/* Dynamic Content from Routes */}
        <div className="p-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default App;
