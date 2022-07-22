import React, { useState } from "react";

/**
 *  LoginForm
 *
 *  Props:
 *    - initialFormData: { username, password }
 *    - handleSave: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  Context:
 *    - user { username, firstName, lastName, email, isAdmin }
 *
 *  Routes -> LoginForm
 */

const DEFAULT_LOGIN_DATA = {
  "Username": "",
  "Password": ""
}
//TODO: hardcode inputs, try catch for errors
function LoginForm({ initialFormData=DEFAULT_LOGIN_DATA, handleSave }) {
  // console.log("LoginForm");
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false);

  /** Update form input. */
  function handleChange(evt) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log("kjahsdskjahdkj");
      handleSave(formData);
    } catch (err) {
      console.log("caught?");
      setError("Invalid username/password");
    }
    setFormData(initialFormData);
  }
  //TODO: check if password input is type password or not
  //    may have to hardcode the fields

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      {Object.keys(formData).map((p, idx) =>
        <input
          id={idx}
          key={idx}
          type={p === "Password" ? "password" : "text"}
          name={p}
          value={formData[p]}
          placeholder={p}
          onChange={handleChange}
        />)}
      {error &&
        <p>{error}</p>}
      <button>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;