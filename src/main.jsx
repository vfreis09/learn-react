//import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";

function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img src="./react.svg" className="react-logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1 className="title">Reason I'm excited to learn React</h1>
      <ol className="list">
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2023 Fernandes development. All rights reserved.
    </footer>
  );
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
