import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies with optional search term. */

  static async getCompaniesFromAPI(term) {

    let res = await this.request(
      `companies/`,
      { name: term }
    );
    return res.companies;
  }

  /** Get all jobs with optional search term. */

  static async getJobsFromAPI(term) {
    let res = await this.request(
      `jobs/`,
      { title: term }
    );
    return res.jobs;
  }

  /** On login - get token by making a POST request to /auth/token:
   * { username, password } => token
   */
  static async onLoginGetTokenFromAPI(userLoginDetails) {
    let res = await this.request(
      '/auth/token',
      userLoginDetails,
      "post"
    );
    return res.token;
  }

  /** On registering - get token by making a POST request to /auth/register:
  * { username, password, firstName, lastName, email } => token
  */
  static async onRegGetTokenFromAPI(userRegisterDetails) {
    let res = await this.request(
      '/auth/register',
      userRegisterDetails,
      "post"
    );
    return res.token;
  }

}

export default JoblyApi;


