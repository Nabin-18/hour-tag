import Dashboard_RightSection from "@/components/Dashboard/Dashboard_RightSection";
import Dashboard_LeftSection from "@/components/Dashboard/Dashboard_LeftSection";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      <div className="w-full lg:w-[60%] flex-1">
        <Dashboard_LeftSection />
      </div>
      <div className="w-full lg:w-[40%] flex-1">
        <Dashboard_RightSection />
      </div>
    </div>
  );
};

export default Dashboard;
