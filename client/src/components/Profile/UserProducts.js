import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function FeaturedPost(props) {
  const { post } = props;

  const styles = {
    bgcolor: {
      background: '#003554'
    },
    font: {
      fontFamily: 'Times New Roman',
    },
    border: '5px solid black',
    boxShadow: '5px 10px 10px #00A6FB',
    marginBottom: '30px',
    borderRadius: '10px',
  }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea style={styles} component="a" href="#">
        <Card style={styles.bgcolor} sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5" color="white">
              {post.title}
            </Typography>
            <Typography style={styles.font} variant="subtitle1" color="white">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph color="white">
              {post.description}
            </Typography>
            <Typography style={styles.font} variant="subtitle1" color="primary">
              Add to cart
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;