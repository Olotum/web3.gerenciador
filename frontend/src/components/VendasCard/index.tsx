
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import WSButton from '../WSButton';
import './styles.css'
import { useState } from "react";



function VendasCard() {
    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);
    

    return (
        <div className="card">
            <div>
                <div className="form-control-container">
                    <DatePicker
    selected={maxDate}
    onChange={(date: Date) => setMaxDate(date)}
    className="form-control"
    dateFormat="dd/MM/yyyy"
/>
                </div>
                <div className="form-control-container">
                <DatePicker 
    selected={minDate}
    onChange={(date: Date) => setMinDate(date)}
    className="form-control"
    dateFormat="dd/MM/yyyy"
/>
                </div>
            </div>

            <div>
                <table className="vendas-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th>Cliente</th>
                            <th>Valor</th>
                            <th>Notificar</th>
                            <th className="show576">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">001</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>Alberto</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="wsbtn-container">
                                   <WSButton/>
                                </div>
                            </td>
                            <td>
                                <div className="edbtn-container" className="show576">
                                    <WSButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">001</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>Alberto</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="wsbtn-container">
                                   <WSButton/>
                                </div>
                            </td>
                            <td>
                                <div className="edbtn-container" className="show576">
                                    <WSButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">001</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>Alberto</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="wsbtn-container">
                                   <WSButton/>
                                </div>
                            </td>
                            <td>
                                <div className="edbtn-container" className="show576">
                                    <WSButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default VendasCard;