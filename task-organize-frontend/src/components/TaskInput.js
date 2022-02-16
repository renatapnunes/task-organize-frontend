import React, { useContext, useState } from 'react';

import Context from '../context/Context';
import http from '../services/api';

function TaskInput() {
  const { setTasks } = useContext(Context);
  const [taskData, setTaskData] = useState({ task: '', status: 'PENDENTE' });

  const handleClick = async () => {
    await http.createTask(taskData);
    const results = await http.getTasks();
    setTasks(results);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Digite uma terefa..."
        value={ taskData.task }
        onChange={ (e) => setTaskData({ ...taskData, task: e.target.value }) }
      />
      <select
        value={ taskData.status }
        onChange={ (event) => setTaskData({ ...taskData, status: event.target.value }) }
      >
        { ['PENDENTE', 'EM ANDAMENTO', 'PRONTO'].map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>)) }
      </select>
      <button
        type="button"
        onClick={ () => handleClick() }
      >
        Adicionar
      </button>
    </form>
  );
}

export default TaskInput;
