import { useMemo } from 'react';
import { APITaskGroup } from '../../components/TasksGroup/TasksGroup';

export const useNormalizedProgress = (data: APITaskGroup[] | null) => {
  const normalizedProgress = useMemo(() => {
    if (!data) {
      return 0;
    }

    const sumOfValues = data
      .flatMap((group) => group.tasks)
      .reduce((acc, task) => acc + task.value, 0);

    const sumOfCheckedValues = data
      .flatMap((group) => group.tasks)
      .filter((task) => task.checked)
      .reduce((acc, task) => acc + task.value, 0);

    const progress = sumOfValues !== 0 ? Math.round((sumOfCheckedValues * 100) / sumOfValues) : 0;

    return progress;
  }, [data]);

  return { normalizedProgress };
};
