import { createContext, useContext, useReducer } from "react";
import {
  ActionTypeEnum,
  IAddAction,
  IReducerAction,
  ITask,
  ITodoContext,
  ITodoState,
} from "../Types/Types";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext<ITodoContext>({
  activeTasks: [],
  dispatch: () => {},
});
export type TaskProviderProps = {
  children: React.ReactNode;
};
// reducer
const reducer = (state: ITodoState, action: IReducerAction) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case ActionTypeEnum.Add:
      const { data } = action;
      data.id = uuidv4();
      return { ...state, activeTasks: [action.data, ...state.activeTasks] };

    case ActionTypeEnum.Delete:
      const activeTasks = state.activeTasks;
      // console.log(activeTasks);
      const filteredTask = activeTasks.filter(
        (item) => item.id !== action.data.id
      );
      return { ...state, activeTasks: filteredTask };
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
  const data = { activeTasks: tasks };
  const [state, dispatch] = useReducer(reducer, data);
  console.log(state);
  return (
    <TodoContext.Provider value={{ activeTasks: state.activeTasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
// custom hook

const useTaskCustomContext = () => {
  return useContext(TodoContext);
};

export { TodoContext, AppProvider, useTaskCustomContext };
