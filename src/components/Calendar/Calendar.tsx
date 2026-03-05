
import { getCalendarDays } from "../../utils/calendar";
import { CalendarWrapper } from "./calendar.styles";
import { CalendarGrid } from "./CalendarGrid";


export const Calendar = () => {

  const now = new Date();

  const days = getCalendarDays(
    now.getFullYear(),
    now.getMonth()
  );

  return (
    <CalendarWrapper>
      <CalendarGrid days={days} />
    </CalendarWrapper>
  );
};