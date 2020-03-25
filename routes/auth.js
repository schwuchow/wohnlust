const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');

// REGISTER
router.post('/register', async (req, res) => {

    // VALIDATION
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in db
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.json({ user: user._id });
        // res.json(savedUser);
    } catch(error) {
        res.json({ message: error });
    }
});

// LOGIN
router.post('/login', async (req, res) => {

    // VALIDATION
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is in db
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Email is not found');

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) return res.status(400).send('Invalid password');

    // Create & assign jwt
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET); 
    res.header('auth-token', token).send(token);

    res.send('Login');
});

module.exports = router;