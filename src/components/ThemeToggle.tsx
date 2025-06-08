import { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300 
      bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      {theme === "dark" ? <Sun className="text-yellow-500 w-6 h-6" /> : <Moon className="text-blue-500 w-6 h-6" />}
    </button>
  );
}
