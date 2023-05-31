

import { BASE_URL } from "../../util/request";
import WSButton from '../WSButton';
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Filial } from "../../models/filial";

function FilialCard() {

    
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20000);

  const [Filial, setFilial] = useState<Filial[]>([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/filial?minVendido=${min}&maxVendido=${max}`)
      .then(response => {
        setFilial(response.data.content)
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
                <table className="filial-table">
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
                        {Filial.map(filial => {
                            return (
                                <tr key={filial.id}>
                                    <td className="show992">{filial.id}</td>
                                    <td>{filial.nome}</td>
                                    <td>{filial.endereço}</td>
                                    <td>R${filial.total_vendido.toFixed(2)}</td>
                                    <td>
                                        <div className="wsbtn-container">
                                            <WSButton Telefone={filial.telefone} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="edbtn-container">
                                            <WSButton Telefone={filial.telefone}/>
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
export default FilialCard;