
import { Vendedor } from "../../models/vendedor";
import { BASE_URL } from "../../util/request";
import WSButton from '../WSButton';
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";

function VendedorCard() {


    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20000);

    const [vendedor, setVendedor] = useState<Vendedor[]>([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/vendedor?minVendido=${min}&maxVendido=${max}`)
            .then(response => {
                setVendedor(response.data.content)
            })
    }, [min, max]);

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(parseInt(event.target.value));
    };
    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(parseInt(event.target.value));
    };

    return (
        <div className="card">
            <div>
                <div className="form-control-container">
                    <input
                        type="number"
                        value={max}
                        onChange={handleMaxChange}
                        className="form-control"
                    />
                </div>
                <div className="form-control-container">
                    <input type="number"
                        value={min}
                        onChange={handleMinChange}
                        className="form-control"
                    />
                </div>
            </div>

            <div>
                <table className="vendedor-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th>Nome</th>
                            <th>Total Vendido</th>
                            <th>Filial</th>
                            <th>Notificar</th>
                            <th className="show576">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendedor.map((vendedor) => {
                            return (
                                <tr key={vendedor.id}>
                                    <td className="show992">{vendedor.id}</td>
                                    <td>{vendedor.nome}</td>
                                    <td>R${vendedor.total_vendido.toFixed(2)}</td>
                                    <td>{vendedor.filial_id}</td>
                                    <td>
                                        <div className="wsbtn-container">
                                            <WSButton Telefone={vendedor.telefone} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="edbtn-container">
                                            <WSButton Telefone={vendedor.telefone} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}




                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default VendedorCard;