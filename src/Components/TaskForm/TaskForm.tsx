import React, { useEffect, useState } from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack, MessageBarType, MessageBar } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import useInput from "../../hooks/useInput";
import { useTaskCustomContext } from "../../Context/TodoContext";
import { ActionTypeEnum, ITask } from "../../Types/Types";
const TaskForm = () => {
  // show form success message
  const [showMsg, setShowMsg] = useState<{
    type: MessageBarType;
    message: string;
  }>({ type: MessageBarType.success, message: "" });

  const title = useInput("");
  const description = useInput("");

  const { dispatch } = useTaskCustomContext();

  console.log(title);
  console.log(description);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: ITask = {
      id: "",
      title: title.value,
      description: description.value,
      isFav: false,
    };
    dispatch({ type: ActionTypeEnum.Add, data });
    setShowMsg({ type: MessageBarType.success, message: "task added" });
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
          <PrimaryButton text="Add Task" type="submit" />
        </Stack>
      </Stack>
    </form>
  );
};

export default TaskForm;
