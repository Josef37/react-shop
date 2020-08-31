import React, { useState } from "react";
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

const SignUp = ({ signUp }) => {
  const [credentials, setCredentials] = useState(INITIAL_STATE);
  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("The passwords don't match");
      return;
    }

    signUp(email, password, displayName);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>
      <p>Create a new account with email and password</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          type="text"
          name="displayName"
          required
        />
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
        <FormInput
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
