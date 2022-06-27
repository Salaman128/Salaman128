import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({bg, img, title, text, buttons}) {
  return (
    <Card sx={{width: "100%"}} elevation={8}>
        <div style={{backgroundColor: bg}}>
            <CardMedia
                sx={{height: "100%", width: "100%", maxWidth: "450px", margin: "auto"}}
                component="img"
                alt="green iguana"
                image={img}
            />
        </div>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {text}
            </Typography>
        </CardContent>
        <CardActions>
        {
            buttons.map((b)=>{
                return(
                    <Button 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={b.link} size="small">{b.name}</Button>
                )
            })
        }
        </CardActions>
    </Card>
  );
}