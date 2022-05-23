import { createContext, useEffect, useState } from "react";

const userContext = {
  devToUsername: "alison304",
  articlesFromDevTo: [],
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [user, setUser] = useState(userContext);

  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch(
        "https://dev.to/api/articles?username=" + user.devToUsername
      );
      const articles = await response.json();
      setUser({ ...user, articlesFromDevTo: articles });
    }

    fetchDevTo();
  }, [user.devToUsername]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
