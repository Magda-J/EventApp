"use client";

import { useState, useEffect } from "react";

const SignUp = ({submitHandler, setAuthProcess, client}) => {
  const [userObject, setuserObject] = useState({username:"", password:"", password2:""})
  const checkPassword = () => {
        const isRight = /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,20}$/g.test(userObject.password);
        console.log("checked")
        return isRight ? true : false 
      }
  const comparePassword = () => {
    console.log(`Password1: ${userObject.password} and Password2: ${userObject.password2}`);
    
    if(userObject.password === userObject.password2) {
      return checkPassword();
    }

    return false;
  }

  const handleInputChange = (event) => {
    setuserObject({
    ...userObject,
    [event.target.name]: event.target.value
  })
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    let userExists;

    try {
      console.log("Before checking user")
      console.log(userObject)
      userExists = await client.checkUsername(userObject);
      console.log(userExists.data)

      if (userExists.data == true) {
        console.log("Username already exists")
      } else {
        console.log("Username is free")
      }
    } catch (error) {
      console.log(error);
      console.log("Error making request");
    }
    
    if(userExists.data == false)
    {
      const isPassword = comparePassword();
      console.log(`Password Check: ${isPassword}`);

      if (isPassword) {
        // Sign up user
        try {
          await client.signUp(userObject.username, userObject.password);
          let userObject2 = {username : userObject.username, password: userObject.password}
          await submitHandler(userObject2);
          return;
        } catch (err) {
          console.error(err);
          console.log("Something went wrong with signup and signing in user")
        }
      } else {
        console.log(`Password: ${userObject.password} and Password2: ${userObject.password2}`)
        console.log("Something went wrong SIGN UP!");
        console.log("Password is wrong")
        return;
      } 
    }

    console.log("DIDN'T DO ANYTHING WITH DATABASE")
  };

  const handleLogin = () => {
    setAuthProcess(false);
    console.log("Sign Up");
  };


  return (
    <div id="signUp" className="h-1/2 w-1/4 border-black border-4 border-solid rounded-lg shadow-lg">
      <form
        onSubmit={handleSignUp}
        className="flex h-full w-full gap-6 justify-center items-center font-semibold"
      >
        <div className="flex w-full flex-col justify-center items-center">
          {/* Username */}
          <div className="flex flex-col w-full h-1/2 items-center">
            <label id="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleInputChange}
              value={userObject.name}
              className="h-12 w-3/4 bg-slate-200 rounded-lg text-center"
            />
          </div>
          {/* Passwords */}
          <div className="flex flex-col w-full items-center mb-2">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={userObject.password}
              className="h-12 w-3/4 bg-cPink bg-slate-200 rounded-lg text-center"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex  flex-col w-full items-center mb-12">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name="password2"
              onChange={handleInputChange}
              value={userObject.password2}
              className="h-12 w-3/4 bg-cPink bg-slate-200 rounded-lg text-center"
            />
          </div>

          {/* Authorisation */}
          <div className="w-full flex items-center flex-col gap-4">
            <button className="font-semibold bg-cCerulean hover:bg-cPink h-10 w-1/4 rounded-lg">
              Sign Up
            </button>
            <p className="font-semibold hover:text-cCerulean" onClick={handleLogin}>Login?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
