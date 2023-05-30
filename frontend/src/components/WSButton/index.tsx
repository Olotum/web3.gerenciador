import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../util/request";
import './styles.css';


type Props = { vendaId: number }

function handleClick(vendaId :number) {
    
        console.log("sucesso " + vendaId);
    }

function WSButton({vendaId} : Props) {
    return (
        <div className="ws-btn" onClick={() => {handleClick(vendaId)}}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default WSButton