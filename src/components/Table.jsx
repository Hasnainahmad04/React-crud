import React from "react";

const Table = (props) => {
  const { data, onUpdate, onDelete } = props;

  return (
    <div className="table-responsive">
      <table className="table">
        <caption>List of Users</caption>

        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => onUpdate(item)}
                  >
                    <i className="fa-solid fa-user-pen"></i>
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => onDelete(item)}
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
