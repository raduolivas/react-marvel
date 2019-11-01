import * as React from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import * as routes from "../../constants/routes";
import { auth } from "../../firebase";

interface InterfaceProps {
  email?: string;
  error?: any;
  history?: any;
  password?: string;
}

interface InterfaceState {
  email: string;
  error: any;
  password: string;
}

export class SignInForm extends React.Component<InterfaceProps, InterfaceState> {

  private static INITIAL_STATE = {
    email: "",
    error: null,
    password: ""
  };

  private static propKey(propertyName: string, value: any): object {
    return { [propertyName]: value };
  }

  constructor(props: InterfaceProps) {
    super(props);

    this.state = { ...SignInForm.INITIAL_STATE };
  }

  public onSubmit = (event: any) => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...SignInForm.INITIAL_STATE }));
        history.push(routes.CHARACTERS);
      })
      .catch(error => {
        this.setState(SignInForm.propKey("error", error));
      });

    event.preventDefault();
  };

  public render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={event => this.onSubmit(event)}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="flex-end">

          <TextField
            label="Email Address"
            value={email}
            onChange={event => this.setStateWithEvent(event, "email")}
            fullWidth
            margin="normal"/>
        
          <TextField
            label="Password"
            value={password}
            onChange={event => this.setStateWithEvent(event, "password")}
            type="password" 
            fullWidth
            margin="normal"/>
        
        
          <Button variant="contained" disabled={isInvalid} color="primary" type="submit">
              Sign In
          </Button>
          
          {error && <p>{error.message}</p>}
        </Grid>

        
      </form>
    );
  }

  private setStateWithEvent(event: any, columnType: string): void {
    this.setState(SignInForm.propKey(columnType, (event.target as any).value));
  }
}