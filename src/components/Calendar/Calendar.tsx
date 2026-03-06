import { useMemo } from "react";
import { useTasks } from "../../api/hooks/tasks.query";
import { getCalendarDays } from "../../utils/calendar";
import { CalendarWrapper } from "./calendar.styles";
import { CalendarGrid } from "./CalendarGrid";


export const Calendar = () => {
  const { data: tasks = [] } = useTasks(); 

  const now = new Date();

  const days = useMemo(
    () => getCalendarDays(now.getFullYear(), now.getMonth()),
    [now]
  );

  return (
    <CalendarWrapper>
      <CalendarGrid days={days} tasks={tasks}  />
    </CalendarWrapper>
  );
};