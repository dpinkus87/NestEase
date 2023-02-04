import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_ITEM } from "../utils/mutations";

const styles = {
  container: {
    display: "flex",
    flex: "column",
    justifyContent: "center",
  },
  label: {
    flex: "0 0 100%",
  },
  background: {
    display: 'flex'
  }
};

const ProductForm = () => {
  const [formState, setFormState] = useState({ 
    name: "", 
    description: "",
    price: "",
    street: "",
    city: "",
    state: "",
    zip: "",
 });
  const [addProduct, { error, data }] = useMutation(ADD_ITEM);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addProduct({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
        name: "", 
        description: "",
        price: "",
        street: "",
        city: "",
        state: "",
        zip: "",
    });
    window.location.replace('/profile')
  };

  const theme = createTheme();

  return (
    <ThemeProvider style={styles.background} theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add a Product!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleFormSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Product Name"
                name="name"
                autoFocus
                value={formState.name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                value={formState.description}
                onChange={handleChange}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                label="Product's Price"
                name="price"
                autoFocus
                value={formState.price}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="street"
                label="Product's Street Address"
                value={formState.street}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="city"
                label="Product's City"
                value={formState.city}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="state"
                label="Product's State"
                value={formState.state}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="zip"
                label="Product's Zip Code"
                value={formState.zip}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add your Product!
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ProductForm;
