import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <div className={`${styles.contato} animeLeft  `}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />

      <div>
        <h1>Entre em Contato.</h1>
        <ul className={styles.dados}>
          <li>contato@contato.com</li>
          <li>99999-9999</li>
          <li>Rua Ali perto, 999</li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
