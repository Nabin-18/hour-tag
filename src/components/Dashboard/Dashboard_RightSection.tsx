import { IoPeople } from "react-icons/io5";
import { FaClock, FaAngleDown, FaArrowRight } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";

const Dashboard_RightSection = () => {
  const [arrowClick, setArrowClick] = useState(false);

  return (
    <div className="flex flex-col p-4 w-full  gap-4 ">
      {/* Team Activity */}
      <div className="flex flex-col gap-6 shadow-2xl p-6 rounded-2xl bg-white">
        <div className="flex gap-2 items-center">
          <IoPeople className="text-2xl text-blue-600" />
          <h1 className="font-semibold">Team activity</h1>
        </div>
        <p className="text-gray-600">Your team activity will appear</p>
        <div className="flex gap-4 items-center">
          <button className="border p-3 rounded-2xl bg-zinc-200 font-semibold hover:bg-white cursor-pointer">
            View reports
          </button>
          <button className="border p-3 rounded-2xl bg-black text-white font-semibold cursor-pointer">
            Invite member
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="flex flex-col gap-6 shadow-2xl p-6 rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <FaClock className="text-xl text-blue-500" />
            <h1 className="font-semibold">Recent activity</h1>
          </div>
          <p className="text-gray-600">Mon - Sun</p>
        </div>
        <p className="font-semibold text-gray-600">No recent activities</p>
      </div>

      {/* Personal Week */}
      <div className="flex flex-col gap-6 shadow-2xl p-6 rounded-2xl bg-white">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <MdOutlineBarChart className="text-blue-500 text-2xl" />
            <p className="font-semibold">Your personal week</p>
          </div>
          <p className="text-zinc-500">Mon - Sun</p>
        </div>
        <p className="text-gray-600">
          <span className="font-semibold text-3xl">0 </span>h{" "}
          <span className="font-semibold text-3xl">0 </span>m
        </p>
        <p className="font-semibold text-zinc-500">Average 0h 0m per day</p>
        <div className="flex items-center gap-4 bg-gray-200 rounded-2xl p-4 justify-center cursor-pointer">
          <FaAngleDown />
          <button className="text-black font-semibold cursor-pointer">
            View weekly shifts
          </button>
        </div>
      </div>

      {/* View Total Hours */}
      <div className="flex flex-col gap-6 shadow-2xl p-6 rounded-2xl bg-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <CiSquarePlus className="text-white rounded text-2xl bg-orange-500" />
            <h1 className="font-semibold">View total hours</h1>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => setArrowClick(!arrowClick)}
          >
            <FaAngleDown />
          </span>
        </div>

        {/* Conditional Content */}
        {arrowClick && (
          <div className="flex flex-col gap-4 p-4  rounded-lg ">
            <div className="flex justify-between items-center">
              <div className="border p-2 rounded bg-white flex gap-4">
                <p className="text-zinc-500">From</p>
                <p className="font-semibold">Feb 22</p>
              </div>
              <div className="border p-2 rounded bg-white flex gap-4">
                <p className="text-zinc-500">To</p>
                <p className="font-semibold">Feb 25</p>
              </div>
              <span className="bg-green-500 p-2 rounded-full text-white">
                <FaArrowRight />
              </span>
            </div>
          </div>
        )}
      </div>
      {/* share your feedback */}
      <div className="flex flex-col gap-6 shadow-2xl p-6 rounded-2xl bg-white">
        <div>
          <div className="flex gap-2 items-center">
            <span>
              <LuMessageCircleMore className="text-purple-500 text-2xl" />
            </span>
            <h1 className="font-semibold">Share your feedback</h1>
          </div>
        </div>
        <div>
          <p className="font-semibold">HourTag is in Beta</p>
        </div>
        <div>
          <p className="font-medium">
            How has your experience been? We want to continually improve our
            product to serve you better.
          </p>
        </div>
        <div className="p-4 bg-gray-200 rounded-2xl text-center cursor-pointer">
          <button className="font-semibold cursor-pointer">
            Share FeedBack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_RightSection;
