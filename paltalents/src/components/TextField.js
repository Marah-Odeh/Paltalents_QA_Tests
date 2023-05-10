import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "250px",
      marginRight: "23px",
    },
  },
  input: {
    color: "#757575",
    "&:before, &:after": {
      borderColor: "#fcfcfb",
    },
  },
}));

export default function BasicTextFields(props) {
  BasicTextFields.propTypes = {
    labeltype: PropTypes.bool,
    textFieldID: PropTypes.string,
  };

  const classes = useStyles();

  return (
    <form id="textfield" className={classes.root} noValidate autoComplete="off">
      <TextField
        testid="white"
        id={props.textFieldID}
        label={props.labeltype ? "Name" : "Event Name"}
        fullWidth
        InputProps={{ className: classes.input }}
        InputLabelProps={{ style: { color: "white" } }}
      />
    </form>
  );
}
