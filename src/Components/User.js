import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
const User = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.user);
  const [user, setUser] = useState([]);
  const getData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data2 = await data.json();
    setUser(data2);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Name : {user.name}</h2>
      <h2>Email : {user.email}</h2>
    </div>
  );
};

export default User;
