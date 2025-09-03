import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Define your allowed tokens (keep in sync with backend for UX)
const allowedTokens = [
  "Super-token-739",
  "Normal-token-139",
  "Middle-token-239",
  "Low-token-339"
];

export default function AdminLogin() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!token) return setError("Please enter the access token.");
    // Optional: frontend check for instant feedback (always also check on backend!)
    if (!allowedTokens.includes(token)) {
      setError("Invalid token.");
      return;
    }
    localStorage.setItem("employee_token", token);
    navigate("/querypanel");
  }

  return (
    <div className="max-w-sm mx-auto mt-24 p-8 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Admin Access</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter Secret Token"
          value={token}
          onChange={e => {
            setToken(e.target.value);
            setError("");
          }}
          className="border rounded p-2 w-full"
        />
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded" type="submit">
          Enter Admin Panel
        </button>
      </form>
    </div>
  );
}