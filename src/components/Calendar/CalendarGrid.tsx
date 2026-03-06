import { useMemo } from "react";
import type { ITask } from "../../types/task";
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
      {days.map((day) => {
        const key = day ? day.toISOString() : Math.random();

        const dayStr =
          day &&
          `${day.getFullYear()}-${(day.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;

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