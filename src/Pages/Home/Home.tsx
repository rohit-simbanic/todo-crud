import React, { useState } from "react";
import HomeStyle from "./Home.style";
import data from "../../data/String.json";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeysEnum } from "../../Types/Types";
import TaskList from "../TaskList/TaskList";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TaskForm from "../../Components/TaskForm/TaskForm";
initializeIcons();

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  console.log(editTaskId);
  const editTask = (id: string) => {
    setEditTaskId(id);
    setSelectedKey(PivotKeysEnum.TaskForm);
  };
  return (
    <div className={HomeStyle.todoContainer}>
      <header className={HomeStyle.headerCss}>
        <h2>{data.header}</h2>
      </header>
      <Stack className={HomeStyle.pivotContainer}>
        <Pivot
          selectedKey={String(selectedKey)}
          styles={{ root: HomeStyle.pivotRoot }}
          onLinkClick={(item?: PivotItem) => {
            if (item?.props.itemKey !== PivotKeysEnum.TaskForm) {
              setEditTaskId(null);
            }
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem
            headerText={data.pivots.tasktab}
            itemKey={PivotKeysEnum.Tasks}
          >
            <Label>Pivot #1</Label>
            <TaskList editTask={editTask} />
          </PivotItem>
          <PivotItem
            headerText={data.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <Label>Pivot #2</Label>
            <TaskForm editTaskId={editTaskId} />
          </PivotItem>
          <PivotItem
            headerText={data.pivots.completedTaskTab}
            itemKey={PivotKeysEnum.Completed}
          >
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </Stack>
    </div>
  );
};

export default Home;
