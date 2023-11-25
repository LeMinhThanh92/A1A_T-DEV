import { Helmet } from 'react-helmet-async';
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { MuiAutocomplete } from "../../muicomponent/autocomplete";
import { InputLabelMui } from "../../muicomponent/inputlabel";
import { ClearAllOutlined } from "@mui/icons-material";
import { useState } from "react";

function MSVenderAdd() {
  const [vname,setVname]=useState('')
  const [vaddress,setVAdress]=useState('')
  const [vemail,setVEmail]=useState('')
  return (
    <>
      <Helmet>
        <title>Add Vender</title>
      </Helmet>

      <Card sx={{mt:3}}>
        <CardContent>
        <Grid
          container
          direction={"row"}
          justifyContent={"left"}
          alignItems={"stretch"}
          spacing={2}
        >
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent>
                <Typography variant={'h4'} component={'h4'} gutterBottom>
                  Add Vendor
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabelMui
              id='outline-vname'
              labelName='Name'
              inputError={false}
              valueName={vname}
              setValue={setVname}
              type='text'
              endAdornment={<ClearAllOutlined onClick={() => setVname('')} />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabelMui
              id='outline-vaddress'
              labelName='Address'
              inputError={false}
              valueName={vaddress}
              setValue={setVAdress}
              type='text'
              endAdornment={<ClearAllOutlined onClick={() => setVAdress('')} />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputLabelMui
              id='outline-vemail'
              labelName='Email'
              inputError={false}
              valueName={vemail}
              setValue={setVEmail}
              type='text'
              endAdornment={<ClearAllOutlined onClick={() => setVEmail('')} />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Group'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Contact person'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Currency'}/>
          </Grid>

          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'TAX ID(For local)'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Contact number'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Buyer'}/>
          </Grid>

          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Term of payment'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Method of payment'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiAutocomplete labelname={'Internal name'}/>
          </Grid>

          <Grid item xs={12} md={4}>
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

export default MSVenderAdd;