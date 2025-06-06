import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export interface IArrowIconProps {
  direction: "up" | "down";
}

export default function ArrowIcon(props: IArrowIconProps) {
  const isUp = props.direction === "up";
  const Icon = isUp ? ArrowDropUpIcon : ArrowDropDownIcon;
  return (
    <Icon
      sx={{
        position: "absolute",
        [isUp ? "bottom" : "top"]: -15,
        fontSize: 40,
        color: "white",
        left: "50%",
        transform: "translateX(-50%)",
        lineHeight: 1,
      }}
    />
  );
}
