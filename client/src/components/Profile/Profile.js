import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './ContactCard';
import FeaturedPost from './UserProducts';

const mainFeaturedPost = {
  title: '@Username Here',
  description:
    "City: Philadelphia, PA",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Lawnmower',
    date: 'Available Now!',
    description:
      'This is a description of the product that is available.',
    image: 'https://www.rd.com/wp-content/uploads/2022/08/lawnmower-GettyImages-1096126656-MLedit.jpg?resize=768,512',
  },
  {
    title: 'Car Jack',
    date: 'Available Nov 11',
    description:
      'This is a description of the product that is available.',
    image: 'https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/types-of-car-jacks-2022-hero.jpg',
  },
  {
    title: 'Leaf Blower',
    date: 'Available Nov 18',
    description:
      'This is a description of the product that is available.',
    image: 'https://www.troybilt.com/on/demandware.static/-/Sites-troybilt-Library/default/dwf34185d4/images/product-line-browse/series-feature-card/41AS99MS766_TB430_env5_492x350.jpg',
  },
  {
    title: 'Car Seat',
    date: 'Available Oct 31',
    description:
      'This is a description of the product that is available.',
    image: 'https://www.verywellfamily.com/thmb/xFKeOxnoRogvhK_26nYG00rlqek=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/_hero_SQ_Graco-4Ever-4-in-1-Convertible-Car-Seat-1-cc1b2ff4d0084bf2bd30b7d44ba33c1c.jpg',
  }
];

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="Available Products" posts={posts} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}