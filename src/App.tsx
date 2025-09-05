import { TaskFilter } from './components/TaskFilter';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskStats } from './components/TaskStats';
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    filter,
    setFilter,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskCompletion,
    clearCompletedTasks,
    getTaskStats,
  } = useTasks();

  const stats = getTaskStats();
  const hasCompletedTasks = stats.completed > 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Task Manager
          </h1>
          <p className="text-lg text-gray-600">
            Stay organized and get things done
          </p>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <TaskStats
            total={stats.total}
            completed={stats.completed}
            active={stats.active}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Task Form */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Add New Task
              </h2>
              <TaskForm onSubmit={addTask} />
            </div>
          </div>

          {/* Task List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Filter and Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <TaskFilter
                  currentFilter={filter}
                  onFilterChange={setFilter}
                  taskCounts={{
                    all: stats.total,
                    active: stats.active,
                    completed: stats.completed,
                  }}
                />

                {hasCompletedTasks && (
                  <button
                    onClick={clearCompletedTasks}
                    className="btn-danger text-sm"
                  >
                    Clear Completed
                  </button>
                )}
              </div>

              {/* Task List */}
              <TaskList
                tasks={tasks}
                onToggleComplete={toggleTaskCompletion}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>Built with React, TypeScript, Tailwind CSS, and Vite</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
