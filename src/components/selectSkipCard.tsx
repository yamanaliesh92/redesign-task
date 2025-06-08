import { AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SelectSkip } from "../types";
import SelectSkipToPermitPageModal from "./selectSkipToPermitPageModal";

export default function SelectSkipCard({
  skip,
  selectedId,
  setSelectedId,
}: {
  skip: SelectSkip;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = () => {
    if (selectedId === skip.id) {
      setSelectedId(null); // ✅ Deselect if already selected
    } else {
      setSelectedId(skip.id); // ✅ Select if not selected
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={`border-2  min-h-52 rounded-lg shadow-sm transition-colors duration-300 flex flex-col md:flex-row ${
          selectedId === skip.id ? "border-purple-400" : "border-gray-200 dark:border-gray-700"
        } bg-white dark:bg-gray-800`}
        onClick={handleSelect}
      >
        <div className="w-full md:w-2/3 relative h-full flex">
          {!skip.allowed_on_road && (
            <div className="flex absolute bg-[#000] top-[10px] left-[5px]  items-center gap-2 p-1   text-yellow-300 rounded-md">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-[12px]">Not Allowed On The Road</span>
            </div>
          )}
          <img className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg" src={skip.image} alt="ImageAlt" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col py-2 px-4  justify-between w-full md:w-2/3">
          <div>
            <h2 className="text-[17px] w-full sm:text-lg font-bold text-gray-900 dark:text-white  gap-2">{skip.size} Yard Skip</h2>
            <p className="text-[14px] mt-1 w-full sm:text-md text-gray-700 dark:text-gray-400">{skip.hire_period_days}-Day Hire</p>
          </div>
          <p className="text-[25px] mt-1 sm:mt-0 font-semibold  text-[#d4a017]  dark:text-[#ffd966]">£{skip.price_before_vat}</p>

          <div className="flex justify-center mt-3 sm:mt-4">
            <button
              className={`w-full px-4 py-2 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                selectedId === skip.id
                  ? "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                  : "bg-teal-600 hover:bg-teal-700 dark:bg-cyan-500 dark:hover:bg-cyan-600"
              }`}
              onClick={handleSelect}
            >
              {selectedId === skip.id ? (
                <>
                  <span className="truncate text-white">Selected</span>
                  <CheckCircle className="w-5 h-5 text-white shrink-0" />
                </>
              ) : (
                <span className="truncate text-white">Select This Skip</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <SelectSkipToPermitPageModal isOpen={isOpen} setIsOpen={setIsOpen} skip={skip} />
    </>
  );
}
