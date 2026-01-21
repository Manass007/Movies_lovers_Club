// const Users = require("../Data/Users")
const mongoose = require("mongoose");
const Users = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/v1/user/add", async (req, res) => {
    console.log("ADD NEW User");
    const { name, email } = req.body;
    try {
      const User = await Users.findOne({ email });
      if (User) {
        return res.status(400).json({ message: "User already exists!" });
      }
      UserFields = { name, email };

      const response = await Users.create(UserFields);
      // const response = Users;

      res.status(201).json({ message: "User added successfully!", response });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }

});
app.get("/api/v1/get/alluser", async (req, res) => {
  console.log("Get Users");
  const User = await Users.find();
  if (!User) {
    return res.status(400).json({ message: "No Users are there" });
  }

  res.status(201).json({ message: "User!", User });
});
    // } catch (error) {
        //         console.log(error);
        //         res.status(500).json({ message: error.message });
        // }
        // try {
            //     app.get("/api/v1/get/User", (req, res) => {
                //     console.log("Get Users")
                //     if(Users){
                    //         return res.status(400).json({message: "No Users are there"});
                    //     };
                    //     const response = Users;
                    
                    //     res.status(200).json({ message: "User fetched successfully!", response });
                    //     });
                    // } catch (error) {
                        //         console.log(error);
                        //         res.status(500).json({ message: error.message });
                        // }
  // app.get("/api/v1/get/Users", (req, res) => {
  // console.log("Get Users")
  // const response = Users;

  // res.status(200).json({ message: "User fetched successfully!", response });
  // });
};
