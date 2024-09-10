import style from './Wrapper.module.scss'

export function Wrapper({wrapperStyling, theme, children}){

    return(
        <div className={`${style[wrapperStyling]} ${theme}`}>
            {children}
        </div>
    )
}