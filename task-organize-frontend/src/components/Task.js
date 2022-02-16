import React from 'react';
import PropTypes from 'prop-types';

function Task({ taskData }) {
  const { _id, task, status, created, update } = taskData;

  return (
    <li value={ _id }>
      <div>{ task }</div>
      <div>{ created }</div>
      <div>{ update }</div>
      <div>{ status }</div>
      <button type="button">Editar</button>
      <button type="button">Excluir</button>
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
