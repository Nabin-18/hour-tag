import { FaAngleDown } from "react-icons/fa";


const UserProfile = () => {
 

  return (
    <div className="flex cursor-pointer items-center justify-end p-3 shadow-md">
    
      <div className="flex items-center gap-2">
        <img src="nabin.jpg" className="h-[40px] w-[40px] rounded-2xl" />
        <p className="font-semibold ">Nabin Khanal</p>
        <span>
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
