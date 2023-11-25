import { Helmet } from "react-helmet-async";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { ControlPointOutlined, FileUploadOutlined, ModeEditOutlined } from "@mui/icons-material";
import MSGroupTable from "./msitemgrouptable";

function MSItemGroupHome() {
  return(
    <>
      <Helmet>
        <title>Master Item Group Home</title>
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
                Master Item Group Home
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Grid
                container
                direction={"row"}
                justifyContent={"left"}
                alignItems={"stretch"}
                spacing={2}
              >
                <Grid item xs={12} md={4}>
                  <Button
                    variant={"outlined"}
                    fullWidth
                    endIcon={<FileUploadOutlined />}
                  >
                    Import
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant={"outlined"}
                    fullWidth
                    endIcon={<ControlPointOutlined />}
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Button
                    variant={"outlined"}
                    fullWidth
                    endIcon={<ModeEditOutlined />}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <MSGroupTable />
        </Grid>
      </Grid>
    </>
  );
}
export default MSItemGroupHome;