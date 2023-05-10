import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { talents } from "./data";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: "2px",
    margin: theme.spacing(1),
    minWidth: 250,
    maxWidth: 250,
  },
  inputLabel: {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },
  select: {
    color: "#757575",
    "&:before, &:after": {
      borderColor: "white",
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

export default function MultipleSelect(props) {
  MultipleSelect.propTypes = {
    multiSelectID: PropTypes.string,
    multiSelectValueID: PropTypes.string,
  };
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div
      id={props.multiSelectID}
      style={{ marginRight: "20px", marginTop: "10px" }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel
          className={classes.inputLabel}
          id="demo-mutiple-checkbox-label"
        >
          Performance Art
        </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id={props.multiSelectValueID}
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          className={classes.select}
        >
          {talents.map((talent) => (
            <MenuItem key={talent.id} value={talent.name}>
              <Checkbox checked={personName.indexOf(talent.name) > -1} />
              <ListItemText primary={talent.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
