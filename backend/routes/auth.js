const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require("../models/User.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_Secret = "ashdkriwl24398u7nfdgk";
router.post(
    '/createUser',
    [
        body('name', "Enter a valid name").isLength({ min: 3 }),
        body('email', "Enter a valid email").isEmail(),
        body('password', "Enter a valid password").isLength({ min: 5 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {

            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Sorry a user with this email already exists" })
            }
            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_Secret);
            res.json({ authToken });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Some error occured");
        }

    });

module.exports = router;
