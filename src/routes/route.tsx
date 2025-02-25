import { Routes, Route } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import ShiftRequest from "@/pages/ShiftRequest";
import YourTeam from "@/pages/YourTeam";
import TimeOffRequest from "@/pages/TimeOffRequest";
import PastShift from "@/pages/PastShift";
import Billing from "@/pages/Billing";
import Setting from "@/pages/Setting";
import AddMember from "@/pages/AddMember";
import Roadmap from "@/pages/Roadmap";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shift-request" element={<ShiftRequest />} />
      <Route path="/your-team" element={<YourTeam />} />
      <Route path="/time-off-request" element={<TimeOffRequest />} />
      <Route path="/past-shift" element={<PastShift />} />
      <Route path="/payment" element={<Billing />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/add-member" element={<AddMember />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
};

export default AppRoutes;
