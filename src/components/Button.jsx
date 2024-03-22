// Button.jsx

import { useDispatch } from "react-redux";
import style from "./Button.module.css";
import { setSelectedColor } from "../store/colorSlice";

const Button = ({ color }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Button clicked:", color);
    dispatch(setSelectedColor(color));
  };

  return (
    <div
      className={`${style.btn}`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {color}
    </div>
  );
};

export default Button;
