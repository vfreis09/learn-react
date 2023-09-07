//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px"></img>
        </nav>
      </header>
      <h1>Reason I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>© 2023 Fernandes development. All rights reserved.</footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
