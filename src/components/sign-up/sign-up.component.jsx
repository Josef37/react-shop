import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const INITIAL_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class SignUp extends React.Component {
  state = INITIAL_STATE;

  handleSubmit = async (event) => {
    event.preventDefault();

    const { signUp } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("The passwords don't match");
      return;
    }

    signUp(email, password, displayName);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <p>Create a new account with email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            type="text"
            name="displayName"
            required
          />
          <FormInput
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            type="email"
            name="email"
            required
          />
          <FormInput
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            type="password"
            name="password"
            required
          />
          <FormInput
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
