import React from 'react';
import type { TaskFilter as TaskFilterType } from '../types/Task';

interface TaskFilterProps {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter,
  onFilterChange,
  taskCounts,
}) => {
  const filters: Array<{ key: TaskFilterType; label: string; count: number }> =
    [
      { key: 'all', label: 'All Tasks', count: taskCounts.all },
      { key: 'active', label: 'Active', count: taskCounts.active },
      { key: 'completed', label: 'Completed', count: taskCounts.completed },
    ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-1 inline-flex">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            currentFilter === filter.key
              ? 'bg-primary-600 text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
          }`}
        >
          {filter.label}
          <span
            className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              currentFilter === filter.key
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};
