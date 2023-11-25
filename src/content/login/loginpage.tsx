import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import { NavLink as RouterLink } from "react-router-dom";

function LgPage() {
  return (
    <>
      <Grid
        container
        direction={'row'}
        justifyContent={'center'}
        alignItems={'stretch'}
        sx={{ height: '100%' }}
      >
        <Grid item xs={12} md={6} alignItems={'center'}>
         <Grid container
               direction={'row'}
               justifyContent={'center'}
               alignItems={'center'}
               sx={{height:'100%'}}
               >
           <Grid item xs={12} md={6} justifyContent={'center'} alignItems={'center'}>
             <Card>
               <CardContent sx={{justifyContent:'center',alignItems:'center'}}>
                 <Typography variant="h4" gutterBottom>
                   Login
                 </Typography>

                 <TextField
                   label="Username"
                   variant="outlined"
                   margin="normal"
                   fullWidth
                   required
                 />
                 <TextField
                   label="Password"
                   type="password"
                   variant="outlined"
                   margin="normal"
                   fullWidth
                   required
                 />
                 <Button
                   type="submit"
                   variant="contained"
                   color="primary"
                   fullWidth
                   disableRipple
                   component={RouterLink}
                   to="/masteritemgroup/masteritemgrouphome"
                   style={{ marginTop: '20px' }}
                 >
                   Login
                 </Button>
               </CardContent>
             </Card>
           </Grid>
         </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar
            variant={'square'}
            alt={'Login'}
            src={'/static/images/avatars/office.JPG'}
            sx={{ height: '100%', width: '100%' }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default LgPage;
