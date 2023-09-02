import React, { useState, useEffect } from "react";
import Input from "./input";

const Form = (props) => {
  const [formData, setFormData] = useState(
    props.editData !== null
      ? props.editData
      : {
          name: "",
          userName: "",
          email: "",
          password: "",
        }
  );
  const [formError, setFormError] = useState({});

  useEffect(
    () =>
      setFormData(
        props.editData !== null
          ? props.editData
          : {
              name: "",
              userName: "",
              email: "",
              password: "",
            }
      ),
    [props.editData]
  );
  const handleInput = ({ currentTarget: input }) => {
    const errors = {};
    const errorMessage = validateInput(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;
    setFormError(errors);
    setFormData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormError(errors || {});
    if (errors) return;
    props.onSubmit(formData);
    setFormData({ name: "", userName: "", email: "", password: "" });
  };
  const nameRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const validateInput = ({ name, value }) => {
    if (name === "name") {
      if (!nameRegex.test(value) || value.length < 5)
        return "Name Must be at least 5 characters";
    }
    if (name === "userName") {
      if (!nameRegex.test(value) || value.length < 5)
        return "User Name Must be at least 5 characters";
    }
    if (name === "email") {
      if (!emailRegex.test(value)) return "Enter a valid Email";
    }
    if (name === "password") {
      if (value.length < 6) return "Password Must be at least 6 Characters";
    }
  };

  const validateForm = () => {
    const errors = {};

    const { name, userName, email, password } = formData;
    if (!nameRegex.test(name) || name.length < 4) {
      errors.name = "Please Enter A Valid Name";
    }
    if (!nameRegex.test(userName) || userName.length < 4) {
      errors.userName = "Please Enter A Valid User Name";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please Enter A Valid Email";
    }
    if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return Object.keys(errors).length !== 0 ? errors : null;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={"name"}
          value={formData["name"]}
          label={"Name"}
          onChange={handleInput}
          error={formError["name"]}
          type={"text"}
        />
        <Input
          name={"userName"}
          value={formData["userName"]}
          label={"User Name"}
          onChange={handleInput}
          error={formError["userName"]}
          type={"text"}
        />
        <Input
          name={"email"}
          value={formData["email"]}
          label={"email"}
          onChange={handleInput}
          error={formError["email"]}
          type={"email"}
        />
        <Input
          name={"password"}
          value={formData["password"]}
          label={"password"}
          onChange={handleInput}
          error={formError["password"]}
          type={"password"}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={validateForm()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
