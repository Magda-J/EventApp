import axios from "axios";
const url = "http://localhost:3001/";

export class ApiClient {
  // the constructor function takes in two callback functions which change the state in the page.js.
  // the page.js is where the state is stored so the functions we callback have to be there.
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        // returns the token which we then check on the backend to see if there is a user
        // in the db that has that token
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      console.log(error)
      if (error.response.status === 403) {// 403 indicates that the user is not logged in 
        // therefore we call the logouthandler function and clear the local storage and the state
        this.logoutHandler();
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  getEvents() {
    return this.authenticatedCall("get", url);
  }

  addEvent(name, price) {
    return this.authenticatedCall("post", url, { name, price });
  }

  removeEvent(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateEvent(id, name, price) {
    return this.authenticatedCall("put", `${url}${id}`, { name, price });
  }

  async login(username, password) {
    return await axios({
      method: "post",
      url: `${url}auth`,
      data: { username, password },
    });
  }
}
