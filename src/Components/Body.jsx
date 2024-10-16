import React from 'react'

function Body() {
  return (
    <>
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
    </>
  )
}

export default Body
