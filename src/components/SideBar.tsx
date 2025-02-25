import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { MdSpaceDashboard } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaSquarePlus, FaCcPaypal } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { SiRedhatopenshift } from "react-icons/si";
import { IoMdAddCircle } from "react-icons/io";
import { RiRoadMapFill } from "react-icons/ri";
import { CgLogOut } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const myAttributes = [
  {
    title: "Main",
    items: [{ text: "Dashboard", icon: <MdSpaceDashboard />, link: "/dashboard" }],
  },
  {
    title: "Team",
    items: [
      { text: "Your team", icon: <BsPeopleFill />, link: "/your-team" },
      { text: "Shift request", icon: <FaSquarePlus />, link: "/shift-request" },
      { text: "Time off request", icon: <SlCalender />, link: "/time-off-request" },
    ],
  },
  {
    title: "Settings",
    items: [
      { text: "Past shifts", icon: <SiRedhatopenshift />, link: "/past-shift" },
      { text: "Billing", icon: <FaCcPaypal />, link: "/payment" },
      { text: "Settings", icon: <MdSpaceDashboard />, link: "/settings" },
      { text: "Add member", icon: <IoMdAddCircle />, link: "/add-member" },
      { text: "Roadmap", icon: <RiRoadMapFill />, link: "/roadmap" },
      { text: "Log out", icon: <CgLogOut />, link: "/logout" },
    ],
  },
];

const SideBar = () => {
  const [mobilemenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    console.log("Menu clicked");
    setMobileMenu((prevState) => !prevState);  // Toggle menu state
  };

  const handleCloseMenu = () => {
    setMobileMenu(false);  // Close menu when clicking outside
  };

  return (
    <>
      {/* ✅ Mobile Navbar */}
      <div className="lg:hidden flex items-center gap-4 p-4 bg-white shadow-md fixed top-0 w-full z-50">
        {/* ✅ Hamburger Icon */}
        <button>
          <GiHamburgerMenu onClick={handleMenu} className="text-3xl text-green-400 cursor-pointer" />
        </button>
        

        {/* ✅ Logo */}
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">HourTag</p>
        </div>
      </div>

      {/* ✅ Sidebar for Large Screens */}
      <div className="hidden lg:flex flex-col w-[20%] h-screen fixed gap-2 overflow-y-auto bg-white shadow-md">
        <div className="flex items-center px-6 py-4">
          <p className="text-2xl font-bold">HourTag</p>
        </div>

        {myAttributes.map((section, index) => (
          <div key={index}>
            <hr />
            {section.items.map((item, idx) => (
              <Link to={item.link} key={idx} className="block">
                <div className="flex items-center p-3 gap-3 hover:bg-green-100 h-[60px] rounded-md m-4 cursor-pointer">
                  <span className="text-2xl">{item.icon}</span>
                  <Button text={item.text} className="font-semibold" />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* ✅ Mobile Sidebar */}
      {mobilemenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          {/* Sidebar */}
          <div className="w-3/4 h-full bg-white shadow-lg overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <div>Logo</div>
              <ImCross className="h-6 w-6 cursor-pointer" onClick={handleCloseMenu} />
            </div>

            <div className="flex flex-col gap-2">
              {myAttributes.map((item, index) => (
                <div key={index} className="flex items-center rounded justify-center w-full h-12 border-b border-gray-300">
                  {item.items.map((subitem, idx) => (
                    <Link to={subitem.link} key={idx} className="block w-full">
                      <div className="flex items-center p-3 gap-3 hover:bg-green-100 h-[60px] rounded-md m-4 cursor-pointer">
                        <span className="text-2xl">{subitem.icon}</span>
                        <Button text={subitem.text} className="font-semibold" />
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Clicking outside closes the menu */}
          <div className="w-1/4 h-full" onClick={handleCloseMenu}></div>
        </div>
      )}
    </>
  );
};

export default SideBar;
