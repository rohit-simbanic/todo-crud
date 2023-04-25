import React from "react";
import { ActionTypeEnum, ITask } from "../../Types/Types";
import TaskStyle from "./TaskList.style";
import { Checkbox, Stack } from "@fluentui/react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import { useTaskCustomContext } from "../../Context/TodoContext";

const TaskList = () => {
  const { activeTasks, dispatch } = useTaskCustomContext();
  const onTaskDelete = (id: string) => {
    if (window.confirm("Are you sure to delete")) {
      dispatch({ type: ActionTypeEnum.Delete, data: { id } });
    }
  };
  console.log(activeTasks);
  return (
    <div>
      {activeTasks.length !== 0 ? (
        activeTasks.map((item: ITask) => {
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
                  onClick={() => onTaskDelete(item.id)}
                />
              </Stack>
            </Stack>
          );
        })
      ) : (
        <div>
          <h2>No Tasks Found</h2>
        </div>
      )}
    </div>
  );
};

export default TaskList;
