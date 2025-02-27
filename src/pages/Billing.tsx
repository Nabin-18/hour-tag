import { FaCreditCard } from "react-icons/fa6";
import { MdStickyNote2 } from "react-icons/md";
import { TiTick } from "react-icons/ti";

<TiTick />


const features =[
  {
    id:1,
    title:"Work target setup",
    icon:<TiTick />
  },
  {
    id:2,
    title:"Shift information",
    icon:<TiTick />
  },
  {
    id:3,
    title:"Edit & approve shifts",
    icon:<TiTick />
  },
  {
    id:4,
    title:"Permission wise access",
    icon:<TiTick />
  },
  {
    id:5,
    title:"Quick view of past-due tasks",
    icon:<TiTick />
  },
  {
    id:6,
    title:"Exportable reports",
    icon:<TiTick />
  },
  {
    id:7,
    title:"Employee time off",
    icon:<TiTick />
  },
 

]

const Billing = () => {
  return (
    <div className=" bg-green-100  lg:bg-gray-50">

   
    <div className="flex flex-col items-center w-full gap-4 mt-6 lg:ml-[60px] lg:w-[50%]">
      <div className="flex flex-col gap-4 w-full   ">
        <div className="flex gap-4 items-center">
          <span>
            <FaCreditCard className="text-orange-400 text-4xl" />
          </span>
          <h1 className="font-semibold text-3xl">Billing</h1>
        </div>
        <div className="flex flex-col gap-4 items-center shadow-lg p-4 w-full rounded-2xl bg-white">
          <div className="flex gap-4 items-center w-full ">
            <div className="flex justify-between w-full">
              <div className="flex  w-full  justify-between  ">
                <div className="flex justify-between items-center gap-2">
                  <span>
                    <MdStickyNote2 className="text-2xl text-blue-500" />
                  </span>
                  <h1 className="font-semibold">Your subscription</h1>
                </div>
                <button className="p-1 text-white bg-blue-500 rounded-2xl text-xs cursor-pointer">
                  free tire
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full p-4 bg-gray-100 rounded-2xl">
            <h1 className="font-semibold">HourTag Free Tier</h1>
            <p>
              <span className="font-semibold">1</span>
              <span className="text-gray-600">/10 users</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-2xl w-full">
            <h1 className="">Features</h1>
            <div className="flex flex-col gap-4 p-2 ">
              {
                features.map((feature)=>(
                  <div key={feature.id} className="flex justify-between w-full ">
                    <div className="flex gap-4 items-center">

                    <span className="bg-green-200 text-green-600 h-6 w-6 text-2xl rounded-full flex items-center  ">{feature.icon}</span>
                    <p>{feature.title}</p>
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
          <div className="flex justify-between w-full  rounded-2xl">
            <button className="p-3 bg-green-300 cursor-pointer rounded-2xl w-full font-semibold">
              Upgrade plan
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-lg p-4 w-full gap-4 rounded-2xl bg-white">
        <div>
          <h1 className="font-semibold">Add appsumo code</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Write your code and press ENTER"
            className="p-3 border w-full rounded-2xl bg-gray-100 text-gray-600 outline-none"
          />
        </div>
        <div>
          <button className="p-3 bg-green-300 cursor-pointer rounded-2xl w-full font-semibold">
            Add code
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Billing;
