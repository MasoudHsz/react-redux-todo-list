import Nav from "./components/Nav";
import TasksBox from "./components/TasksBox";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="App">
        <Nav />
        <TasksBox />
      </div>
    );
  } else {
    return (
      <>
        <Nav />{" "}
        <div className="welcome">
          <h1 className="welcome-text">
            Welcome to My React-Redux To Do List{" "}
          </h1>
          <p>I'm using a third party api for log in</p>
          <p>
            Your Test Usrname is: <strong>karn.yong@mecallapi.com</strong>
          </p>
          <p>
            Your Test Password is: <strong>mecallapi</strong>
          </p>
        </div>
      </>
    );
  }
}

export default App;
