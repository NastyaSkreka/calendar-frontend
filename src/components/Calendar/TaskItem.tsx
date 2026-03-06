import { memo, useState } from "react";
import type { ITask } from "../../types/task";
import { EditInput, TaskCard } from "./calendar.styles";

export const TaskItem = memo(({ task, onMove, onUpdate }: { 
  task: ITask; 
  onMove: (dragId: string, sourceDay: string, targetId?: string) => void;
  onUpdate: (id: string, title: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  if (isEditing) {
    return (
      <EditInput
        value={title}
        onChange={e => setTitle(e.target.value)}
        onBlur={() => {
          onUpdate(task.id, title);
          setIsEditing(false);
        }}
        autoFocus
      />
    );
  }

  return (
    <TaskCard
      draggable
      onDragStart={e => {
        e.dataTransfer.setData('taskId', task.id);
        e.dataTransfer.setData('taskDay', task.day);
      }}
      onDrop={e => {
        e.preventDefault();
        e.stopPropagation();
        const dragId = e.dataTransfer.getData('taskId');
        const sourceDay = e.dataTransfer.getData('taskDay');
        onMove(dragId, sourceDay, task.id);
      }}
      onDoubleClick={() => setIsEditing(true)}
    >
      {task.title}
    </TaskCard>
  );
});