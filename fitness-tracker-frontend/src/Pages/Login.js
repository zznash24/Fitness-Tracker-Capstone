import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';



function Login ({userId, setUserId, username, setUsername}) {
  const navigate = useNavigate();



    if (username) {
      return <h2>Let's go {username}!</h2>
    }
    else {
      return (
        <div className="wrapper">
            <h3>Login</h3>
           
            <form action="#" onSubmit={(e) => {
               e.preventDefault();
               console.log(e);
               let username = e.target.username.value;
               let password = e.target.password.value;
             
               let body = {
                 username: username,
                 password: password //bcrypt
               }
             
               fetch('http://localhost:3001/login', {
                 method: 'POST',
                 headers: {
                   'Content-type': 'application/json'
                 },
                 body: JSON.stringify(body)
               }).then(res => res.json()).then(data => {
                 console.log(data)
                 setUsername(data.username)
                 setUserId(data.id)
                 navigate('/dashboard');
               })
  
            }}>
                <div>
                  <TextField
                    name="username"
                    id="username"
                    label="username"
                    variant="outlined" />
                </div>
                <div>
                  <TextField
                    name="password"
                    type="password"
                    id="password"
                    label="password"
                    variant="outlined" />
                </div>
                <div>
                  <br></br>
                  <Button type="submit" variant="contained">Submit</Button>
                </div>
            </form>
        </div>
      );
    }
  }

export default Login;