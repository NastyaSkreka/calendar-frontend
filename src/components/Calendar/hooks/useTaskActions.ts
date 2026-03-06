import { useState } from "react";
import { useCreateTask, useDeleteTask, useUpdateTask } from "../../../api/hooks/tasks.query";

export const useTaskActions = (dayStr: string) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const createTaskMutation = useCreateTask();
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  const handleAddTask = () => {
    const title = newTaskTitle.trim();
    if (!title) return;
    createTaskMutation.mutate({ title, day: dayStr });
    setNewTaskTitle('');
  };

  return {
    newTaskTitle,
    setNewTaskTitle,
    handleAddTask,
    updateTask: (id: string, title: string) => updateTaskMutation.mutate({ id, dto: { title } }),
    deleteTask: (id: string) => deleteTaskMutation.mutate(id),
  };
};