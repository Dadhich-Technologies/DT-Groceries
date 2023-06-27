import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import vector from './Images/vector.png'
import shirt from './Images/shirt.png'
import nature from './Images/nature.png'
import './aboutus.css'

export default function OurQuality() {
    return (
        <>
            <div className="quality">
                <h5 className='text text-center mt-[40px]' ><b>Our Quality</b></h5>
                <h3 className='text-center mt-[10px]'>We Developed product We Need</h3>
            </div>
            <div className="features">
                <div className="feature mt-[25px] mx-5">
                    <Card className='text-center mt-[10px]' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia className='icon' sx={{height:80,width:80}}
                                component="img"
                                height="140"
                                image={vector}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Simplicity in design
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="feature mt-[25px]">
                    <Card className='text-center mt-[10px]' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia className='icon' sx={{height:80,width:80}}
                                component="img"
                                height="140"
                                image={shirt}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Confidence in comfort
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="feature mt-[25px] mx-5">
                    <Card className='text-center mt-[10px]' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia className='icon' sx={{height:80,width:80}}
                                component="img"
                                // image={nature}
                                image={nature}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    Make from natural
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </>
    )
}
