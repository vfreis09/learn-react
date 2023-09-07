//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

function Page() {
  return (
    <div>
      <ol>
        <li>React is a hireable skill</li>
        <li>I like coding frontend</li>
        <li>I want to become a full stack dev</li>
      </ol>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
