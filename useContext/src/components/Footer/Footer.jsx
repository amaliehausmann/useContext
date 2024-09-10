import style from './Footer.module.scss'

export function Footer({footerStyling, theme}){

    return(
        <footer className={`${style[footerStyling]} ${theme}`}>
            <section>
                <h6>Links</h6>
                <ul>
                    <li>
                        <a href="">Link 1</a>
                    </li>
                    <li>
                        <a href="">Link 2</a>
                    </li>
                    <li>
                        <a href="">Link 3</a>
                    </li>
                </ul>
            </section>
            <section>
                <h6>Adresse</h6>
                <ul>
                    <li>SomeStreet 123</li>
                    <li>RandomCity</li>
                    <li>12345</li>
                </ul>
            </section>
            <section>
                <h6>Tilmeld dig nyhedsbrevet!</h6>
                <form>
                    <input type="email" placeholder="Indtast din email" />
                    <input type="submit" value="Send" />
                </form>
            </section>
        </footer>
    )
}