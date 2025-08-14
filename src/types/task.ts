export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle?: (id: number, completed: boolean) => void;
}
