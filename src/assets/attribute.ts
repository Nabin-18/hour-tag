import { MdSpaceDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaSquarePlus, FaCcPaypal } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { SiRedhatopenshift } from "react-icons/si";
import { IoMdAddCircle } from "react-icons/io";
import { RiRoadMapFill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";

const myAttributes = [
  {
    title: "Main",
    items: [
      { text: "Dashboard", icon: MdSpaceDashboard, link: "/dashboard" },
    ],
  },
  {
    title: "Team",
    items: [
      { text: "Your team", icon: BsPeopleFill, link: "/your-team" },
      { text: "Shift request", icon: FaSquarePlus, link: "/shift-request" },
      { text: "Time off request", icon: SlCalender, link: "/time-off-request" },
    ],
  },
  {
    title: "Settings",
    items: [
      { text: "Past shifts", icon: SiRedhatopenshift, link: "/past-shift" },
      { text: "Billing", icon: FaCcPaypal, link: "/payment" },
      { text: "Settings", icon: MdSpaceDashboard, link: "/settings" },
      { text: "Add member", icon: IoMdAddCircle, link: "/add-member" },
      { text: "Roadmap", icon: RiRoadMapFill, link: "/roadmap" },
      { text: "Log out", icon: CgLogOut, link: "/logout" },
    ],
  },
];

export default myAttributes;
