import type { ICreateTask, ITask, IUpdateTask } from '../../types/task';
import { axiosClassic } from '../client';

class TasksService {
	private BASE_URL = 'tasks'

	async getTasks(params?: { from?: string; to?: string; search?: string }) {
		const response = await axiosClassic.get<ITask[]>(this.BASE_URL, {
			params,
		})

		return response.data
	}

	async create(dto: ICreateTask) {
		const response = await axiosClassic.post<ITask>(this.BASE_URL, dto)

		return response.data
	}

	async update(id: string, dto: IUpdateTask) {
		const response = await axiosClassic.patch<ITask>(
			`${this.BASE_URL}/${id}`,
			dto,
		)

		return response.data
	}

	async delete(id: string) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)

		return response.data
	}

	async reorder(day: string, orderedIds: string[]) {
		const response = await axiosClassic.patch(`${this.BASE_URL}/reorder`, {
			day,
			orderedIds,
		})

		return response.data
	}
}

export const tasksService = new TasksService()
