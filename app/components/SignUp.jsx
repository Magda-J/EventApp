"use client";

import { useState, useEffect } from "react";

const SignUp = ({setAuthProcess}) => {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  const handleLogin = () => {
    setAuthProcess(false);
    console.log("Sign Up");
  };

  const comparePassword = () => {

  }

  return (
    <div className="h-1/2 w-1/4 border-black border-2 border-solid rounded-lg shadow-lg">
      <form
        onSubmit={handleSignUp}
        className="flex h-full w-full gap-6 justify-center items-center"
      >
        <div className="flex w-full flex-col justify-center items-center">
          {/* Username */}
          <div className="flex flex-col w-full h-1/2 items-center">
            <label id="username">Username</label>
            <input
              type="text"
              name="username"
              className="h-12 w-3/4 bg-black rounded-lg"
            />
          </div>
          {/* Passwords */}
          <div className="flex flex-col w-full items-center mb-2">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              className="h-12 w-3/4 bg-black rounded-lg"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex  flex-col w-full items-center mb-12">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              className="h-12 w-3/4 bg-black rounded-lg"
            />
          </div>

          {/* Authorisation */}
          <div className="w-full flex items-center flex-col gap-4">
            <button className="bg-neutral-200 h-10 w-1/4 rounded-lg">
              Sign Up
            </button>
            <p onClick={handleLogin}>Login?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
