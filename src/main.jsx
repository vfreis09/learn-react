//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

function Header() {
  return (
    <header>
      <nav>
        <img src="./react.svg" width="40px"></img>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reason I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return <footer>© 2023 Fernandes development. All rights reserved.</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
