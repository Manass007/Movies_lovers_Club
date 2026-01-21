
// components/BookDisplay.js
import React from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Alert,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";

/**
 * Props:
 *  - title: string
 *  - totalRecommendations: number
 *
 * Fetches: POST /api/recommend
 * Body: { title, total_recommendations }
 * Expects: array OR { recommendations: [...] }
 */
export default function BookDisplay({ title, totalRecommendations }) {
  const [recommendations, setRecommendations] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [searched, setSearched] = React.useState(false);

  React.useEffect(() => {
    // Only run when both props are valid
    if (!title || !totalRecommendations) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError("");
        setSearched(true);

        // Hit Next.js API route to avoid CORS
        const response = await fetch("/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: title.trim(),
            total_recommendations: Number(totalRecommendations),
          }),
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to fetch recommendations");

        const data = await response.json();
        const list = Array.isArray(data) ? data : data.recommendations || [];
        setRecommendations(list);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "An error occurred while fetching recommendations");
        }
        setRecommendations([]);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [title, totalRecommendations]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Heading */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Results for: {title} ({totalRecommendations})
      </Typography>

      {/* Error */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Loading */}
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      )}

      {/* No Results */}
      {searched && !loading && recommendations.length === 0 && !error && (
        <Alert severity="info" sx={{ mb: 3 }}>
          No recommendations found. Try a different title or count.
        </Alert>
      )}

      {/* Recommendations Grid — using your card UI */}
      <Grid container spacing={3}>
        {recommendations.map((book, index) => {
          const titleText = book.title || "Untitled";
          const authorsText = Array.isArray(book.authors)
            ? book.authors.join(", ")
            : book.authors || "Unknown";
          const categoriesText = Array.isArray(book.categories)
            ? book.categories.join(", ")
            : book.categories || "";
          const ratingNum =
            typeof book.average_rating === "number" ? book.average_rating : null;
          const sim =
            typeof book["Similarity Score"] === "number"
              ? book["Similarity Score"]
              : null;

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {/* If you prefer size={{ … }}, import Unstable_Grid2 instead:
                 import Grid from '@mui/material/Unstable_Grid2';
                 <Grid size={{ xs:12, sm:6, md:4, lg:3 }} key={index}> */}
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardActionArea sx={{ flexGrow: 1 }}>
                  {/* Book Thumbnail */}
                  {book.thumbnail && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={book.thumbnail}
                      alt={titleText}
                      sx={{ objectFit: "cover", backgroundColor: "#e0e0e0" }}
                    />
                  )}

                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Title */}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: "bold",
                        minHeight: "56px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {titleText}
                    </Typography>

                    {/* Authors */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1, fontStyle: "italic" }}
                    >
                      by {authorsText}
                    </Typography>

                    {/* Category */}
                    {categoriesText && (
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ mb: 1, fontWeight: 500 }}
                      >
                        {categoriesText}
                      </Typography>
                    )}

                    {/* Published Year */}
                    {book.published_year && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Published: {book.published_year}
                      </Typography>
                    )}

                    {/* Rating */}
                    {ratingNum !== null && (
                      <Typography
                        variant="body2"
                        color="success.main"
                        sx={{ mb: 1, fontWeight: "bold" }}
                      >
                        ⭐ {ratingNum.toFixed(2)}/5.0
                      </Typography>
                    )}

                    {/* Similarity Score */}
                    {sim !== null && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          display: "block",
                          backgroundColor: "#f0f0f0",
                          p: 1,
                          borderRadius: 1,
                          mt: 2,
                        }}
                      >
                        Relevance: {(sim * 100).toFixed(1)}%
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary">
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
