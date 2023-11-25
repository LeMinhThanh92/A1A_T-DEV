import { Card, CardContent, Typography } from '@mui/material';

function MasterItemCreateTitle() {
  return(
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom >
          Create new Master Item
        </Typography>
      </CardContent>
    </Card>
  )
}

export default  MasterItemCreateTitle;