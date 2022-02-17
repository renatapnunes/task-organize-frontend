/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sonarjs/no-duplicate-string */
import React, { useState, useContext, useEffect } from 'react';

import Context from '../context/Context';
import http from '../services/api';

const RADIO_BUTTONS = [
  { code: 'asc', text: 'Alfabética (A-Z)' },
  { code: 'desc', text: 'Alfabética (Z-A)' },
  { code: 'created-desc', text: 'Data de criação (mais recente)' },
  { code: 'created-asc', text: 'Data de criação (menos recente)' },
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
    <div className="filters">
      <div className="status-filter">
        Tarefas:
        { ['TODAS', 'PENDENTE', 'EM ANDAMENTO', 'PRONTO'].map((status, index) => (
          <button
            className="button-status"
            key={ index }
            type="button"
            onClick={ () => setFilters({ ...filters, status }) }
          >
            { filters.status === status ? `${status} ✔` : status }
          </button>
        ))}
      </div>
      <div className="sort-tasks">
        Ordem:
        { RADIO_BUTTONS.map(({ code, text }, index) => (
          <label className="label" htmlFor={ code } key={ index }>
            <input
              className="radio"
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
      <button className="delete-all" type="button" onClick={ clickDeleteAll }>
        Excluir Tarefas
      </button>
    </div>
  );
}

export default Filters;
