import React from "react";
var axios = require("axios");

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target[0].value);
  var FormData = require("form-data");
  var data = new FormData();
  data.append("email", `${event.target.email.value}`);
  data.append("password", `${event.target.password.value}`);
  data.append("password_confirmation", `${event.target.password.value}`);
  data.append("first_name", `${event.target.first_name.value}`);
  data.append("last_name", `${event.target.last_name.value}`);

  var config = {
    method: "post",
    url: "http://whatjobrailsapi.herokuapp.com/api/users",
    headers: {
      // ...data.getHeaders()
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
export function SignupPage() {
  return (
    <>
      <heading role="heading" className="heading">
        Signup
      </heading>
      
      <form onSubmit={handleSubmit}>
      <div className="standard-form">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"></input>
          <label htmlFor="first_name">first_name</label>
          <input id="first_name" type="text" name="first_name"></input>
          <label htmlFor="last_name">last_name</label>
          <input id="last_name" type="text" name="last_name"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"></input>
          <button role="signupButton">
            <a href="/Login">Signup</a>
          </button>
          </div>
      </form>
      
      <a href="/Login">
        <button>Login</button>
      </a>
    </>
  );
}
