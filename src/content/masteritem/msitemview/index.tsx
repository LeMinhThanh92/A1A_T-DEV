import { Helmet } from "react-helmet-async";
import { Card, CardContent, Container, Grid } from "@mui/material";
import MasterItemImageAdd from "../masteritemadd/msitemimage";
import MasterItemNameDesAdd from "../masteritemadd/msitemnamedes";
import MasterItemAddMoreItem from "../masteritemadd/msitemaddmore";
import { InputLabelMui } from "../../muicomponent/inputlabel";
import MSViewTable from "./msitemviewtable";
import MasterItemViewTitle from "./msitemviewhead";

function MasterItemView() {
  return(
    <>
      <Helmet>
        <title>Add Master Item</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction={'row'}
          justifyContent={'center'}
          alignItems={'stretch'}
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <MasterItemViewTitle />
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
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Grid container
                      direction={'row'}
                      justifyContent={'left'}
                      alignItems={'stretch'}
                      spacing={1}
                      >
                  <Grid item xs={12} md={6}>
                    <InputLabelMui labelName={'Price'} enable={'false'} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabelMui labelName={'Currency'} enable={'false'} />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputLabelMui labelName={'Lead time'} enable={'false'} />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputLabelMui labelName={'History of price'} enable={'false'} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <MSViewTable />
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}
export default MasterItemView;