  
import * as React from "react";
import { withRouter } from "react-router-dom";

import Container from '@material-ui/core/Container';

import { SignUpLink } from "../SignUp";
import { SignInForm } from "./SignInForm";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  
    <Container maxWidth="sm">
        <h1>SignIn</h1>
        <SignInForm history={history} />
        <SignUpLink />
    </Container>
);

export const SignIn = withRouter(SignInComponent);