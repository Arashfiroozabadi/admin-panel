import { TaskActions, TaskActionType, TaskStateType } from "./reducer";

const addTask = (payload: TaskStateType): TaskActions => {
  return {
    type: TaskActionType.ADD_NEW_TASK,
    payload: payload
  };
};

const deleteTask = (id: string | number) => {
  return {
    type: TaskActionType.DELETE_TASK,
    id
  };
};
export default {
  addTask,
  deleteTask
};