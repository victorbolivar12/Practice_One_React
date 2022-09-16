import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Spinner from "react-bootstrap/Spinner";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter users
  const result = !search ? users: users.filter((item) =>item.name.toLowerCase().startsWith(search.toLowerCase()));

  if (loading) {
    return (
      <div className="sniperContainer">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <div className="containerCard">
        <input
          className="input"
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleChange}
        />
        {result.map((user) => {
          return <Card element={user} />;
        })}
      </div>
    </>
  );
}

export default Users;
