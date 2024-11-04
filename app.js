const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const broutes = require("routes");
// app.use("/api/v1/blog",broutes);

const BlogRoutes = require('./routes/blogRoutes');
app.use("/api/v1/blog", BlogRoutes);

app.listen(port, () => console.log("Server started in port: " + port));