import icon from "../../assets/img/notification-icon.svg";

import './styles.css';


type Props = { saleId: number }


function WSButton() {
    return (
        <div className="ws-btn">
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default WSButton