import { Divider, FormHelperText, OutlinedInput, Select } from '@material-ui/core';
import { useState } from 'react';
import HeadingType from '../HeadingType';

function SelectNative({ variant = "outlined", fullWidth = true, isSubmitted = false, label = "", value = "", required = false, onChange, name, noDivider = false, options = [] }) {
  const [focused, setFocused] = useState(false)
  return (
    <>
      <HeadingType variant="body" required={required} text={label} style={{ fontsize: '18px', fontWeight: '500', marginBottom: 15 }} />
      <Select
        native
        displayEmpty
        variant={variant}
        fullWidth={fullWidth}
        required={required}
        onChange={onChange}
        name={name}
        value={value}
        helperText={(required && isSubmitted && !value) && "This field is required"}
        focused={!!value || focused}
        onClose={(e) => { setFocused(false) }}
        onOpen={(e) => { setFocused(true) }}
        input={
          <OutlinedInput
            variant={variant}
            fullWidth={fullWidth}
            value={value}
            focused={!!value || focused}
            required={required}
            error={required && isSubmitted && !value}
            helperText={(required && isSubmitted && !value) && "This field is required"}
          />

        }
      >
        <option value={""}></option>
        {options.map((option, index) => (
          <option key={`${name}-${index}`} value={option.value}>{option.text}</option>
        ))}
      </Select>
      {(required && isSubmitted && !value) && <FormHelperText error required class="contained">This field is required</FormHelperText>}
      {!noDivider ? <Divider /> : null}
    </>

  );
}

export default SelectNative;
