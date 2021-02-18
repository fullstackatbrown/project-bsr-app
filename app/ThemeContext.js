import React from "react";

export const ThemeContext = React.createContext();

export const useTheme = () => React.useContext(ThemeContext);

export const CustomThemeProvider = (props) => {
  const [currentMode, setCurrentMode] = React.useState("light");

  const toggleMode = () => {
    const newMode = (currentMode === "light" ? "dark" : "light");
    setCurrentMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode: currentMode, toggleMode: toggleMode }}>
      { props.children }
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
