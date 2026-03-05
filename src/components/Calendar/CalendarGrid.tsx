import { Grid } from "./calendar.styles";
import { CalendarCell } from "./CalendarCell";

interface Props {
  days: (Date | null)[];
}

export const CalendarGrid = ({ days }: Props) => {
  return (
    <Grid>
      {days.map((day, index) => (
        <CalendarCell key={index} date={day} />
      ))}
    </Grid>
  );
};