/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState, useContext, useEffect } from 'react';

import Context from '../context/Context';
import http from '../services/api';

const RADIO_BUTTONS = [
  { code: 'asc', text: 'Alfabética (A-Z)' },
  { code: 'desc', text: 'Alfabética (Z-A)' },
  { code: 'created-asc', text: 'Criação (mais atual)' },
  { code: 'created-desc', text: 'Criação (menos atual)' },
];

const ONE_NEGATIVE = -1;

function Filters() {
  const { tasks, setTasksFiltered } = useContext(Context);
  const [filters, setFilters] = useState({ status: 'TODAS', sort: 'created-asc' });

  const sortAlphabetically = (a, b) => {
    if (a.task < b.task) { return ONE_NEGATIVE; }
    if (a.task > b.task) { return 1; }
    return 0;
  };

  const clickDeleteAll = async () => {
    await http.deleteAllTasks();
    const results = await http.getTasks();
    setTasks(results);
  };

  const sortFunctions = {
    asc: (tasksByStatus) => tasksByStatus.sort((a, b) => sortAlphabetically(a, b)),
    desc: (tasksByStatus) => tasksByStatus.sort((a, b) => sortAlphabetically(b, a)),
    'created-desc': (tasksByStatus) => tasksByStatus.reverse(),
  };

  useEffect(() => {
    let tasksByStatus = [...tasks];

    if (filters.status !== 'TODAS') {
      tasksByStatus = tasks.filter((task) => task.status === filters.status);
    }

    if (tasksByStatus.length && filters.sort !== 'created-asc') {
      sortFunctions[filters.sort](tasksByStatus);
    }

    setTasksFiltered(tasksByStatus);
  }, [filters, tasks]);

  return (
    <div>
      <div>
        { ['TODAS', 'PENDENTE', 'EM ANDAMENTO', 'PRONTO'].map((status, index) => (
          <button
            key={ index }
            type="button"
            onClick={ () => setFilters({ ...filters, status }) }
          >
            { status }
          </button>
        ))}
      </div>
      <div>
        { RADIO_BUTTONS.map(({ code, text }, index) => (
          <label htmlFor={ code } key={ index }>
            <input
              type="radio"
              id={ code }
              name="sort"
              value={ code }
              checked={ filters.sort === code }
              onChange={ () => setFilters({ ...filters, sort: code }) }
            />
            { text }
          </label>
        )) }
      </div>
      <button type="button" onClick={ clickDeleteAll }>
        Excluir Tarefas
      </button>
    </div>
  );
}

export default Filters;
