import React, { useState } from "react";

/**
 *  SignupForm
 *
 *  Props:
 *    - initialFormData: { username, password, firstName, lastName, email }
 *    - handleSave: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  Routes -> SignupForm
 */

//FIXME: ask about key names
const DEFAULT_SIGNUP_DATA = {
  "Username": "",
  "Password": "",
  "First name": "",
  "Last name": "",
  "Email": ""
}
//TODO: hardcode inputs
function SignupForm({ initialFormData=DEFAULT_SIGNUP_DATA, handleSave }) {
  // console.log("SignupForm");
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
    //TODO: try catch error message
    handleSave(formData);
    setFormData(initialFormData);
  }
  //TODO: check if password input is type password or not
  //    may have to hardcode the fields
  //TODO: add labels
  return (
    <form className="SignupForm" onSubmit={handleSubmit}>
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

export default SignupForm;