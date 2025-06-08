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
        <div className="w-full md:w-1/3 h-full">
          <img className="object-fill w-full h-full rounded-t-lg md:rounded-l-lg" src={skip.image} alt={"ImageAlt"} />
        </div>

        {/* Content Section */}
        <div className="flex flex-col py-2 px-4  justify-between w-full md:w-2/3">
          <div className="flex flex-col md:flex-row gap-4 md:gap-0   md:justify-between  w-full ">
            <div>
              <h2 className="text-[17px] w-full sm:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                {skip.size} Yard Skip
              </h2>
              <p className="text-[14px] mt-1 w-full sm:text-lg text-gray-700 dark:text-gray-400 flex items-center">
                {skip.hire_period_days}-Day Hire
              </p>
              {!skip.allowed_on_road && (
                <div className="flex items-center gap-2 mt-2 mb-2 p-1 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-300 rounded-md">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="text-[12px]">Not Allowed On The Road</span>
                </div>
              )}
            </div>

            <p className="text-[16px] mr-2 sm:text-xl font-semibold flex items-center md:items-start text-gray-900 dark:text-white">
              £{skip.price_before_vat}
            </p>
          </div>

          <div className="flex justify-center mt-4">
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
