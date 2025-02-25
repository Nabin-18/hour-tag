import { Link } from "react-router-dom";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa";
import myAttributes from "../assets/attribute";

const SideBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-col w-[20%] h-screen fixed gap-2 overflow-y-auto bg-white shadow-md">
        <div className="flex items-center px-6 py-4 gap-2 ml-6">
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
        <div className="flex items-center gap-2 m-2">
          <hr />
          <div className="flex items-center gap-2 w-full">
            <button className="flex gap-2 border p-4 rounded-2xl justify-around w-full items-center">
              <div className="flex gap-4 items-center">
                <span className="flex bg-gray-200 rounded-full w-6 h-6 justify-center font-semibold">
                  K
                </span>
                <p className="font-semibold">Khanal Dai</p>
              </div>
              <span>
                <FaAngleDown />
              </span>
            </button>
          </div>
        </div>

        {myAttributes.map((section, index) => (
          <div key={index}>
            <hr />
            {section.items.map((item, idx) => (
              <Link to={item.link} key={idx} className="block">
                <div className="flex items-center p-3 gap-3 hover:bg-green-100 h-[60px] rounded-md m-4 cursor-pointer">
                  <span className="text-2xl">{<item.icon />}</span>
                  <Button text={item.text} className="font-semibold" />
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
