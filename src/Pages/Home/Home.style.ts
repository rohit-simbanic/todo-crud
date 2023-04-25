import {
  IProcessedStyleSet,
  IStyle,
  mergeStyleSets,
} from "@fluentui/merge-styles";
interface IHomeStyle {
  todoContainer: IStyle;
  headerCss: IStyle;
  pivotRoot: IStyle;
  pivotContainer: IStyle;
}
const HomeStyle: IProcessedStyleSet<IHomeStyle> = mergeStyleSets({
  todoContainer: {
    width: "50%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  headerCss: {
    height: 80,
    backgroundColor: "cadetblue",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    color: "white",
  },
  pivotRoot: {
    display: "flex",
    justifyContent: "center",
  },
  pivotContainer: {
    margin: 20,
  },
});

export default HomeStyle;
