import React from 'react';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';

function Home() {
  return (
    <div>
      <header>
        <h1>
          <span>TASK</span>
          <span>ORGANIZE</span>
        </h1>
        <Filters />
      </header>
      <TaskInput />
      <TaskList />
      <footer>
        <span>Projeto desenvolvido no curso da Trybe</span>
        <span>Renata Nunes - 2022</span>
      </footer>
    </div>
  );
}

export default Home;
