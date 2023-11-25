import { Helmet } from "react-helmet-async";
import { Button, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { MuiAutocomplete } from "../../muicomponent/autocomplete";
import { SearchOutlined } from "@mui/icons-material";
import MSTable from "./msitemhometable";


function MSItemHome() {
  return(
    <>
    <Helmet>
      <title>Master Item Home</title>
    </Helmet>
    <Grid
      container
      direction={'row'}
      alignItems={'stretch'}
      justifyContent={'left'}
      spacing={2}>
      <Grid item xs={12} md={12} mt={3}>
        <Card>
          <CardContent>
            <Typography variant={'h4'} component={'h4'} gutterBottom>
              MasterItem Home
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardContent>
            <Grid
              container
              direction={'row'}
              alignItems={'stretch'}
              justifyContent={'left'}
              spacing={2}>
              <Grid item xs={12} md={3}>
                <MuiAutocomplete labelname={'Search with'} />
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiAutocomplete labelname={'Value'} />
              </Grid>
              <Grid item xs={12} md={1}>
                <Button variant={'contained'} sx={{height:'52px'}} endIcon={<SearchOutlined />}>Search</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <MSTable />
      </Grid>
    </Grid>
    </>
  )
}
export default MSItemHome;