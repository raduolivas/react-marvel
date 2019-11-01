import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Container from '@material-ui/core/Container';

import * as routes from "../constants/routes";
import { firebase } from "../firebase";
import { withAuthentication } from "../firebase/withAuthentication";
import { Characters } from "../pages/Characters";
import { Character } from "../pages/Character";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Navigation } from "./Navigation/";

class AppComponent extends React.Component{
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    }
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser: any) => {
      authUser
        ? this.setState(() => ({authUser}))
        : this.setState(() => ({authUser: null}));
    })
  }

  public render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Container>
          <Switch>
            <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
            <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
            <Route exact={true} path={routes.CHARACTERS} component={Characters} />
            {/* <Route exact={true} path={routes.CHARACTER} component={Character}/> */}
            <Route exact={true} path={routes.CHARACTER} render={(match) => <Character match={match}/>} />
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export const App = withAuthentication(AppComponent);
