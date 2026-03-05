export interface ITask {
  id: string;
  title: string;
  day: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateTask {
  title: string;
  day: string;
}

export interface IUpdateTask {
  title?: string;
  day?: string;
  order?: number;
}