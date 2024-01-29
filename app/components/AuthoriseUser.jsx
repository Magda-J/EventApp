"use client";

import { useState, useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const AuthoriseUser = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [authProcess, setAuthProcess] = useState(false);

  useEffect(() => {

  }, [authProcess])

  // - - Alfie Code - -
  // const submitHandler = (e) => {
  //     e.preventDefault();
  //     setDisabled(true);
  //     props.client.login(e.target.username.value, e.target.password.value).then((response) => {
  //         setDisabled(false);
  //         props.loggedIn(response.data.token)
  //     }).catch(() => {
  //         alert("an error occured.")
  //         setDisabled(false);
  //     })
  // }

  return (
    <div className="h-screen w-screen flex flex-1 justify-center items-center ">
      {!authProcess ? (
        <SignIn setAuthProcess={setAuthProcess} />
      ) : (
        <SignUp setAuthProcess={setAuthProcess} />
      )}

      {/* Alfie Code */}
      {/* login 
        <form onSubmit={submitHandler}>
            username <input type="text" name="username" disabled={disabled} />
            password <input type="password" name="password" disabled={disabled} />
            <button type="submit" disabled={disabled}>login</button>
        </form> */}
    </div>
  );
};

export default AuthoriseUser;
