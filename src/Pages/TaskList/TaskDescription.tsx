import { FontIcon, TeachingBubble, mergeStyles } from "@fluentui/react";
import React from "react";
import TaskStyle from "./TaskList.style";
import { ITask } from "../../Types/Types";
import { useBoolean, useId } from "@fluentui/react-hooks";
type ItemProps = {
  item: ITask;
};
const TaskDescription = ({ item }: ItemProps) => {
  console.log(item);
  const buttonId = useId("targetButton");
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] =
    useBoolean(false);
  return (
    <>
      <FontIcon
        aria-label="Info"
        iconName="info"
        className={
          item.description
            ? TaskStyle.iconClass
            : mergeStyles(TaskStyle.iconClass, TaskStyle.disabled)
        }
        onClick={item.description ? toggleTeachingBubbleVisible : () => {}}
      />
      {teachingBubbleVisible && (
        <TeachingBubble
          target={`${buttonId}`}
          headline={item.title}
          onDismiss={toggleTeachingBubbleVisible}
        >
          {item.description}
        </TeachingBubble>
      )}
    </>
  );
};

export default TaskDescription;
