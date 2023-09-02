import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./navbar";
import Form from "./Form";
import Table from "./Table";

const Main = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  const onSubmit = (formData) => {
    let inputData = { ...formData };
    if (!inputData.id) {
      inputData.id = inputData.id ? inputData.id : uuidv4();

      setData([...data, inputData]);
    } else {
      let index = data.findIndex((m) => m.id === inputData.id);
      let editData = [...data];
      editData[index] = formData;
      setData(editData);
    }
  };

  const handleDelete = (item) => {
    const index = data.indexOf(item);
    const updatedData = data.filter((m) => m.id !== item.id);
    setData(updatedData);
  };

  const handleUpdate = (item) => {
    setEditData(item);
  };
  return (
    <>
      <Navbar />
      <div className="row m-2">
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <div className="card-header">Users</div>
            <div className="card-body">
              <Form onSubmit={onSubmit} editData={editData} />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="card h-100">
            <div className="card-header d-flex">
              Users Data
              <span className="ms-auto text-secondary">
                Total Users : {data.length}
              </span>
            </div>
            <div className="card-body">
              {data.length === 0 ? (
                <h1 className="text-muted text-center">Nothing To Show</h1>
              ) : (
                <Table
                  data={data}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
