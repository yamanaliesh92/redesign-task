import { useStep } from "../context/stepContext";
import PageTitle from "./pageTitle";
import SelectSkipPage from "./selectSkipPage";

const StepContent = () => {
  const { currentStep } = useStep();

  return (
    <div className="flex items-center justify-center min-h-screen">
      {currentStep === 0 && <PageTitle pageName="Postcode" />}
      {currentStep === 1 && <PageTitle pageName="Waste Type" />}
      {currentStep === 2 && <SelectSkipPage />}
      {currentStep === 3 && <PageTitle pageName="Permit Check" />}
      {currentStep === 4 && <PageTitle pageName="Choose Date" />}
      {currentStep === 5 && <PageTitle pageName="Payment" />}
    </div>
  );
};

export default StepContent;
