import jst from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields.')
    }

    // Check if user exists
    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data' })
})