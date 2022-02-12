import React, { useState } from 'react'
var axios = require('axios');

function handleSubmit(event) {
    event.preventDefault();
    var FormData = require('form-data');
    var data = new FormData();
    data.append('user[email]', `${event.target.email.value}`);
    data.append('user[password]', `${event.target.password.value}`);

    var config = {
        method: 'post',
        url: 'https://whatjobrailsapi.herokuapp.com/api/users/sign_in',

        headers: {
        },
        data: data,

    };

    axios(config)
        .then(function (response) {
            console.log('data');
            console.log(JSON.stringify(response.data));
            console.log('Headers');
            console.log(JSON.stringify(response.headers.authorization));
            localStorage.setItem('user', response.headers.authorization)
        })
        .catch(function (error) {
            console.log(error);
        });
}
export function LoginPage() {

    const [user, setUser] = useState()

    return (

        <>
            <heading className="heading">Login</heading>
            <form onSubmit={handleSubmit} classname='login-signup'>
                <div className='standard-form'>
                    <label>Email</label>
                    <input type='email' name='email'></input>
                    <label>Password</label>
                    <input type='current-password' name='password'></input>
                    <button><a href='/'>Login</a></button>
                </div>
            </form>
            <a href='/Signup'>
                <button>Signup</button></a>
        </>

    )
}