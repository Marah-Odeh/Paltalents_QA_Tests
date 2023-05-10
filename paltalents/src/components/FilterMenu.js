import { useEffect, useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import { BsCursorText } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { FaList, FaFilter } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SimpleSelect from "./SimpleSelect";
import MultipleSelect from "./MultipleSelect";
import TextField from "./TextField";
import { governorate, people } from "./data";
import "react-pro-sidebar/dist/css/styles.css";
import "./FilterMenu.css";
import PropTypes from "prop-types";
import Date from "./Date";

const FilterMenu = (props) => {
  // Create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  // Create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    // Condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  // Create a variable to detect when max width of the window is 600px using udeMediaQuery hook
  const autocollapse = useMediaQuery("(max-width:1303px)");

  // create a function to collapse the filter menu when the autocollapse variable is achieved
  useEffect(() => {
    if (autocollapse) {
      setMenuCollapse(true);
    }
  }, [autocollapse]);

  FilterMenu.propTypes = {
    type: PropTypes.bool,
  };

  return (
    <>
      <div id="sidebar" className="sidebar">
        {/* Collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader onClick={menuIconClick}>
            <div className="filtertext">
              {/* Small and big change using menucollapse state */}
              <p>{menuCollapse ? <FaFilter /> : "Filter Your Search"}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {props.type ? (
                <>
                  <MenuItem
                    id="Event-Name"
                    icon={<BsCursorText onClick={menuIconClick} />}
                  >
                    <TextField
                      textFieldID={"Event-Name-value"}
                      labeltype={false}
                    />
                  </MenuItem>
                  <MenuItem
                    id="Event-multiselect"
                    icon={<FaList onClick={menuIconClick} />}
                  >
                    <MultipleSelect
                      multiSelectID={"Event-Performance-Art-value"}
                    />
                  </MenuItem>
                  <MenuItem
                    id="Event-simpleSelect"
                    icon={<IoLocation onClick={menuIconClick} />}
                  >
                    <SimpleSelect
                      selectID={"Event-Governorate-value"}
                      type={true}
                      data={governorate}
                    />
                  </MenuItem>
                  <MenuItem
                    id="Event-Date"
                    style={{ paddingTop: "3px" }}
                    icon={<MdDateRange onClick={menuIconClick} />}
                  >
                    <Date id="Event-Date-Value" />
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem icon={<BsCursorText onClick={menuIconClick} />}>
                    <TextField id="Talent-Name-Value" labeltype={true} />
                  </MenuItem>
                  <MenuItem icon={<MdGroup onClick={menuIconClick} />}>
                    <SimpleSelect
                      selectID={"Talent-Number"}
                      selectValueID={"Talent-Number-value"}
                      type={false}
                      data={people}
                    />
                  </MenuItem>
                  <MenuItem icon={<FaList onClick={menuIconClick} />}>
                    <MultipleSelect
                      multiSelectID={"Talent-Performance-Art"}
                      multiSelectValueID={"Talent-Performance-Art-Value"}
                    />
                  </MenuItem>
                  <MenuItem icon={<IoLocation onClick={menuIconClick} />}>
                    <SimpleSelect
                      selectID={"Talent-Governorate"}
                      selectValueID={"Talent-Governorate-Value"}
                      type={true}
                      data={governorate}
                    />
                  </MenuItem>
                </>
              )}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default FilterMenu;
