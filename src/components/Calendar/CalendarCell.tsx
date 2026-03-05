import { Cell, DayLabel } from "./calendar.styles";

interface Props {
  date: Date | null;
}

export const CalendarCell = ({ date }: Props) => {

  if (!date) {
    return <Cell />;
  }

  return (
    <Cell>
      <DayLabel>
        {date.getDate()}
      </DayLabel>
    </Cell>
  );
};