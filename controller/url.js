const express = require('express'); 
const { nanoid } = require('nanoid');
const URL = require('../models/url.js');
// const app = express();
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));

// console.log(nanoid(8));
async function handleGenerateNewShortURL(req, res) {
    const body = req.body.longURL;

    // if(!body.longURL)
    // {
    //     return res.status(400).json({ error: "url is required" });
    // }
    const short = nanoid(4);

    await URL.create( {
        shortendURL: short, 
        redirectURL: req.body.longURL,
        visited: [],
        createdBy: req.user._id,
    });

    return res.redirect('/myUrls');
}

module.exports = {
    handleGenerateNewShortURL,
}