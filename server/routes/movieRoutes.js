// const movies = require("../Data/movies")
const Movie = require("mongoose").model("Movie");


module.exports =(app) => {
    app.post("/api/v1/movies/add", async (req, res) => {
    console.log("ADD NEW MOVIE")
    const {name, image, desc} = req.body;
    try {
        const movie = await Movie.findOne({name});
        if(movie){
            return res.status(400).json({message: "Movie already exists!"});
        };
        movieFields = {name, image, desc};

        const response = await Movie.create(movieFields);
        // const response = movies;

        res.status(201).json({ message: "Movie added successfully!", response });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
    });
    // app.get("/api/v1/get/movies", (req, res) => {
    // console.log("Get Movies")
    // const response = movies;

    // res.status(200).json({ message: "Movie fetched successfully!", response });
    // });
};