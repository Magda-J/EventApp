"use client";

import { useState, useEffect } from "react";

const SignIn = ({setAuthProcess, submitHandler}) => {
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log("Signing in user")
      await submitHandler(e);

    } catch (error) {
      console.error(error);
      console.error("Failure signing in user");
    }
  };

  const handleSignUp = () => {
    setAuthProcess(true);
    console.log("Sign Up");
  };

  return (
    <div className="h-1/2 w-1/4 border-black border-4 border-solid border-cPink rounded-lg shadow-lg bg-cVanilla">
      <form
        onSubmit={handleLogin}
        className="flex h-full w-full gap-6 justify-center items-center"
      >
        <div className="flex w-full flex-col justify-center items-center">
          {/* Username */}
          <div className="flex flex-col w-full h-1/2 items-center p-2 ">
            <label for="username" className="font-semibold">Username</label>
            <input
              type="text"
              name="username"
              className="h-12 w-3/4 bg-slate-200 text-center rounded-lg"
            />
          </div>
          {/* Passwords */}
          <div className="flex  flex-col gap-4x w-full items-center mb-12 ">
            <label for="password" className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="h-12 w-3/4 bg-slate-200 text-center rounded-lg"
            />
          </div>

          {/* Authorisation */}
          <div className="w-full flex items-center flex-col gap-4">
            <button className="bg-cCerulean font-semibold h-10 w-1/4 hover:bg-cPink rounded-lg">
              Login
            </button>
            <p className="font-semibold hover:text-cCerulean" onClick={handleSignUp}>Sign Up?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
