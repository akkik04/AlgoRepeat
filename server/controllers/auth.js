import User from "../models/user.js";
import { hashPassword } from "../utils/authUtils.js";
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

// function to register a new user.
export const register = async (req, res) => {
    try {
        console.log(req.body);
        // destructure the email and password from the request body.
        const { email, password } = req.body;
        
        // validate email and password
        if(!password || password.length < 8){
            return res.status(400).json({ error: "Password is required and should be minimum 8 characters long" });
        }

        // check if user already exists.
        let user_preexists = await User.findOne({ email }).exec();
        if(user_preexists){
            return res.status(400).json({ error: "Email is already taken" });
        }

        // hash the password.
        const hashedPass = await hashPassword(password);

        // register the new user, and save it to the database.
        const user = new User({
            email,
            password: hashedPass,
        });
        await user.save();
        return res.status(200).json({ message: "Registration successful" });
        
    } catch (error) {
        console.error(error)
        return res.status(400).json({ error: "Error Occurred. Please try again" });
    }
};

// function to login a user
export const login = async (req, res) => {
    try {
        // destructure the email and password from the request body.
        const { email, password } = req.body;

        // validate email in the request body with database.
        const user = await User.findOne({ email }).exec();
        if(!user){
            return res.status(400).json({ error: "User not found! Did you sign-up?" });
        }

        // validate password in the request body with database.
        const passwordMatch = await compare(password, user.password)
        if(!passwordMatch){
            return res.status(400).json({ error: "Incorrect email or password!" });
        }

        // generate jwt token.
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        // remove password from the response object.
        const { password: hashedPassword, ...userWithoutPassword } = user.toObject();

        // send the token in the headers instead of using a cookie.
        res.setHeader("Authorization", `Bearer ${token}`);
        return res.status(200).json({ message: "Login successful", user: userWithoutPassword });

    } catch (error) {
        console.error(error);
        res.status(400).json("Error Occurred. Please try again");
    }
};

// function to logout a user.
export const logout = (req, res) => {
    try {
        // remove the "Authorization" header from the response.
        res.removeHeader("Authorization");
        res.status(200).json({ message: "Successfully Logged-Out" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// function to get the current user from the database.
export const currentUser = async (req, res) => { 
    try {
        // get the user from the database.
        const user = await User.findById(req.user._id).select("-password").exec();
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}