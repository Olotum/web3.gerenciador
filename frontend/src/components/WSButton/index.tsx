
import icon from "../../assets/img/notification-icon.svg";
import './styles.css';


type Props = { Telefone: number }

function handleClick(telefone :number) {
    const ws = "https://wa.me/";
    window.open(ws + telefone);
    }


function WSButton({Telefone} : Props) {
    return (
        <div className="ws-btn" onClick={() => {handleClick(Telefone)}}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default WSButton