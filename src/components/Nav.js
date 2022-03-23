import "./nav.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { counterActions } from "../store/index";

function Nav(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();


  const logIn = () => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "https://www.mecallapi.com/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", JSON.stringify(response.data));
    console.log(response.data);
    dispatch(counterActions.logIn());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="navigation">
          <div>
            <h1>To Do List</h1>
          </div>
          <div className="login">
            <span>Username</span>
            <input
              type="text"
              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <span>Password</span>
            <input
              type="password"
              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />{" "}
            <button type="submit" >Log in</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Nav;
