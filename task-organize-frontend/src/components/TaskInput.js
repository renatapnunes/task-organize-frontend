import React, { useContext, useState } from 'react';

import Context from '../context/Context';
import http from '../services/api';

function TaskInput() {
  const { setTasks, taskEdit, setTaskEdit } = useContext(Context);
  const [taskData, setTaskData] = useState({ task: '', status: 'PENDENTE' });

  const clickAdd = async () => {
    await http.createTask(taskData);
    const results = await http.getTasks();
    setTasks(results);
  };

  const clickEdit = async () => {
    await http.updateTask(taskEdit);
    const results = await http.getTasks();
    setTasks(results);
    setTaskEdit({});
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if ('task' in taskEdit) {
      setTaskEdit({ ...taskEdit, [name]: value });
    } else {
      setTaskData({ ...taskData, [name]: value });
    }
  };

  const buttons = () => {
    if ('task' in taskEdit) {
      return (
        <button
          className="button-edit"
          type="button"
          // disabled={ !taskEdit.task }
          onClick={ clickEdit }
        >
          Editar
        </button>
      );
    }

    return (
      <button
        className="button-add"
        type="button"
        disabled={ !taskData.task }
        onClick={ clickAdd }
      >
        Adicionar
      </button>
    );
  };

  return (
    <form>
      <input
        className={ 'task' in taskEdit ? 'input-task-edit' : 'input-task' }
        type="text"
        placeholder="Digite uma terefa..."
        name="task"
        value={ 'task' in taskEdit ? taskEdit.task : taskData.task }
        onChange={ (event) => handleChange(event) }
      />
      <select
        className={ 'task' in taskEdit ? 'select-task-edit' : 'select-task' }
        name="status"
        value={ 'task' in taskEdit ? taskEdit.status : taskData.status }
        onChange={ (event) => handleChange(event) }
      >
        { ['PENDENTE', 'EM ANDAMENTO', 'PRONTO'].map((option, index) => (
          <option key={ index } value={ option }>{ option }</option>)) }
      </select>
      { buttons() }
    </form>
  );
}

export default TaskInput;
