import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputLabel: {
    color: "#fcfcfb",
    "&.Mui-focused": {
      color: "#fcfcfb",
    },
  },
  select: {
    color: "#757575",
    "&:before, &:after": {
      borderColor: "#fcfcfb",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
  variant: "menu",
  getContentAnchorEl: null,
};

export default function SimpleSelect(props) {
  SimpleSelect.propTypes = {
    data: PropTypes.arrayOf,
    type: PropTypes.bool,
    selectID: PropTypes.string,
    selectValueID: PropTypes.string,
  };

  const classes = useStyles();
  const [gov, setGov] = React.useState("");

  const handleChange = (event) => {
    setGov(event.target.value);
  };

  return (
    <div id={props.selectID}>
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          id="demo-simple-select-label"
        >
          {props.type ? "Governorate" : "Number"}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={props.selectValueID}
          value={gov}
          onChange={handleChange}
          className={classes.select}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.data.map((data) => (
            <MenuItem key={data.id} value={data.name}>
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
