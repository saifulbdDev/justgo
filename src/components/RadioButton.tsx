import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const RadioButton = ({ onChange }: { onChange: Function }) => {
  return (
    <RadioGroup
      row
      onChange={(event) => onChange(event.target.value)}
      defaultValue="all"
    >
      <FormControlLabel value="all" control={<Radio />} label="All" />
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  );
};
export default RadioButton;
