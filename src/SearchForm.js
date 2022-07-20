import React, { useState } from "react";

/**
 *  SearchForm
 *
 *  Props:
 *  - initialFormData
 *  - handleSave: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  { GetCompanyCardList, GetJobCardList } -> SearchForm
 */

function SearchForm({ initialFormData, handleSave }) {
  // console.log("SearchForm");
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

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      {Object.keys(formData).map((p, idx) =>
        <input
          id={idx}
          key={idx}
          name={p}
          value={formData[p]}
          placeholder="Enter search term..."
          onChange={handleChange}
        />)}
      <button>
        Submit
      </button>
    </form>
  );
}

export default SearchForm;