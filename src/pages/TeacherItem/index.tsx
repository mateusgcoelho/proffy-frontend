import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/50842268?s=460&u=8c904a078bf9ff1bda538ddeb773f770880f12a4&v=4" alt=""/>
      <div>
        <strong>João Mateus Games Coelho</strong>
        <span>Jogadoh</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;