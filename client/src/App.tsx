import { useState } from "react";
import "./App.css";
import axios from "axios";

const apiCall = () => {
  axios.get("/api").then((data) => {
    //this console.log will be in our frontend console
    console.log(data);
  });
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Express + Typescript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={apiCall}>call backend</button>
        <p>{__APP_MODE__}</p>
      </div>
    </>
  );
}

export default App;
