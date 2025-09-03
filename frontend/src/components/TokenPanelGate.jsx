import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import QueryPanel from "./QueryPanel"; // adjust path if needed

// Define your allowed tokens (keep in sync with backend for UX)
const allowedTokens = [
  "Super-token-739",
  "Normal-token-139",
  "Middle-token-239",
  "Low-token-339"
];

const TokenPanelGate = () => {
  const { token } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!token) return <Navigate to="/not-found" />;

  if (!allowedTokens.includes(token)) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-indigo-50">
        <p className="text-2xl font-bold mb-4 text-red-600">Invalid or Missing Token</p>
        <p className="mb-4">Please check your link or contact support.</p>
      </div>
    );
  }

  // Store token for later API request authorization
  localStorage.setItem("employee_token", token);

  return <QueryPanel employeeToken={token} />;
};

export default TokenPanelGate;
