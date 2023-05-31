
import { Cliente } from "../../models/cliente";
import { BASE_URL } from "../../util/request";
import WSButton from '../WSButton';
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";

function ClienteCard() {

    
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(50);

  const [Cliente, setCliente] = useState<Cliente[]>([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/cliente`)
      .then(response => {
        setCliente(response.data.content)
      })
  }, [min, max]);

  const handleMaxChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(event.target.value));
  };
  const handleMinChange = (event : React.ChangeEvent<HTMLInputElement>) => {
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
                <table className="cliente-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th>Nome</th>
                            <th>Compras</th>
                            <th>Valor Total</th>
                            <th>Notificar</th>
                            <th className="show576">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Cliente.map(cliente => {
                            return (
                                <tr key={cliente.id}>
                                    <td className="show992">{cliente.id}</td>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.numero_compras}</td>
                                    <td>R${cliente.valor_total.toFixed(2)}</td>
                                    <td>
                                        <div className="wsbtn-container">
                                            <WSButton Telefone={cliente.telefone} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="edbtn-container">
                                            <WSButton Telefone={cliente.telefone}/>
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
export default ClienteCard;