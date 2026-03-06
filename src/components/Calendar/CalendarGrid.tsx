import { useMemo } from "react";
import type { ITask } from "../../types/task";
import { formatDay } from "../../utils/date";
import { Grid } from "./calendar.styles";
import { CalendarCell } from "./CalendarCell";

interface CalendarGridProps {
  days: (Date | null)[];
  tasks: ITask[];
}

export const CalendarGrid = ({ days, tasks }: CalendarGridProps) => {

  const tasksByDay = useMemo(() => {
    const map: Record<string, ITask[]> = {};

    for (const task of tasks) {
      if (!map[task.day]) {
        map[task.day] = [];
      }
      map[task.day].push(task);
    }

    return map;
  }, [tasks]);

  return (
    <Grid>
      {days.map((day, index) => {
        const key = day ? day.toISOString() : `empty-${index}`;
        const dayStr = day ? formatDay(day) : '';

        return (
          <CalendarCell
            key={key}
            date={day}
            tasks={dayStr ? tasksByDay[dayStr] ?? [] : []}
          />
        );
      })}
    </Grid>
  );
};