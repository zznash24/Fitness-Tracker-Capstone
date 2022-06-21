import { Component, Redirect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target.username.value
    let firstName = e.target.first_name.value;
    let lastName = e.target.last_name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    let body = {
      username: username,  
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password //bcrypt
    }

    fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        user: data.username
      })
    })

    window.location.replace("/")
  }

  render(){
    return (
      <div className="wrapper">
          <h2>Sign-Up</h2>
          <form action="#" onSubmit={this.handleSubmit}>
            <div>
                <TextField
                  name="username"
                  id="username"
                  label="username"
                  variant="outlined" />
              </div>
              <div>
                <TextField
                  name="first_name"
                  id="first_name"
                  label="First name"
                  variant="outlined" />
              </div>
              <div>
              <TextField
                  name="last_name"
                  id="last_name"
                  label="Last name"
                  variant="outlined" />
              </div>
              <div>
                <TextField
                  name="email"
                  id="email"
                  label="Email"
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
              <div className="policy">
                  <input type="checkbox"></input>
                  <h3>I accept all terms & conditions</h3>
              </div>
              <div>
                <Button type="submit" variant="contained">Submit</Button>
              </div>
              <div >
                  <h3>Already have an account with us? <a href="login">Login Here</a></h3>
              </div>
          </form>
      </div>
    );
  }

}

export default SignUp;