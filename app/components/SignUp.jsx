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
              className="h-12 w-3/4 bg-slate-200 rounded-lg text-center"
            />
          </div>
          {/* Passwords */}
          <div className="flex flex-col w-full items-center mb-2">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              className="h-12 w-3/4 bg-cPink bg-slate-200 rounded-lg text-center"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex  flex-col w-full items-center mb-12">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
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
