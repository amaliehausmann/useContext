import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import style from "./MainPage.module.scss";
import { Header } from "../components/Header/Header";
import { Gallery } from "../components/Gallery/Gallery";
import { Footer } from "../components/Footer/Footer";
import { Wrapper } from "../components/Wrapper/Wrapper";

export function MainPage() {
  const { changeTheme, isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <Wrapper theme={isDarkMode ? style.dark : style.light} wrapperStyling='wrapperStyling'>
        <Header
        title="Jeg er en header"
        theme={isDarkMode ? style.dark : style.light}
        headerStyling='headerStyling'
      ></Header>
      <h1>Skift Tema!</h1>
      <button
        onClick={() => changeTheme()}
        className={isDarkMode ? style.dark : style.light}
      >
        Klik på mig!
      </button>

      <Gallery galleryStyling='galleryStyling' theme={isDarkMode ? style.dark : style.light}></Gallery>
      <Footer footerStyling='footerStyling' theme={isDarkMode ? style.dark : style.light}></Footer>
    </Wrapper>

  );
}
