import React, { useState } from "react";

/**
 *  SearchForm
 *
 *  Props:
 *  - initialFormData
 *  - handleSubmit: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  { GetCompanyCardList, GetJobCardList } -> SearchForm
 */

function SearchForm() {
  console.log("SearchForm");

  //TODO: when we search, we make an API get to "/companies/",
  //  pass in query param ?name=whatever
  // whatever they type in search bar, gets passed
  //    into our joblyAPI static method, as the query param "name"


  return (
    <div className="SearchForm">
      <p>SearchForm!</p>
    </div>
  );
}

export default SearchForm;