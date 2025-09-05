import React from 'react';

interface TaskStatsProps {
  total: number;
  completed: number;
  active: number;
}

export const TaskStats: React.FC<TaskStatsProps> = ({
  total,
  completed,
  active,
}) => {
  const completionPercentage =
    total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Task Overview</h2>
        <div className="text-sm text-gray-500">
          {completionPercentage}% Complete
        </div>
      </div>

      {total > 0 && (
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{total}</div>
          <div className="text-sm text-gray-500">Total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">{active}</div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{completed}</div>
          <div className="text-sm text-gray-500">Done</div>
        </div>
      </div>
    </div>
  );
};
