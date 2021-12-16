import React from "react";
import { Card } from "antd";

const UserList = ({ user }) => {
  const style = { color: "black" };
  return (
    <div className="card">
      <Card title={`Fugitive N° ${user.id}`} style={{ width: 500 }}>
        <h4>
          <span style={style}>Name :</span> {user.name}
        </h4>
        <h5>
          <span style={style}>Alias :</span> {user.username}
        </h5>
        <h5>
          <span style={style}>Address :</span> {user.address.street},{" "}
          {user.address.suite}, {user.address.city}{" "}
        </h5>
        <p>
          <span style={style}>Current Location :</span> {user.address.geo.lat},{" "}
          {user.address.geo.lat}{" "}
        </p>
        <h4>
          <span style={style}>Zip Code:</span>, {user.address.zipcode}{" "}
        </h4>
      </Card>
    </div>
  );
};

export default UserList;
