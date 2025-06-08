import React, { ReactNode } from "react";
import { StepProvider } from "../context/StepContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <StepProvider>{children}</StepProvider>
    </ThemeProvider>
  );
}
