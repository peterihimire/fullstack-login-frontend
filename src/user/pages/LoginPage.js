import React from "react";
import { AuthContext } from "../../shared/context/auth-context";
// import "./Auth.css";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class LoginPage extends React.Component {
  static contextType = AuthContext;

  context = this.context;

  state = {
    email: "",
    emailValid: false,
    password: "",
    passwordValid: false,
    formValid: false,
    errorMsg: {},
    loading: false,
    error: null,
  };

  validateForm = () => {
    const { emailValid, passwordValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid,
    });
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  updatePassword = (password) => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = "Password must be at least 6 characters long";
    } else if (!/\d/.test(password)) {
      passwordValid = false;
      errorMsg.password = "Password must contain a digit";
    }
    // else if (!/[!@#$%^&*]/.test(password)) {
    //   passwordValid = false;
    //   errorMsg.password = "Password must contain special character: !@#$%^&*";
    // }

    this.setState({ passwordValid, errorMsg }, this.validateForm);
  };

  componentDidMount() {
    const context = this.context;
    console.log(context);

    console.log(context.login);
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.context);
    // console.log("Email:" + this.state.email);
    // console.log("Password:" + this.state.password);

    // const data = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    // console.log(data);
    this.setState({ loading: true });
    fetch("http://localhost:7000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => {
        response
          .json()
          .then((res) => {
            console.log(res);
            if (!response.ok) {
              throw new Error(res.msg);
            }
            this.setState({ loading: false });
            console.log(response);
            this.context.login();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.message || "Something went wrong , please try again...",
        });
      });
  };

  render() {
    return (
      <div className="App">
        {this.state.loading && <LoadingSpinner asOverlay />}
        <header>Login </header>
        <main role="main">
          <form action="#" id="js-form" onSubmit={this.submitHandler}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <ValidationMessage
                valid={this.state.emailValid}
                message={this.state.errorMsg.email}
              />
              <input
                type="email"
                id="email"
                name="email"
                className="form-field"
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <ValidationMessage
                valid={this.state.passwordValid}
                message={this.state.errorMsg.password}
              />
              <input
                type="password"
                id="password"
                name="password"
                className="form-field"
                value={this.state.password}
                onChange={(e) => this.updatePassword(e.target.value)}
              />
            </div>

            <div className="form-controls">
              <button
                className="button"
                type="submit"
                disabled={!this.state.formValid}
              >
                Login
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default LoginPage;
