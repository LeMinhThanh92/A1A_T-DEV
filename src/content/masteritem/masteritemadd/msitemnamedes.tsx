import { Card, CardContent, Stack } from "@mui/material";
import { MuiAutocomplete } from "../../muicomponent/autocomplete";
import { InputLabelMui } from "../../muicomponent/inputlabel";
import { ClearAllOutlined } from "@mui/icons-material";
import { useState } from "react";

function MasterItemNameDesAdd() {
  const [msName, setMsName] = useState('');

  return(
    <Stack direction={'column'} spacing={2}>
      <MuiAutocomplete labelname={"Relate Code"} wi='30%'/>
      <MuiAutocomplete labelname={"Name"} wi='50%' />
      <InputLabelMui
        id='outline-msname'
        labelName='Description'
        inputError={false}
        valueName={msName}
        setValue={setMsName}
        type='text'
        endAdornment={<ClearAllOutlined onClick={() => setMsName('')} />}
      />
    </Stack>
  )

}
export default MasterItemNameDesAdd;