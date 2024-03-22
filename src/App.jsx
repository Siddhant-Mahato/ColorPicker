// App.jsx

import { useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const selectedColor = useSelector((state) => state.color);

  return (
    <div>
      <div className="star" style={{ backgroundColor: selectedColor }}></div>
      <div className="btn">
        <Button color="red" />
        <Button color="blue" />
        <Button color="salmon" />
        <Button color="black" />
      </div>
    </div>
  );
}

export default App;
