import Header from "./components/Header";
import FilialCard from "./components/FilialCard";

import './index.css'

function App() {
  return (
    <>

      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <div className="card">
              <button type="button">Vendas</button>
              <button type="button">Vendedores</button>
              <button type="button">Clientes</button>
              <button type="button">Filiais</button>
              <button type="button">+</button>

              <FilialCard />
            </div>

          </div>
        </section>
      </main>
    </>
  )
}
export default App;