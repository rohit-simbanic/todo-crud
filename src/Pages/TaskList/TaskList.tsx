import React from "react";
import { ITask } from "../../Types/Types";
import TaskStyle from "./TaskList.style";
import { Checkbox } from "@fluentui/react";

const TaskList = () => {
  const tasks = [
    {
      id: "1",
      title: "Task 1",
    },
    {
      id: "2",
      title: "Task 2",
    },
    {
      id: "3",
      title: "Task 3",
    },
  ];
  return (
    <div>
      {tasks.map((item: ITask) => {
        return (
          <div key={item.id} className={TaskStyle.taskItem}>
            <Checkbox label={item.title} disabled />
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
