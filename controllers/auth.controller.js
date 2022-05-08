const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const SALT = 10;

function encryptPassword(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, SALT, (err, encryptedPassword) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(encryptedPassword);
        });
    });
}

function checkPassword(encryptedPassword, password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(isPasswordCorrect);
        });
    });
}

function createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Secret");
}

module.exports = {
    async whoAmI(req, res) {
        res.status(200).json(req.user);
    },
    
    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];
            const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || "Secret");
    
            req.user = await User.findByPk(tokenPayload.id);
            next();
        }
    
        catch (error) {
            res.status(401).json({
                message: "Unauthorized",
            })
        }
    },

    async register(req, res) {
        const username = req.body.username;
        const encryptedPassword = await encryptPassword(req.body.password);
        const user = await User.create({ username, encryptedPassword });
        res.status(201).json({
            id: user.id,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    },

    async login(req, res) {
        const username = req.body.username.toLowerCase(); // Biar case insensitive
        const password = req.body.password;

        const user = await User.findOne({
            where: { username },
        });

        if (!user) {
            res.status(404).json({ message: "Username not found!" });
            return;
        };

        const isPasswordCorrect = await checkPassword(
            user.encryptedPassword,
            password
        );

        if (!isPasswordCorrect) {
            res.status(401).json({ message: "Password is incorrect! Please try again later." });
            return;
        };

        const token = createToken({
            id: user.id,
            username: user.username,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });


        res.status(201).json({
            id: user.id,
            username: user.username,
            token, // Kita bakal ngomongin ini lagi nanti.
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    },
};