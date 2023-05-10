import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

export default function StarRating() {
  const [value, setValue] = React.useState(0);

  return (
    <div id="rating">
      <Box
        component="fieldset"
        mb={3}
        borderColor="transparent"
        style={{
          marginBottom: "0px",
          paddingInlineStart: "1px",
          paddingBlockEnd: "0",
        }}
      >
        <Rating
          id="rating-value"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}
