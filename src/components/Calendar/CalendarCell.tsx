import { useState } from 'react'
import {
	useCreateTask,
	useReassignTask,
	useUpdateTask,
} from '../../api/hooks/tasks.query'
import type { ITask } from '../../types/task'
import { formatDay } from '../../utils/date'
import { AddButton, AddTaskWrapper, Cell, DayLabel, EditInput, TaskCard, TaskInput } from './calendar.styles'

interface CalendarCellProps {
	date: Date | null
	tasks: ITask[]
}

export const CalendarCell = ({ date, tasks }: CalendarCellProps) => {
	if (!date) return <Cell />

	const dayStr = formatDay(date)

	const [newTaskTitle, setNewTaskTitle] = useState('')
	const [editingTaskId, setEditingTaskId] = useState<string | null>(null)
	const [editingTitle, setEditingTitle] = useState('')

	const createTaskMutation = useCreateTask()
	const updateTaskMutation = useUpdateTask()
	const reassignTaskMutation = useReassignTask()

	const handleAddTask = () => {
		const title = newTaskTitle.trim()
		if (!title) return

		createTaskMutation.mutate({ title, day: dayStr })
		setNewTaskTitle('')
	}

	const handleSaveEdit = (taskId: string) => {
		const title = editingTitle.trim()
		if (!title) return

		updateTaskMutation.mutate({
			id: taskId,
			dto: { title },
		})

		setEditingTaskId(null)
		setEditingTitle('')
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		const taskId = e.dataTransfer.getData('taskId')
		const taskDay = e.dataTransfer.getData('taskDay')

		if (!taskId) return

		if (taskDay !== dayStr) {
			reassignTaskMutation.mutate({
				id: taskId,
				newDay: dayStr,
			})
		}
	}

	return (
		<Cell onDragOver={e => e.preventDefault()} onDrop={handleDrop}>
			<DayLabel>{date.getDate()}</DayLabel>

			<AddTaskWrapper>
				<TaskInput
					value={newTaskTitle}
					onChange={e => setNewTaskTitle(e.target.value)}
					onKeyDown={e => e.key === 'Enter' && handleAddTask()}
					placeholder='New task...'
				/>
				<AddButton onClick={handleAddTask}>+</AddButton>
			</AddTaskWrapper>

			{tasks.map(task =>
				editingTaskId === task.id ? (
					<div key={task.id}>
						<EditInput
							value={editingTitle}
							onChange={e => setEditingTitle(e.target.value)}
							onBlur={() => handleSaveEdit(task.id)}
							onKeyDown={e => e.key === 'Enter' && handleSaveEdit(task.id)}
							autoFocus
						/>
					</div>
				) : (
					<TaskCard
						key={task.id}
						draggable
						onDragStart={e => {
							e.dataTransfer.setData('taskId', task.id)
							e.dataTransfer.setData('taskDay', task.day)
						}}
						onDoubleClick={() => {
							setEditingTaskId(task.id)
							setEditingTitle(task.title)
						}}
					>
						{task.title}
					</TaskCard>
				),
			)}
		</Cell>
	)
}
