import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CourseCard({ image, heading, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img" // Specify that this should render an img tag
        height="140" // Set the height of the image
        image={image} // Pass the image URL
        alt={heading} // Use the heading as the alt text
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" variant="outlined">
          Download
        </Button>
        <Button size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
