interface TaskStateType {
  tasks: Array<{
    id: string | number
    title: string
    caption: string
    date: {
      date: number,
      day: number,
      h: number,
      m: number
    }
  }>
}

export const getTasks = (state: TaskStateType) => state.tasks;
export const t = "sds";