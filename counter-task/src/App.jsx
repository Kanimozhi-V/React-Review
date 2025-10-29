import { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(localStorage.getItem("Count") ? localStorage.getItem("Count") : 0);
  }, []);
  return (
    <div className="App">
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          localStorage.setItem("Count", count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          count > 0 ? setCount(count - 1) : 0;
          localStorage.setItem("Count", count > 0 ? count - 1 : 0);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count + 5);
          localStorage.setItem("Count", count + 5);
        }}
      >
        Add 5
      </button>
      <button
        onClick={() => {
          setCount(0);
          localStorage.setItem("Count", 0);
        }}
      >
        Reset
      </button>
    </div>
  );
}