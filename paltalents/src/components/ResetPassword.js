import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";

import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25) /* <p>Space from top</p> */,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
  txt: {
    backgroundColor: "#fcfcfb",
    borderRadius: "5px",
  },
  inputLabelNoShrink: {
    transform: "translate(40px, 20px) scale(1)",
  },
}));

export default function ResetPassword() {
  const classes = useStyles();
  const [setValue] = React.useState("");
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={20}>
        <Typography component="h1" variant="h5">
          Please enter your email to reset your password.
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
            onChange={(event) => setValue(event.target.value)}
            autoComplete="email"
            autoFocus
            //  InputLabelProps={{ shrink: false }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Recover
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            component={Link}
            to={"/login"}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
