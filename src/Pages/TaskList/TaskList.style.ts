import {
  IProcessedStyleSet,
  IStyle,
  mergeStyleSets,
} from "@fluentui/merge-styles";
interface ITaskListStyle {
  taskItem: IStyle;
  iconClass: IStyle;
  disabled: IStyle;
}
const TaskStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
  taskItem: {
    maxHeight: 50,
    minHeight: 30,
    padding: 10,
    width: "100%",
    backgroundColor: "lavender",
    selectors: {
      "&:hover": { background: "rgb(243, 242, 241)" },
    },
    margin: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  iconClass: {
    fontSize: 20,
    margin: "0 3px",
    selectors: {
      "&:hover": { cursor: "pointer" },
    },
  },
  disabled: {
    color: "gray",
    selectors: {
      "&:hover": { cursor: "default" },
    },
  },
});

export default TaskStyle;
