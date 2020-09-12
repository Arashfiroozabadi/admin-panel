
export enum TaskActionType {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  DELETE_TASK = "DELETE_TASK"
}

export interface ADD extends TaskBaseAction {
  type: TaskActionType.ADD_NEW_TASK
  payload: TaskStateType
}
export interface DELETE {
  type: TaskActionType.DELETE_TASK
}
interface TaskBaseAction {
  type: TaskActionType
}

export type TaskActions = ADD | DELETE

export interface TaskStateType {
  id: string | number
  title: string
  caption: string
  date?: {
    date: number | null,
    day: number | null,
    h: number | null,
    m: number | null
  }
}

const initialState: TaskStateType[] = [
  {
    id: 1,
    title: "salam",
    caption: "world",
    date: {
      date: 10,
      day: 20,
      h: 15,
      m: 2
    }
  },
  {
    id: 2,
    title: "hello",
    caption: "koaja",
    date: {
      date: 10,
      day: 20,
      h: 15,
      m: 2
    }
  },
  {
    id: 3,
    title: "nakhir",
    caption: "world",
    date: {
      date: 10,
      day: 20,
      h: 15,
      m: 2
    }
  },
  {
    id: 4,
    title: "biya",
    caption: "world",
    date: {
      date: 10,
      day: 20,
      h: 15,
      m: 2
    }
  },
  {
    id: 5,
    title: "naro",
    caption: "world",
    date: {
      date: 10,
      day: 20,
      h: 15,
      m: 2
    }
  }
];

const t = {
  id: 4,
  title: "cheragh",
  caption: "world",
  date: {
    date: 10,
    day: 20,
    h: 15,
    m: 2
  }
};
export default (state = initialState, action: TaskActions) => {
  switch (action.type) {
    case TaskActionType.ADD_NEW_TASK:
      return [...state, action.payload];
    case TaskActionType.DELETE_TASK:
      return [...state, t];
    default:
      return state;
  }
};