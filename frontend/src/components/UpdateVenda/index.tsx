import React, { useState } from 'react';
import axios from 'axios';
import { Venda } from '../../models/venda';
import { BASE_URL } from "../../util/request";

const UpdateVenda = () => {
  const [venda, setVenda] = useState({
    date: '',
    vendedor: 0,
    cliente: 0,
    valor: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setVenda(prevState => ({ ...prevState, [name]: value }));
  };

  const saveVenda = () => {
    axios.post(`${BASE_URL}/vendas`, venda)
      .then(() => {
        // Logic for successful sale save
      })
      .catch(error => {
        // Logic for handling error when saving sale
      });
  };

  return (
    <form>
      <input type="text" name="date" onChange={handleChange} placeholder="Digite a data" />
      <input type="text" name="vendedor" onChange={handleChange} placeholder="Digite o ID do vendedor" />
      <input type="text" name="cliente" onChange={handleChange} placeholder="Digite o ID do cliente" />
      <input type="text" name="valor" onChange={handleChange} placeholder="Digite o valor" />
      <button type="button" onClick={saveVenda}>Salvar</button>
    </form>
  );
};

export default UpdateVenda;

