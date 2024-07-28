const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { where } = require("sequelize");

router.post("/", async (req, res) => {
    const {username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
             username: username,
             password : hash, 
            });
            res.json("Success");
    });
    router.post("/", async (req, res) => {
        const {username, password } = req.body;
        
        const user = await Users.findOne({where: {username: username}});

        if  (!user) res.json({error: "User tidak ditemukan"});

        bcrypt.compare(password, user.password).then((match) => {
            if (!match) res.json({error: "Periksa kembali username dan password"});

            res.json("Berhasil Login");
        });
        });

});

module.exports = router;