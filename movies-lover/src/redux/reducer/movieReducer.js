import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = await axios.get("/api/v1/get/movies");
    // no need the host name, because the proxy server will handle the request
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw { error: error.message };
  }
});

const moviesSlice = createSlice({
  name: "moviesData",
  initialState: {
    movies: [],
    loading: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    // when the fetchMovies is pending, the movies will be set to the state
    builder.addCase(fetchMovies.pending, (state) => {
      state.movies = [];
      state.loading = "loading";
      state.error = null;
    });
    // when the fetchMovies is fulfilled, the movies will be set to the state
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.response; // action.payload is the data from the server
      state.loading = "loaded";
      state.error = null;
    });
    // when the fetchMovies is rejected, the movies will be set to the state
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.movies = [];
      state.loading = "error";
      state.error = action.error.error; // action.error.error is the error message from the server
    });
  },
});

export const selectMovies = (state) => state.moviesData;
export const movieReducer = moviesSlice.reducer;