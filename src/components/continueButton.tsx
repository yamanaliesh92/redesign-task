import { ArrowRight } from "lucide-react";
import { useStep } from "../context/stepContext";

const ContinueButton = () => {
  const { currentStep, nextStep } = useStep();

  if (currentStep === 2) return null;

  return (
    <button
      className="mt-2 px-2 py-1 bg-blue-500 dark:bg-blue-400 text-white rounded-lg flex items-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all"
      onClick={nextStep}
    >
      Continue <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default ContinueButton;
