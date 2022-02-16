import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';
import http from '../services/api';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  console.log('PROVIDER');

  useEffect(() => {
    const getTasks = async () => {
      const results = await http.getTasks();
      setTasks(results);
    };

    getTasks();
  }, []);

  const contextValue = {
    tasks,
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
