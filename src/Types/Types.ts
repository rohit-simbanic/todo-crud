import React, { Dispatch } from "react";
export enum PivotKeysEnum {
  Tasks = "Tasks",
  TaskForm = "TaskForm",
  Completed = "CompletedTasks",
}
export type ITaskDispatch = {
  dispatch: Dispatch<any>;
};
export interface ITask {
  id: string;
  title: string;
  description?: string;
  isFav: boolean;
}

export interface ITodoContext {
  activeTasks: ITask[];
  dispatch: Dispatch<any>;
}

export interface ITodoState {
  activeTasks: ITask[];
}

export enum ActionTypeEnum {
  Add = "add",
  Delete = "delete",
}

export interface IAddAction {
  type: ActionTypeEnum.Add;
  data: ITask;
}
export interface IDeleteAction {
  type: ActionTypeEnum.Delete;
  data: { id: string };
}

export type IReducerAction = IAddAction | IDeleteAction;
