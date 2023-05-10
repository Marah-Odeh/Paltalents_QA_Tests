import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

const defaultMaterialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "black",
      },
    },
    MuiButton: {
      textPrimary: {
        color: "black",
      },
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      daySelected: {
        backgroundColor: "black",
        "&:hover": {
          backgroundColor: "black",
        },
      },
    },
    MuiSvgIcon: {
      root: {
        fill: "gray",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginRight: "0",
    },
  },
  input: {
    color: "#757575",
    "&:before, &:after": {
      borderColor: "#fcfcfb",
    },
  },
}));

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around" className={classes.root}>
        <ThemeProvider theme={defaultMaterialTheme}>
          <KeyboardDatePicker
            clearable
            margin="normal"
            id="date-picker-dialog"
            label="Event Date"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={(date) => handleDateChange(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            InputProps={{ className: classes.input }}
            InputLabelProps={{ style: { color: "white" } }}
          />
        </ThemeProvider>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
