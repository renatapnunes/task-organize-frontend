import React, { useContext } from 'react';

import Context from '../context/Context';
import Task from './Task';

function TaskList() {
  const { tasksFiltered, loading } = useContext(Context);

  if (loading) return <span>Loading...</span>;

  if (!tasksFiltered.length) return <span>Nenhuma tarefa adicionada</span>;

  return (
    <ul>
      { tasksFiltered.map((task, index) => <Task key={ index } taskData={ task } />) }
    </ul>
  );
}

export default TaskList;
