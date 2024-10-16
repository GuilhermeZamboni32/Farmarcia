import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';

function Home() {
  return (
    <div className="home-section">
      <h2>Bem-vindo à Farmácia!</h2>
      <p>Agora sob nova direção.</p>
      <BiPlusMedical />
      <h2>Inauguração</h2>
      <p>Participe da inauguração dia 10 de Setembro.</p>
    </div>
  );
}

export default Home;
