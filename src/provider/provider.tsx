import React, { ReactNode } from "react";
import { StepProvider } from "../context/stepContext";
import { ThemeProvider } from "../context/themeContext";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <StepProvider>{children}</StepProvider>
    </ThemeProvider>
  );
}
