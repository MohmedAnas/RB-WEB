import { createContext, useContext, useState, useMemo } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("employee_token") || "");

  // Memoize the context value object:
  const value = useMemo(() => ({ token, setToken }), [token, setToken]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Usage in components:
export const useAuth = () => useContext(AuthContext);
