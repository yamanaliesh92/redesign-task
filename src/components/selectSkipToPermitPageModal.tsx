import Modal from "react-modal";
import { useStep } from "../context/stepContext";
import { SelectSkip } from "../types";
import { X } from "lucide-react";

const SelectSkipToPermitPageModal = ({
  isOpen,
  setIsOpen,
  skip,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  skip: SelectSkip;
}) => {
  const { nextStep } = useStep();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      ariaHideApp={false}
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    >
      <div className="flex justify-between items-center w-full mb-4">
        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Confirm Skip Selection</h1>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <X size={24} />
        </button>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary,
        options and/or accessories may be featured at additional cost.
      </p>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <span className="text-lg sm:text-lg font-medium text-gray-900 dark:text-white">Size:</span>
          <span className="text-lg sm:text-lg  text-gray-900 dark:text-white">{skip.size} yards</span>
        </div>

        <div className="flex justify-between">
          <span className="text-lg sm:text-lg font-medium text-gray-900 dark:text-white">Hire Period:</span>
          <span className="text-lg sm:text-lg  text-gray-900 dark:text-white">{skip.hire_period_days} days</span>
        </div>

        <div className="flex justify-between">
          <span className="text-lg sm:text-lg font-medium text-gray-900 dark:text-white">Price Before VAT:</span>

          <span className="text-lg sm:text-lg text-[#d4a017] dark:text-[#ffd966] font-bold">£{skip.price_before_vat}</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 mt-6">
        <button
          className="border py-2 rounded-md px-4 dark:text-white border-gray-500 bg-transparent hover:border-gray-600 dark:border-gray-700 dark:hover:border-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Back
        </button>
        <button
          className="bg-green-600 rounded-md py-2 px-4 text-white  hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
          onClick={nextStep}
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default SelectSkipToPermitPageModal;
