import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  admin: () => {}
});
export { AuthContext };
