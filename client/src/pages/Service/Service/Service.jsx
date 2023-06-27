import './service.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Verified from './Image/verified.png'
import Ship from './Image/ship.png'
import Mashroom from './Image/mashroom.png'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <>
            <div className="containerCard my-3">
                <div className="specialization">
                    <b><h3>We blieve in a world well fed,<br />one where foood is:</h3></b>
                </div>
                <div className="paper ">
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 350,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item className='grid1'>
                            <ButtonBase sx={{ width: 128, height: 80 }}>
                                <Img alt="complex" src={Verified} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container sx={{height:180 }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography component="div">
                                        <b><h6>Best Quality</h6></b>
                                    </Typography>
                                    {/* <Typography variant="body2" gutterBottom>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi
                                    </Typography> */}
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 350,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item className='grid1'>
                            <ButtonBase sx={{ width: 128, height: 100 }}>
                                <Img alt="complex" src={Ship} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container sx={{height:180 }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography component="div">
                                        <b><h6>Free Shippin</h6></b>
                                    </Typography>
                                    {/* <Typography variant="body2" gutterBottom>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi
                                    </Typography> */}
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 350,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item className='grid1'>
                            <ButtonBase sx={{ width: 128, height: 100 }}>
                                <Img alt="complex" src={Mashroom} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container sx={{height:180 }}>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography component="div">
                                        <b><h6>Warrenty</h6></b>
                                    </Typography>
                                    {/* <Typography variant="body2" gutterBottom>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi
                                    </Typography> */}
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, amet
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Paper>
                </div>
            </div>
        </>
    );
}