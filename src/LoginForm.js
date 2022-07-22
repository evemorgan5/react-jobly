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

function LoginForm({ initialFormData=DEFAULT_LOGIN_DATA, handleSave }) {
  // console.log("LoginForm");
  const [formData, setFormData] = useState(initialFormData);

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
    handleSave(formData);
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
      <button>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;