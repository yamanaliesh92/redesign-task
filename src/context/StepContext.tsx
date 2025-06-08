import { createContext, useContext, useState, ReactNode } from "react";

export const steps = ["Postcode", "Waste Type", "Select Skip", "Permit Check", "Choose Date", "Payment"];

interface StepContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(2);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return <StepContext.Provider value={{ currentStep, setCurrentStep, nextStep }}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};
