'use client';

import { useState } from 'react';
import TaskList from '../components/TaskList';
import { Task } from '../types/task';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React with TypeScript', completed: false },
    { id: 2, title: 'Build a task list component', completed: true },
    { id: 3, title: 'Implement filtering functionality', completed: false },
    { id: 4, title: 'Add styling with Tailwind CSS', completed: true },
    { id: 5, title: 'Test the component thoroughly', completed: false },
  ]);

  // const handleToggle = (id: number, completed: boolean) => {
  //   console.log(`Task ${id} toggled to ${completed ? 'completed' : 'active'}`);
  
  // };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Task-2 task list react component
          </h1>
      
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
             task manager
            </h2>
            <p className="text-gray-600 text-center mb-4">
             
            </p>
             {/* <TaskList tasks={tasks} onToggle={handleToggle} /> */}
            <TaskList tasks={tasks} />
          </div>
        </div>

    
      </div>
    </div>
  );
}
