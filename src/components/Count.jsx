/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Count.css";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This should run once");
  }, [1]);

  return (
    <div className="count">
      <p>Count : {count}</p>

      <div className="count-buttons">
        <button className="button" onClick={() => setCount((prev) => prev + 1)}>
          Add
        </button>
        <button
          className="button"
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count < 1}
        >
          Reduce
        </button>
      </div>
    </div>
  );
};

export default Count;
