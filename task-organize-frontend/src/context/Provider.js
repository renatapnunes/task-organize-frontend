import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import http from '../services/api';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskEdit, setTaskEdit] = useState({});
  const [tasksFiltered, setTasksFiltered] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const results = await http.getTasks();
      setTasks(results);
      setLoading(false);
    };

    getTasks();
  }, []);

  const contextValue = {
    tasks,
    setTasks,
    loading,
    taskEdit,
    setTaskEdit,
    tasksFiltered,
    setTasksFiltered,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

const { oneOfType, arrayOf, node } = PropTypes;

Provider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Provider;
