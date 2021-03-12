import React, { useEffect, useState } from "react";
import Card from '../../'

const Dashboard = () => {
  // const [user, setUser] = useState({});
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  getCurrentUser();
  console.log(getCurrentUser());
  let user = getCurrentUser();
  console.log(user);

  // useEffect(setUser(getCurrentUser()), []);

  return (
    <div>
      <h1>{user.msg}</h1>
      <h2>{user.userName}</h2>
      <h3>{user.userId}</h3>
      {/* <h4>{user.token}</h4> */}
    </div>
  );
};

export default Dashboard;
