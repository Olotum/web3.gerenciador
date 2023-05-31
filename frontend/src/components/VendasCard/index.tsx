
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Venda } from "../../models/venda";
import { BASE_URL } from "../../util/request"
import WSButton from '../WSButton';
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";



function VendasCard() {
    const max = new Date();
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [vendas, setVendas] = useState<Venda[]>([]);
    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        axios.get(`${BASE_URL}/vendas?minDate=${dmin}&maxDate=${dmax}`)
        .then(response => {
            setVendas(response.data.content)})
    }, [minDate, maxDate])

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
                        {vendas.map(venda => {
                            return (
                                <tr key={venda.id}>
                                    <td className="show992">{venda.id}</td>
                                    <td className="show576">{new Date(venda.date).toLocaleDateString()}</td>
                                    <td>{venda.vendedorId}</td>
                                    <td>{venda.clientId}</td>
                                    <td>R$ {venda.valor.toFixed(2)}</td>
                                    <td>
                                        <div className="wsbtn-container">
                                            <WSButton Id={venda.id} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="edbtn-container">
                                            <WSButton Id={venda.id}/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}



                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default VendasCard;