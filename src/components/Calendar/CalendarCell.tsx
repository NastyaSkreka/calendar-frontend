import type { IHoliday } from '../../types/holiday'
import type { ITask } from '../../types/task'
import { formatDay } from '../../utils/date'
import {
	AddButton,
	AddTaskWrapper,
	Cell,
	DayLabel,
	HolidayLabel,
	TaskInput,
} from './calendar.styles'
import { useTaskActions } from './hooks/useTaskActions'
import { useTaskDnD } from './hooks/useTaskDnD'
import { TaskItem } from './TaskItem'


interface CalendarCellProps {
	date: Date | null
	tasks: ITask[]
	holiday: IHoliday
}

export const CalendarCell = ({ date, tasks, holiday }: CalendarCellProps) => {
	const dayStr = date ? formatDay(date) : ''
    
	const { handleMove } = useTaskDnD(tasks, dayStr)
	const { newTaskTitle, setNewTaskTitle, handleAddTask, updateTask } =
		useTaskActions(dayStr)

	if (!date) {
		return <Cell />
	}

	const onDropOnCell = (e: React.DragEvent) => {
		const dragId = e.dataTransfer.getData('taskId')
		const sourceDay = e.dataTransfer.getData('taskDay')
		handleMove(dragId, sourceDay)
	}

	return (
		<Cell onDragOver={e => e.preventDefault()} onDrop={onDropOnCell}>
			<DayLabel>{date.getDate()}</DayLabel>
			{holiday && (
				<HolidayLabel title={holiday.name}>{holiday.name}</HolidayLabel>
			)}
			<AddTaskWrapper>
				<TaskInput
					value={newTaskTitle}
					onChange={e => setNewTaskTitle(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && handleAddTask()}
					placeholder='New task...'
				/>
				<AddButton onClick={handleAddTask}>+</AddButton>
			</AddTaskWrapper>

			{tasks.map(task => (
				<TaskItem
					key={task.id}
					task={task}
					onMove={handleMove}
					onUpdate={updateTask}
				/>
			))}
		</Cell>
	)
}
