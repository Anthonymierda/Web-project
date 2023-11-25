const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
//this is a route, a route defines the action that needs to be executed when recieving a request to a certain path
//GET POST PUT DELETE -> RESTFUL API
//req -> request -> header, body,
//res -> response
router.post("/register", async (req, res) => {
  // Define a new user 
  const newUser = new User({
    // The req. body object allows you to access data in a string or JSON object from the client side.
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  // Best Practice: Error Handling: 
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    //user in the database: to check whether 1 use exists in mongoose db
    const user = await User.findOne({ username: req.body.username }); 

    // response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;




