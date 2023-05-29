import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                <h1>Gerenciador</h1>
                <p>
                    Desenvolvido por 
                    <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-ferreira-dos-santos-621a23226/"> José Gabriel F. Dos Santos </a>
                </p>
            </div>
        </header>
    )
}

export default Header