const path = require("path");

const aboutController = {
    about : (req, res) =>{res.sendFile(path.resolve(__dirname,"../views/about.html"))}
}

module.exports = aboutController;