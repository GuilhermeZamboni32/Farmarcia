import { useState } from 'react';
import './App.css';


function App() {
  const [fila, setFila] = useState([])

  function gerarSenha() {
    let senha = {
      numero: Date.now(),
      tipo: 'normal',
    };
    setFila([...fila, senha])
  }

  function atender() {
    if (fila.length) {
      alert(`Atendendo senha: ${fila[0].numero}`)
      setFila(fila.slice(1)); // REMOVE O PRIMEIRO DA FILA
    } else {
      alert('Não tem ninguém na fila, finge que tá fazendo alguma coisa e vai descansar')
    }
  }

  return (
    <>
      <header className="header">
      <img src="/img/farmarcia-logo-pequena.png" alt="Logo da Farmácia" className="logo" />
        <h1>💉Farmácia💉</h1>
      </header>

      <main className="body-content">
        <div className="sections-container">
          <div className="section-group">
            <div className="intro">
              <h2>Bem-vindo à Farmácia!</h2>
              <p>Agora sob nova direção.</p>
            </div>

            <div className="inauguracao">
              <h2>Inauguração</h2>
              <p>Participe da inauguração dia 10 de Setembro.</p>
            </div>
          </div>

          <div className="section-group">
            <div className="benefits">
              <h2>Nossos Diferenciais</h2>
              <p>Atendimento personalizado</p>
              <p>Descontos especiais para clientes regulares</p>
              <p>Medicamentos com preços acessíveis</p>
            </div>

            <div className="senha">
              <h2>Gestão de Senhas</h2>
              <button onClick={gerarSenha}>Gerar Senha Normal</button>
              <button onClick={atender}>Atender</button>

              <h3>Fila de Espera:</h3>
              {fila.length > 0 ? (
                fila.map((senha) => (
                  <div key={senha.numero}>
                    <p>SENHA: {senha.numero}</p>
                    <p>Tipo: {senha.tipo}</p>
                  </div>
                ))
              ) : (
                <p>Nenhuma senha na fila.</p>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Farmácia Nova Direção - Todos os direitos reservados</p>
      </footer>
    </>
  );
}

export default App;
