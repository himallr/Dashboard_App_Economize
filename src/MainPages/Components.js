import * as React from 'react';
import { Button, Card, CardActions, CardContent, Divider, Typography, Grid } from '@mui/material';
import './Components.css';

function Components() {
    const [spacing, setSpacing] = React.useState(12);

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }} className='container'>
            <Grid container>
                <Grid xs={4} className='grid-con-1'>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Total Revenue
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                                $39,012
                            </Typography>
                            <Typography variant="body2">
                                Total Orders
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Divider></Divider>
                <Grid xs={4} className='grid-con-1'>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Profit  <span className='span1'>+21.6%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                                $1,012
                            </Typography>
                            <Typography variant="body2">
                                Total Orders
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Divider></Divider>
                <Grid xs={4}>
                    <Card style={{ width: "300" }}>
                        <CardContent>
                            <Typography sx={{ minWidth: 100 }}>
                                Loss  <span className='span2'>-0.6%</span>
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                                $212
                            </Typography>
                            <Typography variant="body2">
                                Total Orders
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>

    );
}

export default Components;