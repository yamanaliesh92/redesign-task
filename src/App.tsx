import "./App.css";
import ThemeToggle from "./components/themeToggle";
import Header from "./layout/header";
import StepContent from "./pages/stepContent";

function App() {
  return (
    <div className="bg-white dark:bg-gray-800 ">
      <Header />
      <StepContent />
      <ThemeToggle />
    </div>
  );
}

export default App;
