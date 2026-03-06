import { useCallback } from "react";
import { useReorderTasks } from "../../../api/hooks/tasks.query";
import type { ITask } from "../../../types/task";

export const useTaskDnD = (tasks: ITask[], dayStr: string) => {
  const { mutate: reorderTasks } = useReorderTasks();

  const handleMove = useCallback((dragId: string, sourceDay: string, targetId?: string) => {
    if (!dragId) return;

    const currentIds = tasks.map((t) => t.id);
    let newOrderedIds: string[] = [];

    if (sourceDay === dayStr) {
      const draggedIndex = currentIds.indexOf(dragId);
      const targetIndex = targetId ? currentIds.indexOf(targetId) : currentIds.length;
      
      if (draggedIndex === targetIndex) return;

      newOrderedIds = [...currentIds];
      const [moved] = newOrderedIds.splice(draggedIndex, 1);
      const finalIndex = targetId ? newOrderedIds.indexOf(targetId) : newOrderedIds.length;
      newOrderedIds.splice(finalIndex, 0, moved);
    } else {
      newOrderedIds = [...currentIds];
      if (targetId) {
        const targetIndex = currentIds.indexOf(targetId);
        newOrderedIds.splice(targetIndex, 0, dragId);
      } else {
        newOrderedIds.push(dragId);
      }
    }

    reorderTasks({ day: dayStr, orderedIds: newOrderedIds });
  }, [tasks, dayStr, reorderTasks]);

  return { handleMove };
};