import "../styles/nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="left-side">
        <img src="./react.svg" className="logo"></img>
        <p className="react-title">ReactFacts</p>
      </div>
      <div className="right-side">
        <p className="course-title">React Course - Project 1</p>
      </div>
    </nav>
  );
}

export default Nav;
