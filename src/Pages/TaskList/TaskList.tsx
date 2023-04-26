import React from "react";
import { ActionTypeEnum, ITask } from "../../Types/Types";
import TaskStyle from "./TaskList.style";
import { Checkbox, Stack, mergeStyles } from "@fluentui/react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import { useTaskCustomContext } from "../../Context/TodoContext";
import TaskDescription from "./TaskDescription";
type TaskIDProps = {
  editTask: (id: string) => void;
};

const TaskList = ({ editTask }: TaskIDProps) => {
  const { activeTasks, dispatch } = useTaskCustomContext();
  // delete function
  const onTaskDelete = (id: string) => {
    if (window.confirm("Are you sure to delete")) {
      dispatch({ type: ActionTypeEnum.Delete, data: { id } });
    }
  };
  //toggle info view function
  const onTaskFav = (id: string) => {
    dispatch({ type: ActionTypeEnum.ToggleFavorite, data: { id } });
  };

  // check box handler
  const checkBoxClickHandler = (id: string) => {
    console.log(id);
    dispatch({ type: ActionTypeEnum.Completed, data: { id } });
  };

  console.log(activeTasks);
  return (
    <div>
      {activeTasks.length !== 0 ? (
        activeTasks.map((item: ITask) => {
          return (
            <Stack key={item.id} className={TaskStyle.taskItem}>
              <Stack horizontal>
                <Checkbox onChange={() => checkBoxClickHandler(item.id)} />
                {item.title}
              </Stack>
              <Stack horizontal>
                <TaskDescription item={item} />

                <FontIcon
                  aria-label="Favorite"
                  iconName={item.isFav ? "FavoriteStarFill" : "FavoriteStar"}
                  className={
                    item.isFav
                      ? mergeStyles(TaskStyle.iconClass, { color: "blue" })
                      : TaskStyle.iconClass
                  }
                  onClick={() => onTaskFav(item.id)}
                />
                <FontIcon
                  aria-label="Edit"
                  iconName="Edit"
                  className={TaskStyle.iconClass}
                  onClick={() => editTask(item.id)}
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
