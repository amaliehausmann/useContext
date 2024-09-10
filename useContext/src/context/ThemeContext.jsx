import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider(props) {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("isDarkMode");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  function changeTheme() {
    if(isDarkMode){
        setIsDarkMode(false)
    } else{
        setIsDarkMode(true)
    }
  }


  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
