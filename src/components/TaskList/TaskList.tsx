import { ReactNode, useMemo } from 'react';
import { Accordion } from '../Accordion/Accordion';
import { Checkbox } from '../Checkbox/Checkbox';
import { Icon } from '../Icons/Icon';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface Props {
  title: ReactNode;
  tasks: Task[];
  onItemClick?: (task: Task) => void;
}

export const TaskList = (props: Props) => {
  const accordionContent = useMemo(() => {
    return (
      <ul className="list-none">
        {props.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} onItemClick={props.onItemClick} />
        ))}
      </ul>
    );
  }, [props.tasks]);

  const tasksCompleted = useMemo(() => {
    return props.tasks.every((task) => task.completed);
  }, [props.tasks]);

  return (
    <Accordion
      title={
        <div className={`flex items-center ${tasksCompleted ? 'text-successSemiDark' : ''}`}>
          <Icon icon={tasksCompleted ? 'done' : 'to-do'} className="mr-4" />
          {props.title}
        </div>
      }
      content={accordionContent}
    />
  );
};

interface TaskListItemProps {
  task: Task;
  onItemClick?: (task: Task) => void;
}

const TaskListItem = (props: TaskListItemProps) => {
  const { task, onItemClick } = props;

  return (
    <li
      className="py-[18px] px-4 flex items-center justify-start cursor-pointer"
      onClick={() => {
        onItemClick?.(task);
      }}
    >
      <Checkbox
        checked={task.completed}
        onChange={() => onItemClick?.(task)}
        onClick={(e) => e.stopPropagation()}
      />
      {task.name}
    </li>
  );
};
