import { useState } from "react";

interface ManualShiftProps {
  onClose: () => void;
}

const ManualShift = ({ onClose }: ManualShiftProps) => {
  const [fromDate, setFromDate] = useState("2025-02-26");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("2025-02-28");
  const [toTime, setToTime] = useState("");
  const [shiftNote, setShiftNote] = useState("");

  const handleAddShift = () => {
    console.log("Shift Added:", { fromDate, fromTime, toDate, toTime, shiftNote });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md   bg-opacity-30">
      <div className="flex flex-col gap-4 p-6 shadow-lg w-[100%] m-4 rounded-3xl bg-white lg:w-[50%]">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-bold">Add Manual Shift</h1>
          <button onClick={onClose} className="text-red-500 text-lg font-bold">X</button>
        </div>

        {/* Date & Time Selection */}
        <div className="flex justify-between gap-4">
          {/* From Section */}
          <div className="flex flex-col w-1/2 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">From</h2>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="time"
              value={fromTime}
              onChange={(e) => setFromTime(e.target.value)}
              className="p-2 border rounded-md w-full mt-2"
            />
          </div>

          {/* To Section */}
          <div className="flex flex-col w-1/2 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">To</h2>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="time"
              value={toTime}
              onChange={(e) => setToTime(e.target.value)}
              className="p-2 border rounded-md w-full mt-2"
            />
          </div>
        </div>

        {/* Shift Note */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Shift Note</h2>
          <textarea
            value={shiftNote}
            onChange={(e) => setShiftNote(e.target.value)}
            maxLength={500}
            placeholder="Write your shift note..."
            className="p-3 border rounded-lg w-full"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Cancel</button>
          <button onClick={handleAddShift} className="bg-green-500 text-white px-4 py-2 rounded-lg">Add Shift</button>
        </div>
      </div>
    </div>
  );
};

export default ManualShift;
