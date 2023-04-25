import React, { useState } from "react";
import HomeStyle from "./Home.style";
import data from "../../data/String.json";
import { Label, Pivot, PivotItem, Stack } from "@fluentui/react";
import { PivotKeysEnum } from "../../Types/Types";
import TaskList from "../TaskList/TaskList";

const Home = () => {
  const [selectedKey, setSelectedKey] = useState<string>(PivotKeysEnum.Tasks);
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
            setSelectedKey(item?.props.itemKey || PivotKeysEnum.Tasks);
          }}
        >
          <PivotItem
            headerText={data.pivots.tasktab}
            itemKey={PivotKeysEnum.Tasks}
          >
            <Label>Pivot #1</Label>
            <TaskList />
          </PivotItem>
          <PivotItem
            headerText={data.pivots.taskFormTab}
            itemKey={PivotKeysEnum.TaskForm}
          >
            <Label>Pivot #2</Label>
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
