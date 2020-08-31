import React from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { StyledSignIn, Buttons } from "./sign-in.styles";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <StyledSignIn>
        <h2>I already have an account</h2>
        <p>Sign in with your and email and password</p>
        <form onSubmit={this.handleSubmit}>
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
          <Buttons>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={this.props.googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </Buttons>
        </form>
      </StyledSignIn>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
