import React, { useState } from "react";
import { connect } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { StyledSignIn, Buttons } from "./sign-in.styles";

const SignIn = ({ emailSignIn, googleSignIn }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { email, password } = credentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailSignIn(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <StyledSignIn>
      <h2>I already have an account</h2>
      <p>Sign in with your and email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={email}
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          required
        />
        <FormInput
          value={password}
          handleChange={handleChange}
          label="Password"
          type="password"
          name="password"
          required
        />
        <Buttons>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </Buttons>
      </form>
    </StyledSignIn>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
