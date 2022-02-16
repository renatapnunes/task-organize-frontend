import React from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function Provider({ children }) {
  const contextValue = {};

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
