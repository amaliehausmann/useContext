import { NavBar } from "./NavBar/NavBar";
import style from './Header.module.scss'
export function Header({title, headerStyling, theme}){

    return(
        <header className={`${style[headerStyling]} ${theme}`}>
            <h1>{title}</h1>
            <NavBar></NavBar>
        </header>
    )

}