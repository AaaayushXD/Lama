import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/Users.js";
import User from "../models/Users.js";

// Registration 
export const register = async (req, res) => {
    try {
        const { fullName, email, password, picturePath, friends, location, education, occupation } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User ({
            fullName,
            email,
            hashedPassword,
            picturePath,
            friends,
            location,
            education,
            occupation
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

// Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(400).json({ msg: "User not found" });

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) return res.status(400).json({ msg: "Password invalid" });
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({toke, user});
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}