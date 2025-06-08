import { Star } from "lucide-react";
import { useStep } from "./StepContext";

const steps = ["Postcode", "Waste Type", "Select Skip", "Permit Check", "Choose Date", "Payment"];

const Header = () => {
  const { currentStep, setCurrentStep } = useStep();

  return (
    <header className="fixed bg-white dark:bg-gray-800 top-0 left-0  w-full border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white p-4 sm:p-6 flex justify-center z-50 bg-transparent">
      <nav className="max-w-4xl w-full flex flex-col items-center relative">
        <div className="flex justify-between w-full space-x-2 sm:space-x-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center ${index > currentStep ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`} // ✅ Disables hover for future steps
              onClick={() => index <= currentStep && setCurrentStep(index)}
            >
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                  index === currentStep
                    ? "bg-blue-500 dark:bg-blue-400 text-white"
                    : index < currentStep
                    ? "bg-green-500 dark:bg-green-400 text-white"
                    : "bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                } w-[18px] h-[18px] sm:w-10 sm:h-10`} // ✅ Smaller circles on mobile
              >
                {index === currentStep ? <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> : index + 1}
              </div>
              <p className="text-[9px] sm:text-xs mt-1 sm:mt-2">{step}</p> {/* ✅ Smaller text on mobile */}
            </div>
          ))}
        </div>

        <div className="w-full h-1 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 sm:mt-3">
          <div
            className="h-1 bg-green-500 dark:bg-green-400 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
