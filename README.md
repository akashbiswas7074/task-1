# Task List React Component (TypeScript)

This project implements a React functional component `<TaskList>` that displays a list of tasks and allows basic interactions. The component is built with TypeScript and uses Tailwind CSS for styling.

## Features

- ✅ Displays tasks with checkboxes and titles
- ✅ Visual feedback for completed tasks (strike-through, dimmed text)
- ✅ Toggle task completion status
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Task count display for each filter
- ✅ TypeScript interfaces for type safety
- ✅ Responsive design with Tailwind CSS
- ✅ Optional callback prop for controlled usage

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Demo page showcasing the component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── TaskList.tsx      # Main TaskList component
└── types/
    └── task.ts           # TypeScript interfaces
```

## Component API

### TaskList Props

```typescript
interface TaskListProps {
  tasks: Task[];
  onToggle?: (id: number, completed: boolean) => void;
}
```

### Task Interface

```typescript
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

## Usage Examples

### Basic Usage (Uncontrolled)

```tsx
import TaskList from './components/TaskList';

const tasks = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a component', completed: true },
];

function App() {
  return <TaskList tasks={tasks} />;
}
```

### Controlled Usage

```tsx
import { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a component', completed: true },
  ]);

  const handleToggle = (id: number, completed: boolean) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  return <TaskList tasks={tasks} onToggle={handleToggle} />;
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Implementation Details

### State Management

The component manages its own internal state using `useState` hook. When the `onToggle` prop is provided, it also calls the parent callback to allow for controlled usage.

### Filtering

The component includes three filter options:
- **All**: Shows all tasks
- **Active**: Shows only incomplete tasks
- **Completed**: Shows only completed tasks

Each filter button displays the count of tasks in that category.

### Styling

The component uses Tailwind CSS for styling with:
- Responsive design
- Hover effects
- Visual feedback for completed tasks
- Modern card-based layout

### TypeScript

Full TypeScript support with:
- Proper interface definitions
- Type-safe props
- IntelliSense support

## Technologies Used

- React 19.1.0
- TypeScript 5
- Next.js 15.4.6
- Tailwind CSS 4
# task-1
