import { useMemo } from "react";
import type { IHoliday } from "../../types/holiday";
import type { ITask } from "../../types/task";
import { formatDay } from "../../utils/date";
import { Grid } from "./calendar.styles";
import { CalendarCell } from "./CalendarCell";

interface CalendarGridProps {
  days: (Date | null)[];
  tasks: ITask[];
  holidays: IHoliday[]
}

export const CalendarGrid = ({ days, tasks, holidays }: CalendarGridProps) => {

  const holidaysByDay = useMemo(() => {
    const map: Record<string, IHoliday> = {};
    holidays.forEach(h => { map[h.date] = h; });
    return map;
  }, [holidays]);


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
            holiday={holidaysByDay[dayStr]}
          />
        );
      })}
    </Grid>
  );
};