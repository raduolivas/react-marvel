import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import * as routes from "../../constants/routes";
import { SignUpForm } from "./SignUpForm";
import { Container } from "@material-ui/core";

const history = createHistory();

const SignUpComponent = (props) => (
  <Container maxWidth="sm">
    <h1>SignUp</h1>
    <SignUpForm history={history}/>
  </Container>
);

export const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);