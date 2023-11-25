import { Button, Card, CardContent, Container, Grid, Stack } from "@mui/material";
import { MuiAutocomplete } from '../../muicomponent/autocomplete';

function MasterItemAddMoreItem() {
  return (
    <>

        <Card>
          <CardContent>
          <Grid
            container
            direction={"row"}
            justifyContent={"left"}
            alignItems={"stretch"}
            spacing={2}
          >
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Master item group'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Master item sub-group'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Search name'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'3'} display='none'/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Vendor code'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Color code'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Size'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Style'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'BOM unit'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Inventory unit'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Purchase unit'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <MuiAutocomplete labelname={'Sale unit'}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button variant={'contained'} fullWidth>
                Add
              </Button>
            </Grid>

          </Grid>
        </CardContent>
        </Card>

    </>
  );
}

export default MasterItemAddMoreItem;