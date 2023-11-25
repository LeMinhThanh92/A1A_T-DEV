import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  Checkbox,
  FormGroup,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { MuiAutocomplete } from "../../muicomponent/autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";

function MSItemGroupAdd() {

  function CheckboxLabels() {
    return (
      <FormGroup row>
        <FormControlLabel control={<Checkbox size={'small'} defaultChecked />} label="Batch" />
        <FormControlLabel control={<Checkbox size={'small'}/>} label="Serial" />
        <FormControlLabel control={<Checkbox size={'small'}/>} label="Expire Day" />
      </FormGroup>
    );
  }
  
  return(
    <>
      <Helmet>
        <title>Add Master Item Group</title>
      </Helmet>
      <Grid
        sx={{ mt: 1 }}
        container
        direction={"row"}
        justifyContent={"left"}
        alignItems={"stretch"}
        spacing={2}
      >
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Typography variant={"h4"} component={"h4"} gutterBottom>
                Add Master Item Group
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Stack direction={'column'} spacing={1}>
                <MuiAutocomplete labelname={"Master item group code"} />
                <MuiAutocomplete labelname={"Master item group name"} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Card>
            <CardContent>
              <Stack direction={'column'} spacing={1}>
                <MuiAutocomplete labelname={"Cost group"} />
                <MuiAutocomplete labelname={"Tracking number group"} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Card>
            <CardContent>
              <Stack direction={'column'} spacing={1}>
                <MuiAutocomplete labelname={"Control stock"} />
                <MuiAutocomplete labelname={"Storage dimension"} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Stack direction={'column'} spacing={1}>
                <h4>Tracking Dimension</h4>
                <CheckboxLabels />
              </Stack>
            </CardContent>
          </Card>
        </Grid>


      </Grid>
    </>
  );
}
export  default MSItemGroupAdd;