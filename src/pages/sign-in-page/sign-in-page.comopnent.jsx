import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { StyledSignInPage } from "./sign-in-page.styles";

const SignInPage = () => (
  <StyledSignInPage>
    <SignIn />
    <SignUp />
  </StyledSignInPage>
);

export default SignInPage;
