import React from 'react';

import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Filters from '../components/Filters';

function Home() {
  return (
    <div>
      <TaskInput />
      <Filters />
      <TaskList />
    </div>
  );
}

export default Home;
