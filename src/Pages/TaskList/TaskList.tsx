import React from "react";
import { ITask } from "../../Types/Types";
import TaskStyle from "./TaskList.style";
import { Checkbox, Stack } from "@fluentui/react";
import { FontIcon } from "@fluentui/react/lib/Icon";

const TaskList = () => {
  const tasks = [
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
  ];
  return (
    <div>
      {tasks.map((item: ITask) => {
        return (
          <Stack key={item.id} className={TaskStyle.taskItem}>
            <Stack horizontal>
              <Checkbox />
              {item.title}
            </Stack>
            <Stack horizontal>
              <FontIcon
                aria-label="Info"
                iconName="info"
                className={TaskStyle.iconClass}
              />
              <FontIcon
                aria-label="Favorite"
                iconName={item.isFav ? "FavoriteStarFill" : "FavoriteStar"}
                className={TaskStyle.iconClass}
              />
              <FontIcon
                aria-label="Edit"
                iconName="Edit"
                className={TaskStyle.iconClass}
              />
              <FontIcon
                aria-label="Delete"
                iconName="Delete"
                className={TaskStyle.iconClass}
              />
            </Stack>
          </Stack>
        );
      })}
    </div>
  );
};

export default TaskList;
