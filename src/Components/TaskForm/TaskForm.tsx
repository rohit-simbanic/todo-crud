import React, { useEffect, useState } from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack, MessageBarType, MessageBar } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import useInput from "../../hooks/useInput";
import { useTaskCustomContext } from "../../Context/TodoContext";
import { ActionTypeEnum, ITask } from "../../Types/Types";
type IdProps = {
  editTaskId: string | null;
};
const TaskForm = ({ editTaskId }: IdProps) => {
  // show form success message
  const [showMsg, setShowMsg] = useState<{
    type: MessageBarType;
    message: string;
  }>({ type: MessageBarType.success, message: "" });

  const title = useInput("");
  const description = useInput("");

  const { dispatch, activeTasks } = useTaskCustomContext();

  console.log(title);
  console.log(description);
  // show title / description on form after triggering the udpate icon
  useEffect(() => {
    let getTask;
    if (editTaskId) {
      getTask = activeTasks.find((item) => item.id === editTaskId);
      title.set(getTask?.title || "");
      description.set(getTask?.description || "");
    }
    console.log(getTask);
  }, [editTaskId]);

  // add task action function
  const addTaskAction = () => {
    const data: ITask = {
      id: "",
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: ActionTypeEnum.Add, data });
    setShowMsg({ type: MessageBarType.success, message: "Task added" });
    title.set("");
    description.set("");
  };
  // update task function call

  const updateTaskAction = () => {
    const getTask = activeTasks.find((task) => task.id === editTaskId);
    if (getTask) {
      const data: ITask = {
        id: editTaskId || "",
        title: title.value,
        description: description.value,
        isFav: getTask?.isFav || false,
      };
      dispatch({ type: ActionTypeEnum.Update, data });
      setShowMsg({ type: MessageBarType.success, message: "Task Updated" });
      title.set("");
      description.set("");
    } else {
      setShowMsg({
        type: MessageBarType.error,
        message: "Error while updating Task",
      });
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTaskId ? updateTaskAction() : addTaskAction();
  };

  // remove success notification after 1 second
  useEffect(() => {
    if (showMsg.message) {
      setTimeout(() => {
        setShowMsg({ type: MessageBarType.success, message: "" });
      }, 1000);
    }
  }, [showMsg.message]);

  return (
    <form onSubmit={onFormSubmit}>
      <Stack>
        <TextField label="Task Name" required {...title} />
        <TextField label="Description" multiline rows={4} {...description} />
      </Stack>
      <Stack
        horizontal
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Stack>
          {showMsg.message && (
            <MessageBar messageBarType={MessageBarType.success}>
              Successfully Task Added
            </MessageBar>
          )}
        </Stack>
        <Stack>
          <PrimaryButton
            text={editTaskId ? "Update Task" : "Add Task"}
            type="submit"
          />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
