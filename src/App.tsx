import "./App.css";
import ThemeToggle from "./components/themeToggle";
import Header from "./layout/header";
import StepContent from "./pages/stepContent";

function App() {
  return (
    <div>
      <Header />
      <StepContent />
      <ThemeToggle />
    </div>
  );
}

export default App;
