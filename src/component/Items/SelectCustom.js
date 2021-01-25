import React from "react";
import PropsTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SelectCustom({ options, label }) {
  const [value, setValue] = React.useState(options[0]);
  console.log(value);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={options.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          margin="normal"
          variant="outlined"
          InputProps={{ ...params.InputProps, type: "search" }}
        />
      )}
    />
  );
}
SelectCustom.PropsTypes = {
  options: PropsTypes.any,
  label: PropsTypes.any,
};
SelectCustom.defaultProps = {
  options: [
    {
      title: "label1",
      value: "value1",
    },
    {
      title: "label2",
      value: "value1",
    },
  ],
  label: "labelHere",
};
