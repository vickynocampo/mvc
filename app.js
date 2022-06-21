const express = require('express');
const app = express();
const path = require("path");
const port = 3000;
const mainRoutes = require("./routes/main");
const aboutRoutes = require("./routes/about")
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.use("/", mainRoutes) 
app.use("/about", aboutRoutes)

app.listen(port, ()=>{console.log('Servidor funcionando en puerto 3000');}); 