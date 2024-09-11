import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="bg-softBlue text-white p-4 flex justify-between items-center">
      <h1>Chat App</h1>
      <button onClick={toggleTheme} className="text-white hover:text-gray-200">
        {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </header>
  );
};

export default Header;
