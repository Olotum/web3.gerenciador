import React, { useState } from 'react';
import Header from './components/Header';
import FilialCard from './components/FilialCard';

import './index.css';
import UpdateVenda from './components/UpdateVenda';
import VendedorCard from './components/VendedorCard';
import VendasCard from './components/VendasCard';
import ClienteCard from './components/ClienteCard';


function App() {
  const [selectedTab, setSelectedTab] = useState('vendas');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderCard = () => {
    switch (selectedTab) {
      case 'vendas':
        return <VendasCard/>;
      case 'vendedores':
        return <VendedorCard />;
      case 'clientes':
        return <ClienteCard />;
      case 'filiais':
        return <FilialCard />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <div className="card">
              <button type="button" onClick={() => handleTabClick('vendas')}>
                Vendas
              </button>
              <button type="button" onClick={() => handleTabClick('vendedores')}>
                Vendedores
              </button>
              <button type="button" onClick={() => handleTabClick('clientes')}>
                Clientes
              </button>
              <button type="button" onClick={() => handleTabClick('filiais')}>
                Filiais
              </button>
              <button type="button" onClick={() => handleTabClick('+')}>+</button>

              <UpdateVenda />

              {renderCard()}
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;