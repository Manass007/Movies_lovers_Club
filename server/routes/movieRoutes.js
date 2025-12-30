const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

// const movies = require("../data/movies")

module.exports = (app) => {
  // Add Movie
  app.post("/api/v1/movie/add", async (req, res) => {
    console.log("Add Movie");
    const { name, image, desc} = req.body;
    try {
      const movie = await Movie.findOne({ name }); // Check if user already exists
      if (movie) {
        return res.status(400).json({ message: "Movie already exists" });
      }
      movieFields = {
        name,
        image,
        desc
      };
      const response = await Movie.create(movieFields);
      res.status(201).json({ message: "Movie added successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  //   something.com/login.php?id=23
  // Get One Specific Movie
  app.get("/api/v1/get/movie/:id", async (req, res) => {
    const { id } = req.params;
    const response = await Movie.findById(id);
    res.status(200).json({ message: "User fetched successfully", response });
  });

  // Get All Movies
  app.get("/api/v1/get/movies", async (req, res) => {
    console.log("GET ALL MOVIES");
    try {
      const response = await Movie.find();
      
      res
        .status(200)
        .json({ message: "Movies fetched successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

  // Update Movie Info
  app.put("/api/v1/update/movie/:id", async (req, res) => {
    const { id } = req.params;
    const { name, image, desc } = req.body;
    try {
      const response = await Movie.updateOne({ _id: id }, { name, image, desc });
      res.status(200).json({ message: "movie updated successfully", response });
    } catch (error) {
      console.log(error);S
      res.status(500).json({ message: error.message });
    }
  });

  // Delete Movie
  app.delete("/api/v1/delete/movie/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const response = await Movie.findByIdAndDelete(id);
      res.status(200).json({ message: "User deleted successfully", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
  // Test
  // app.get("/api/v1/get/movie", (req, res) => {
  //   //   const { id } = req.params;
  //   //   const response = "The Shawshank Redemption";
  //   const response = movies;
  //   console.log(movies);
  //   //   const response = await Movie.findById(id);

  //   res.status(200).json({ message: "Movie fetched successfully!", response });
  // });
};