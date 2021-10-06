import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ myCurrency }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    myCurrency(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" variant="filled">Select Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Currency"
          onChange={handleChange}
        >
          <MenuItem value={"Rs"}>PKR</MenuItem>
          <MenuItem value={"¥"}>JPY</MenuItem>
          <MenuItem value={"฿"}>BTC</MenuItem>
          <MenuItem value={"€"}>EUR</MenuItem>
          <MenuItem value={"$"}>EUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
