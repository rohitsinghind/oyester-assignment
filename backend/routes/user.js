const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../model/User")

router.route("/register").post(async (req,res) => {
    try {
        const { name, email, password } = req.body;
    
        let user = await User.findOne({ email });

        if (user) {
          return res
            .status(400)
            .json({ success: false, message: "User already exists" });
        }

        const encryptedPassword = await bcrypt.hash(password,10);
    
        user = await User.create({
          name,
          email,
          password:encryptedPassword,
        });
    
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    
        const options = {
          expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
    
        res.status(201).cookie("token", token, options).json({
          success: true,
          user,
          token,
        });

      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
});

router.route("/login").post(async (req,res) => {
    try {

        const {email, password} = req.body;

        const user = await User.findOne({ email })
        
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
       
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Incorrect password",
            })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        const options = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        };

        res.status(200).cookie("token", token, options).json({
            success: true,
            user,
            token,
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        })
    }
});

router.route("/logout").get(async (req,res) => {
  try {
    res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({
        success: true,
        message: "Logged out",
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router;