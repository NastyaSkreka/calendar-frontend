import { useMemo, useState } from "react";
import { HiOutlineSearch } from 'react-icons/hi';
import { useTasks } from "../../api/hooks/tasks.query";
import { getCalendarDays } from "../../utils/calendar";
import { useDebounce } from "../../utils/hooks/useDebounce";
import { CalendarHeader, CalendarWrapper, DateInfo, SearchWrapper, StyledInput } from "./calendar.styles";
import { CalendarGrid } from "./CalendarGrid";

export const Calendar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 400);

  const { data: tasks = [] } = useTasks({ search: debouncedSearch });
  
  const now = useMemo(() => new Date(), []);

  const monthName = now.toLocaleString('en-US', { month: 'long' });
  const year = now.getFullYear();

 const days = useMemo(
    () => getCalendarDays(year, now.getMonth()),
    [year, now]
  );

  return (
    <CalendarWrapper>
     <CalendarHeader>
        <DateInfo>
          <h2>{monthName}</h2>
          <span>{year}</span>
        </DateInfo>

        <SearchWrapper>
          <HiOutlineSearch className="search-icon" />
          <StyledInput
            type="text" 
            placeholder="Search tasks..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchWrapper>
      </CalendarHeader>
      <CalendarGrid days={days} tasks={tasks}  />
    </CalendarWrapper>
  );
};