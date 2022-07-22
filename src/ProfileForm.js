import React, { useState } from "react";

/**
 *  ProfileForm
 *
 *  Props:
 *    - initialFormData: { username, firstName, lastName, email }
 *    - handleSave: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  Routes -> ProfileForm
 */

//TODO: since we are editing, we need to autopopulate with what's already
//  saved to user

const DEFAULT_PROFILE_DATA = {
  "Username": "",
  "First name": "",
  "Last name": "",
  "Email": ""
}

function ProfileForm({ initialFormData=DEFAULT_PROFILE_DATA, handleSave }) {
  // console.log("ProfileForm");
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
    <form className="ProfileForm" onSubmit={handleSubmit}>
      {Object.keys(formData).map((p, idx) =>
        <input
          id={idx}
          key={idx}
          name={p}
          value={formData[p]}
          placeholder={p}
          onChange={handleChange}
        />)}
      <button>
        Save Changes
      </button>
    </form>
  );
}

export default ProfileForm;