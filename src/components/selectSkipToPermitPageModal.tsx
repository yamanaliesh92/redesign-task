import Modal from "react-modal";
import { useStep } from "../context/stepContext";
import { SelectSkip } from "../types";

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
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md mx-auto"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Imagery and Information Disclaimer</h2>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary,
        options and/or accessories may be featured at additional cost.
      </p>

      {/* Skip Details */}
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Size: {skip.size} yards</h2>
      <p className="text-lg text-gray-700 dark:text-gray-400">Hire Period: {skip.hire_period_days} days</p>
      <p className="text-lg text-gray-700 dark:text-gray-400">Allowed on Road: {skip.allowed_on_road ? "Yes" : "No"}</p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">Price Before VAT: £{skip.price_before_vat}</p>
      <p className="text-lg text-gray-700 dark:text-gray-400">VAT: {skip.vat}%</p>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="border dark:text-white border-gray-500 bg-transparent hover:border-gray-600 dark:border-gray-700 dark:hover:border-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Back
        </button>
        <button className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600" onClick={nextStep}>
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default SelectSkipToPermitPageModal;
