import React, { useState, useContext, useEffect } from 'react';

import Context from '../context/Context';

function Filters() {
  const { tasks, setTasksFiltered } = useContext(Context);
  const [filters, setFilters] = useState({ status: 'TODAS' });

  useEffect(() => {
    let tasksByStatus = tasks;
    if (filters.status !== 'TODAS') {
      tasksByStatus = tasks.filter((task) => task.status === filters.status);
    }
    setTasksFiltered(tasksByStatus);
  }, [filters, tasks]);

  return (
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
  );
}

export default Filters;
