import React, { useContext } from 'react';

import Context from '../context/Context';
import Task from './Task';

function TaskList() {
  const { tasks } = useContext(Context);

  if (!tasks.length) return <span>Loading...</span>;

  return (
    <ul>
      { tasks.map((task, index) => <Task key={ index } taskData={ task } />) }
    </ul>
  );
}

export default TaskList;
