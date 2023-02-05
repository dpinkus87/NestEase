import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UserProduct from '../components/ProductCard';

import { useQuery } from "@apollo/client";

import { QUERY_ALL_ITEM } from '../utils/queries'

const styles = {
  color: {
    background: "#003554",
  },
  text: {
    textShadow: "5px 5x 5px #000",
  },
  height: {
    height: "100%",
    display: 'flex-inline',

  },
  card: {
    boxShadow: "boxShadow: 5px 10px 10px #00A6FB",
  },
};

const cards = [1, 2, 3];

const theme = createTheme();

const Product = () => {


const { loading, data }  = useQuery(QUERY_ALL_ITEM);

  let items;

  if (data){
    items = data.items;
  };

  if (loading) {
    return <div>Loading...</div>
  }


  return (
    <div style={styles.height}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Market Place
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                Discover rental products!
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              ></Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid className='container' spacing={5} sx={{ mt: 3 }}>
            {items.map((item) => (
              <UserProduct key={item._id} item={item} />
            ))}
          </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
};

export default Product;
