import { createContext, useContext, useReducer } from "react";
import {
  ActionTypeEnum,
  IReducerAction,
  ITask,
  ITodoContext,
  ITodoState,
} from "../Types/Types";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext<ITodoContext>({
  activeTasks: [],
  completedTasks: [],
  dispatch: () => {},
});
export type TaskProviderProps = {
  children: React.ReactNode;
};
// reducer
const reducer = (state: ITodoState, action: IReducerAction) => {
  // console.log(state);
  console.log(action);
  let activeTasks: ITask[];
  let index;
  switch (action.type) {
    case ActionTypeEnum.Add:
      const { data } = action;
      data.id = uuidv4();
      return { ...state, activeTasks: [action.data, ...state.activeTasks] };

    case ActionTypeEnum.Delete:
      activeTasks = state.activeTasks;
      // console.log(activeTasks);
      const filteredTask = activeTasks.filter(
        (item) => item.id !== action.data.id
      );
      return { ...state, activeTasks: filteredTask };
    case ActionTypeEnum.ToggleFavorite:
      activeTasks = state.activeTasks;
      // console.log(activeTasks);
      index = activeTasks.findIndex((x) => x.id === action.data.id);
      // console.log(index);
      if (index >= 0) {
        activeTasks[index].isFav = !activeTasks[index].isFav;
      }
      return { activeTasks };
    case ActionTypeEnum.Update:
      activeTasks = state.activeTasks;
      // console.log(activeTasks);
      index = activeTasks.findIndex((x) => x.id === action.data.id);
      console.log(index);
      if (index >= 0) {
        activeTasks[index] = action.data;
      }
      console.log(activeTasks);
      return { activeTasks };
    case ActionTypeEnum.Completed:
      activeTasks = state.activeTasks;
      // console.log(activeTasks);
      const completedTask = activeTasks.find(
        (task) => task.id === action.data.id
      );
      const remainingTask = activeTasks.filter(
        (item) => item.id !== action.data.id
      );
      return {
        activeTasks: remainingTask,
        completedTasks: [completedTask, ...state.completedTasks],
      };
  }
  return { ...state };
};

const AppProvider = ({ children }: TaskProviderProps) => {
  const tasks: ITask[] = [
    {
      id: "1",
      title: "Task 1",
      isFav: false,
    },
    {
      id: "2",
      title: "Task 2",
      isFav: false,
    },
    {
      id: "3",
      title: "Task 3",
      isFav: true,
    },
    {
      id: "4",
      title: "Task 4",
      isFav: false,
    },
  ];
  const data: ITodoState = { activeTasks: tasks, completedTasks: [] };
  const [state, dispatch] = useReducer(reducer, data);
  console.log(state);
  return (
    <TodoContext.Provider
      value={{ activeTasks: state.activeTasks, completedTasks: [], dispatch }}
    >
      {children}
    </TodoContext.Provider>
  );
};
// custom hook

const useTaskCustomContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, AppProvider, useTaskCustomContext };
