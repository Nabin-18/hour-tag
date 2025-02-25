import { useState } from "react";
import { GiHand } from "react-icons/gi";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";

interface Shift {
  time: number;
  note: string;
}

const Dashboard_LeftSection = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [todayShift, setTodayShift] = useState<number>(0);
  const [note, setNote] = useState<string>("");
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [showDropdown, setShowDropdown] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Start/Stop shift
  const handleShiftToggle = () => {
    if (isRunning) {
      if (timerId) clearInterval(timerId);
      setTimerId(null);

      if (editIndex !== null) {
        const updatedShifts = [...shifts];
        updatedShifts[editIndex] = { time: elapsedTime, note };
        setShifts(updatedShifts);
        setEditIndex(null);
      } else {
        setShifts([...shifts, { time: elapsedTime, note }]);
      }
    } else {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
        setTodayShift((prev) => prev + 1);
      }, 1000);
      setTimerId(interval);
    }
    setIsRunning(!isRunning);
  };

  // Reset shift timer
  const resetTimer = () => {
    if (timerId) clearInterval(timerId);
    setIsRunning(false);
    setElapsedTime(0);
    setNote("");
    setTimerId(null);
    setEditIndex(null);
  };

  // Delete shift
  const deleteShift = (index: number) => {
    setShifts(shifts.filter((_, i) => i !== index));
    setShowDropdown(null);
  };

  // Edit shift
  const editShift = (index: number) => {
    setElapsedTime(shifts[index].time);
    setNote(shifts[index].note);
    setEditIndex(index);
    setIsRunning(false);
    setShowDropdown(null);
  };

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <>
      <div className="flex w-full ">
        <div className="flex flex-col items-center  p-2  w-full  ">
          <div className="flex flex-col gap-4 p-6  w-full shadow-xl rounded-lg mt-12  ">
            <div>
              <div className="flex items-center gap-3">
                <GiHand className="text-3xl text-yellow-300" />
                <p className="font-bold text-3xl ">
                  Welcome, Nabin!
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-2  rounded-lg">
              <div className="flex items-center  gap-2 bg-zinc-200 rounded-2xl">
                <BsDot className="text-green-500 text-3xl" />
                <p>Nabin Khanal</p>
                <MdKeyboardArrowDown />
              </div>
              <p className="font-bold">Today: {formatTime(todayShift)}</p>
            </div>

            <h1 className="text-5xl font-bold">{formatTime(elapsedTime)}</h1>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              maxLength={100}
              placeholder="Write your shift note..."
              className="p-3 w-full border rounded-lg"
            />

            <div className="flex gap-4">
              {/* Start/Stop Button */}
              <div
                className={`flex items-center justify-center gap-2 p-2 lg:p-4 rounded-lg cursor-pointer w-full ${
                  isRunning ? "bg-red-500" : "bg-green-500"
                }`}
                onClick={handleShiftToggle}
              >
                <FaPlay className="text-white text-2xl" />
                <button className="text-white font-bold text-xl">
                  {isRunning ? "End Shift" : "Start Shift"}
                </button>
              </div>

              {/* Reset Button */}
              <div
                className="flex items-center gap-2 justify-center p-4 bg-gray-500 rounded-lg cursor-pointer w-full"
                onClick={resetTimer}
              >
                <GrPowerReset className="text-white text-2xl" />
                <button className="text-white font-bold ">Reset</button>
              </div>
            </div>
          </div>

          {shifts.length > 0 && (
            <div className="flex flex-col p-6 w-[100%] shadow-lg rounded-lg bg-gray-100 mt-5 ">
              <h1 className="font-bold text-xl">Today's Shifts</h1>
              {shifts.map((shift, index) => (
                <div
                  key={index}
                  className="relative p-4 bg-white rounded-lg shadow-md mt-2"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">Shift {index + 1}</p>
                    <BsThreeDots
                      className="text-xl cursor-pointer"
                      onClick={() =>
                        setShowDropdown(showDropdown === index ? null : index)
                      }
                    />
                  </div>
                  {showDropdown === index && (
                    <div className="absolute top-10 right-2 bg-gray-100 border rounded-lg shadow-md p-2">
                      <button
                        onClick={() => editShift(index)}
                        className="block w-full text-left px-2 py-1 hover:bg-gray-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteShift(index)}
                        className="block w-full text-left px-2 py-1 hover:bg-red-400 text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  <p>
                    Time:{" "}
                    <span className="font-semibold">
                      {formatTime(shift.time)}
                    </span>
                  </p>
                  <p>
                    Note:{" "}
                    <span className="italic">{shift.note || "No note"}</span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col  shadow-lg rounded-lg bg-gray-100 mt-5"></div>
      </div>
    </>
  );
};

export default Dashboard_LeftSection;
