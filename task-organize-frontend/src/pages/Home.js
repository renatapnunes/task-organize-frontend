import React from 'react';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';
import image from '../images/orginizer.png';

import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>
          <span className="title-task">TASK</span>
          <span className="title-orginizer">ORGANIZER</span>
        </h1>
        <Filters />
      </header>
      <div className="tasks">
        <TaskInput />
        <div className="tasks-image">
          <TaskList />
          <img className="main-img" src={ image } alt="Imagem ilustrativa" />
        </div>
        <footer>
          <span>Projeto desenvolvido no curso da Trybe</span>
          <span>Renata Nunes - 2022</span>
        </footer>
      </div>
    </div>
  );
}

export default Home;
