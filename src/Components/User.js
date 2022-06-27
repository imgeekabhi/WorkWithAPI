import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
const User = () => {
  const { id } = useParams();
  const userData = useSelector((state) => state.user);
  const eachUserData = userData.find((user) => user.id === +id);
  if (!eachUserData) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <div>
      <h2>Name : {eachUserData.name}</h2>
      <h2>Email : {eachUserData.email}</h2>
      <h2>Phone : {eachUserData.phone}</h2>
    </div>
  );
};

export default User;
