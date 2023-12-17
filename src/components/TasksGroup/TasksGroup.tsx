import { Card } from '../Card/Card';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { TaskList } from '../TaskList/TaskList';
import { useFetch } from '../../lib/hooks/useFetch';
import { useNormalizedProgress } from '../../lib/hooks/useNormalizedProgres';

interface APITask {
  value: number;
  checked: boolean;
  description: string;
}

export interface APITaskGroup {
  name: string;
  tasks: APITask[];
}

export const TasksGroup = () => {
  const { data, error, loading, setData } = useFetch<APITaskGroup[]>(
    'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'
  );

  const { normalizedProgress } = useNormalizedProgress(data);

  const handleCheckboxChange = (test: APITask, name: string) => {
    const { description, value } = test;
    setData((data) => {
      if (!data) {
        return null;
      }
      return data.map((group) => {
        if (group.name === name) {
          return {
            ...group,
            tasks: group.tasks.map((task) => {
              if (task.description === description && task.value === value) {
                return {
                  ...task,
                  checked: !task.checked,
                };
              }

              return task;
            }),
          };
        }

        return group;
      });
    });
  };

  if (error) {
    return (
      <div className="text-red-400 w-full h-full flex items-center justify-center">
        Error: {error}, please try again :(
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-grayscale500 animate-pulse">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Card>
      <div className="px-6 py-8">
        <h1 className="mb-4 text-[22px] leading-6 font-bold font-sansPro">Grouped Tasks</h1>
        <ProgressBar progress={normalizedProgress} />
      </div>
      <div className="rounded-lg border border-grayscale300 divide-y-[1px]">
        {data?.map((group) => {
          const { name, tasks } = group;
          return (
            <TaskList
              key={name}
              title={name}
              tasks={tasks.map((task) => ({
                id: task.value,
                name: task.description,
                completed: task.checked,
              }))}
              onItemClick={(task) =>
                handleCheckboxChange(
                  {
                    value: task.id,
                    description: task.name,
                    checked: task.completed,
                  },
                  group.name
                )
              }
            />
          );
        })}
      </div>
    </Card>
  );
};
