import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Paper from "@material-ui/core/Paper";
import { GoogleLogin } from "react-google-login";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  mar: {
    marginBottom: theme.spacing(3.5),
    width: "100%",
    "& span": {
      margin: "auto",
      fontWeight: "bold",
      color: "rgba(0,0,0,0.8)",
    },
  },
  bold: {
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    padding: theme.spacing(1.5, 2),
  },
  bottomTxt: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
  txt: {
    backgroundColor: "#fcfcfb",
    borderRadius: "5px",
  },
  inputLabelNoShrink: {
    transform: "translate(40px, 20px) scale(1)",
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <Container component="main" maxWidth="xs" id="login-box">
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            className={classes.txt}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            placeholder="Email"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            className={classes.txt}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleChangePasswordVisibility}
                    onMouseDown={handleChangePasswordVisibility}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            aria-label="Remember me"
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            aria-label="Sign In"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                cookiePolicy={"single_host_origin"}
                buttonText="Login with Google account"
                className={classes.mar}
                aria-label="Login with Google account"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link
                to="/ResetPassword"
                className={classes.bottomTxt}
                variant="body2"
                aria-label="Forgot password?"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                aria-label="Don't have an account?"
                className={classes.bottomTxt}
                variant="body2"
              >
                {"Don't have an account? "}
                <span className={classes.bold}>Sign Up</span>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
