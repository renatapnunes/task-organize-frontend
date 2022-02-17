import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Context from '../context/Context';
import http from '../services/api';

function Task({ taskData }) {
  const { _id, task, status, created } = taskData;
  const { setTaskEdit, setTasks } = useContext(Context);

  const clickDelete = async () => {
    await http.deleteTask({ _id });
    const results = await http.getTasks();
    setTasks(results);
  };

  return (
    <li value={ _id }>
      <div>{ task }</div>
      <div>{ created }</div>
      <div>{ status }</div>
      <button
        type="button"
        onClick={ () => setTaskEdit(taskData) }
      >
        Editar
      </button>
      <button
        type="button"
        onClick={ () => clickDelete() }
      >
        Excluir
      </button>
    </li>
  );
}

Task.propTypes = {
  taskData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    update: PropTypes.string.isRequired,
  }).isRequired,
};

export default Task;
