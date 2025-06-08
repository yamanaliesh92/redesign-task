import React, { ReactNode } from "react";
import { StepProvider } from "../context/StepContext";

export default function AppProvider({ children }: { children: ReactNode }) {
  return <StepProvider>{children}</StepProvider>;
}
