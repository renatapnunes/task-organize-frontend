import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Context from '../context/Context';
import http from '../services/api';
import editIcon from '../images/edit.png';
import deleteIcon from '../images/delete.png';

const statusColor = {
  PENDENTE: '#fab2b2',
  'EM ANDAMENTO': '#ffe69b',
  PRONTO: '#3fccbc',
};

function Task({ taskData }) {
  const { _id, task, status, created } = taskData;
  const { setTaskEdit, setTasks } = useContext(Context);

  const clickDelete = async () => {
    await http.deleteTask({ _id });
    const results = await http.getTasks();
    setTasks(results);
  };

  return (
    <li
      className="task-card"
      style={ { border: `0.2em solid ${statusColor[status]}` } }
      value={ _id }
    >
      <div className="container-task-date">
        <div className="task">{ task }</div>
        <div className="date">{ `Data de criação: ${created}` }</div>
      </div>
      <div
        className="task-status"
        style={ { background: statusColor[status] } }
      >
        { status }
      </div>
      <button
        className="edit-button"
        type="button"
        onClick={ () => setTaskEdit(taskData) }
      >
        <img className="edit-img" src={ editIcon } alt="Icone de editar" />
      </button>
      <button
        className="delete-button"
        type="button"
        onClick={ clickDelete }
      >
        <img className="delete-img" src={ deleteIcon } alt="Icone de excluir" />
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
