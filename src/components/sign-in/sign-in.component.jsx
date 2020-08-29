import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import { StyledSignIn, Buttons } from "./sign-in.styles";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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
              onClick={signInWithGoogle}
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

export default SignIn;
