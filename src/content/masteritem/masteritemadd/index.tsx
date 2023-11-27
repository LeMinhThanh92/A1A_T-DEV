import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Container, Grid } from '@mui/material';
import MasterItemCreateTitle from './msitemadd';
import MasterItemImageAdd from './msitemimage';
import MasterItemNameDesAdd from './msitemnamedes';
import MasterItemAddMoreItem from "./msitemaddmore";

function MasterItemAdd() {
  return (
    <>
      <Helmet>
        <title>Add Master Item</title>
      </Helmet>

        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          alignItems={'stretch'}
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <MasterItemCreateTitle />
          </Grid>
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent>
                <Grid
                  container
                  direction={'row'}
                  justifyContent={'center'}
                  alignItems={'stretch'}
                  spacing={3}
                >
                  <Grid item xs={12} md={3}>
                    <MasterItemImageAdd />
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <MasterItemNameDesAdd />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <MasterItemAddMoreItem />
          </Grid>

        </Grid>

    </>
  );
}

export default MasterItemAdd;
