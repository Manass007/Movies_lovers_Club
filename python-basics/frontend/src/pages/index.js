
// pages/index.js
import React from "react";
import Head from "next/head";
import {
  Container, Paper, Typography, TextField, Button, Stack, Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BookDisplay from "@/components/book-display";

export default function Home() {
  const [title, setTitle] = React.useState("");
  const [count, setCount] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);

  const handleSearch = () => {
    if (!title.trim() || !count) return;
    setShowResults(true);
  };

  return (
    <>
      <Head>
        <title>Book Recommendation</title>
        <meta name="description" content="Get recommended books based on title and count" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        /favicon.ico
      </Head>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 3 }}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4" fontWeight={700}>
              Book Recommendations
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Enter a book title and how many recommendations you want.
            </Typography>
          </Stack>

          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                id="title"
                label="Title"
                variant="outlined"
                placeholder="e.g., Gilead"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                helperText="Type any title or keywords"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                id="count"
                label="Recommendation Count"
                variant="outlined"
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                helperText="Choose 1–100"
              />
            </Grid>

            <Grid item xs={12} md={1}>
              <Button
                fullWidth
                type="button"
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{ height: 56, textTransform: "none", fontWeight: 600 }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>

          {showResults && (
            <BookDisplay
              title={title}
              totalRecommendations={Number(count)}
            />
          )}
        </Paper>
      </Container>
    </>
  );
}
