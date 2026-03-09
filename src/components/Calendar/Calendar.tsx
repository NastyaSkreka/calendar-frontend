import { useMemo, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiOutlineSearch } from 'react-icons/hi'
import { useHolidays } from '../../api/hooks/holiday.query'
import { useTasks } from '../../api/hooks/tasks.query'
import { getCalendarDays } from '../../utils/calendar'
import { getRangeForMonth } from '../../utils/date'
import { useDebounce } from '../../utils/hooks/useDebounce'
import {
  CalendarHeader,
  CalendarWrapper,
  DateInfo,
  DateNavigation,
  NavButton,
  SearchWrapper,
  StyledInput,
} from './calendar.styles'
import { CalendarGrid } from './CalendarGrid'

export const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date())
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 400)

	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()

	const { data: holidays = [] } = useHolidays(year, 'UA')

	const { data: tasks = [] } = useTasks({
		search: debouncedSearch,
		...getRangeForMonth(year, month),
	})

	const days = useMemo(() => getCalendarDays(year, month), [year, month])
	const monthName = currentDate.toLocaleString('en-US', { month: 'long' })

	const nextMonth = () => setCurrentDate(new Date(year, month + 1))
	const prevMonth = () => setCurrentDate(new Date(year, month - 1))

	return (
		<CalendarWrapper>
			<CalendarHeader>
				<DateNavigation>
					<DateInfo>
						<h2>{monthName}</h2>
						<span>{year}</span>
					</DateInfo>

					<div style={{ display: 'flex', gap: '8px' }}>
						<NavButton onClick={prevMonth} aria-label='Previous month'>
							<HiChevronLeft />
						</NavButton>
						<NavButton onClick={nextMonth} aria-label='Next month'>
							<HiChevronRight />
						</NavButton>
					</div>
				</DateNavigation>
				<SearchWrapper>
					<HiOutlineSearch className='search-icon' />
					<StyledInput
						type='text'
						placeholder='Search tasks...'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
					/>
				</SearchWrapper>
			</CalendarHeader>

			<CalendarGrid days={days} tasks={tasks} holidays={holidays} />
		</CalendarWrapper>
	)
}
