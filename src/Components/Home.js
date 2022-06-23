import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Actions } from "../Actions/Actions";
const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const loader = useSelector((state) => state.loader);
  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const data2 = await data.json();
    // console.log(data2);
    dispatch(Actions(data2));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <Link to={`user/${user.id}`}> {user.name}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Home;
