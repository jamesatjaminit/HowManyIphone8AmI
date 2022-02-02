import { Button, TextField, Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import iphoneImage from "../public/iphone.png";

const Home: NextPage = () => {
  const [numberOfIphones, setNumberOfIphones] = useState(0);
  function formSubmit(event: any) {
    event.preventDefault();
    const feet = event.target.feet.value ?? 0;
    const inches = event.target.inches.value ?? 0;
    const totalCm = feet * 30.48 + inches * 2.54;
    const iphoneHeight = 13.84;
    const numOfIphones = Math.ceil(totalCm / iphoneHeight);
    setNumberOfIphones(numOfIphones);
  }
  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h2">How Many Iphone 8&apos;s Am I?</Typography>
      <form onSubmit={formSubmit}>
        <Grid container spacing={5} sx={{ pt: 3 }}>
          <Grid item>
            <TextField id="feet" label="Feet" type="number" />
          </Grid>
          <Grid item>
            <TextField id="inches" label="Inches" type="number" />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" type="submit">
              Iphone Me
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid>
        {numberOfIphones != 0 &&
          [...Array(numberOfIphones)].map((e, i) => (
            <Image key={e} src={iphoneImage} alt="An image of an iphone 8" />
          ))}
      </Grid>
    </Container>
  );
};

export default Home;
