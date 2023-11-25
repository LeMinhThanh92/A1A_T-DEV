import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

interface InputLabelProps {
  id?: string;
  labelName?: string;
  inputError?: boolean;
  valueName?: string;
  setValue?: (value: string) => void;
  endAdornment?: any;
  type?: string;
  enable?:any
}


export function InputLabelMui({ id, labelName, inputError, valueName, setValue, endAdornment, type,enable }: InputLabelProps) {

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id} error={inputError}>
        {labelName}
      </InputLabel>
      <OutlinedInput fullWidth
                     id={id}
                     value={valueName}
                     label={labelName}
                     onChange={e => setValue(e.target.value)}
                     endAdornment={endAdornment}
                     error={inputError}
                     type={type}
                     disabled={enable}
      />
    </FormControl>

  )

}