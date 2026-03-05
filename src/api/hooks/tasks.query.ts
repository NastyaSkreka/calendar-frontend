import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type { ICreateTask, IUpdateTask } from '../../types/task'
import { tasksService } from '../services/tasks.service'

const queryKeys = {
	tasks: 'tasks',
}

export function useTasks(params?: {
	from?: string
	to?: string
	search?: string
}) {
	return useQuery({
		queryKey: [queryKeys.tasks, params],
		queryFn: () => tasksService.getTasks(params),
	})
}

export function useCreateTask() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (dto: ICreateTask) => tasksService.create(dto),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [queryKeys.tasks],
			})
		},
	})
}

export function useUpdateTask() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, dto }: { id: string; dto: IUpdateTask }) =>
			tasksService.update(id, dto),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [queryKeys.tasks],
			})
		},
	})
}

export function useDeleteTask() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => tasksService.delete(id),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [queryKeys.tasks],
			})
		},
	})
}

export function useReorderTasks() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ day, orderedIds }: { day: string; orderedIds: string[] }) =>
			tasksService.reorder(day, orderedIds),

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [queryKeys.tasks],
			})
		},
	})
}
