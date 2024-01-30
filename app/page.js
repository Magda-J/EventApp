"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "@/apiClient";
import Dashboard from "@/app/dashboard/Dashboard";
import Login from "@/app/components/Login";

export default function Home() {
  const [token, setToken] = useState(null);
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      {token ? (
        <Dashboard client={client}/>
      ) : (
        <Login loggedIn={(token) => login(token)} client={client} />
      )}
    </>  
  );
}
