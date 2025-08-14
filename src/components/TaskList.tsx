'use client';

import { useState, useEffect } from 'react';
import { Task, TaskListProps } from '@/types/task';

type FilterType = 'all' | 'active' | 'completed';

export default function TaskList({ tasks, onToggle }: TaskListProps) {
  const [localTasks, setLocalTasks] = useState<Task[]>(tasks);
  const [filter, setFilter] = useState<FilterType>('all');

 
  useEffect(() => {
    setLocalTasks(tasks);
  }, [tasks]);

  const handleToggle = (id: number, completed: boolean) => {
    const updatedTasks = localTasks.map(task =>
      task.id === id ? { ...task, completed } : task
    );
    setLocalTasks(updatedTasks);
    
    if (onToggle) {
      onToggle(id, completed);
    }
  };

  const filteredTasks = localTasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const activeCount = localTasks.filter(task => !task.completed).length;
  const completedCount = localTasks.filter(task => task.completed).length;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Task List</h2>
      
    
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All ({localTasks.length})
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            filter === 'active'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Active ({activeCount})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            filter === 'completed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>

      
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 text-center py-4">
            {filter === 'all' 
              ? 'No tasks yet' 
              : filter === 'active' 
                ? 'No active tasks' 
                : 'No completed tasks'
            }
          </li>
        ) : (
          filteredTasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => handleToggle(task.id, e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span
                className={`flex-1 text-sm ${
                  task.completed
                    ? 'line-through text-gray-500'
                    : 'text-gray-800'
                }`}
              >
                {task.title}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
