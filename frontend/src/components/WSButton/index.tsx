import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../util/request";
import './styles.css';


type Props = { vendaId: number }

function handleClick(vendaId :number) {
    axios(`https://api.whatsapp.com/send?phone=5599999999999`)
    .then(response => {
        console.log("sucesso")
    })
} 

function WSButton({vendaId} : Props) {
    return (
        <div className="ws-btn" onClick={() => {handleClick(vendaId)}}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default WSButton