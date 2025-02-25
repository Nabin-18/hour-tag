import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import myAttributes from "@/assets/attribute";
import Button from "@/components/Button";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="flex cursor-pointer items-center justify-between p-3 shadow-md lg:justify-end relative">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex gap-4 items-center">
        <button className="menu-button" onClick={handleMenu}>
          <GiHamburgerMenu className="text-3xl text-green-400 cursor-pointer" />
        </button>
        <div className="flex items-center gap-4">
          <svg
            width="19"
            height="23"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.82787C0 1.04974 0.630795 0.418945 1.40892 0.418945H15.3332C16.718 0.418945 17.4104 0.418945 17.8406 0.849147C18.2708 1.27935 18.2708 1.97175 18.2708 3.35655V3.60981C18.2708 7.38104 18.2708 9.26666 17.0993 10.4382C15.9277 11.6098 14.0421 11.6098 10.2708 11.6098H9.78193C4.37952 11.6098 0 7.23028 0 1.82787Z"
              fill="#2ADC8B"
            ></path>
            <path
              d="M0 19.8631C0 21.2479 0 21.9403 0.430202 22.3705C0.860403 22.8007 1.5528 22.8007 2.9376 22.8007H16.8619C17.64 22.8007 18.2708 22.1699 18.2708 21.3918C18.2708 15.9894 13.8913 11.6099 8.48889 11.6099H0V19.8631Z"
              fill="#2ADC8B"
            ></path>
          </svg>

          <p className="text-2xl font-bold ">HourTag</p>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-2">
        <img src="nabin.jpg" className="h-[40px] w-[40px] rounded-2xl" />
        <p className="font-semibold">Nabin Khanal</p>
        <span>
          <FaAngleDown />
        </span>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenu && (
        <div className="mobile-menu fixed inset-y-0  left-0 w-[80%] max-w-[300px] h-screen bg-white shadow-md overflow-y-auto transition-transform transform translate-x-0 z-50 p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 ml-6 m-4">
              <svg
                width="19"
                height="23"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.82787C0 1.04974 0.630795 0.418945 1.40892 0.418945H15.3332C16.718 0.418945 17.4104 0.418945 17.8406 0.849147C18.2708 1.27935 18.2708 1.97175 18.2708 3.35655V3.60981C18.2708 7.38104 18.2708 9.26666 17.0993 10.4382C15.9277 11.6098 14.0421 11.6098 10.2708 11.6098H9.78193C4.37952 11.6098 0 7.23028 0 1.82787Z"
                  fill="#2ADC8B"
                ></path>
                <path
                  d="M0 19.8631C0 21.2479 0 21.9403 0.430202 22.3705C0.860403 22.8007 1.5528 22.8007 2.9376 22.8007H16.8619C17.64 22.8007 18.2708 22.1699 18.2708 21.3918C18.2708 15.9894 13.8913 11.6099 8.48889 11.6099H0V19.8631Z"
                  fill="#2ADC8B"
                ></path>
              </svg>

              <p className="text-2xl font-bold ">HourTag</p>
            </div>
            <button
              onClick={handleMenu}
              className="text-right text-2xl  bg-gray-100 font-bold  text-red-600 w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {myAttributes.map((section, index) => (
            <div key={index}>
              <hr />
              {section.items.map((item, idx) => (
                <Link
                  onClick={() => setMobileMenu(false)}
                  to={item.link}
                  key={idx}
                  className="block"
                >
                  <div className="flex items-center p-3 gap-3 hover:bg-green-100 h-[60px] rounded-md cursor-pointer">
                    <span className="text-2xl">{<item.icon />}</span>
                    <Button text={item.text} className="font-semibold" />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
