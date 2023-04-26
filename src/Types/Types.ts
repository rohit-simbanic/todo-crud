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
  completedTasks: ITask[];
  dispatch: Dispatch<any>;
}

export interface ITodoState {
  activeTasks: ITask[];
  completedTasks: ITask[];
}

export enum ActionTypeEnum {
  Add = "add",
  Delete = "delete",
  ToggleFavorite = "favorite",
  Update = "update",
  Completed = "complete",
}

export interface IAddAction {
  type: ActionTypeEnum.Add;
  data: ITask;
}
export interface IDeleteAction {
  type: ActionTypeEnum.Delete;
  data: { id: string };
}

export interface IToggleFavorite {
  type: ActionTypeEnum.ToggleFavorite;
  data: { id: string };
}
export interface IUpdateAction {
  type: ActionTypeEnum.Update;
  data: ITask;
}
export interface ICompletedAction {
  type: ActionTypeEnum.Completed;
  data: { id: string };
}

export type IReducerAction =
  | IAddAction
  | IDeleteAction
  | IToggleFavorite
  | IUpdateAction
  | ICompletedAction;
