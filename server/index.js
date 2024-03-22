const express = require("express");
const articleRoutes = require("./src/articles/routes.js");
const courseRoutes = require("./src/courses/routes.js");
const userRoutes = require("./src/users/routes.js");
const imagesRoutes = require("./src/images/routes.js");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
// require("dotenv").config();


console.log(process.env.PGUSER);




const app = express();
// const number = 8080

const port = process.env.PORT;

const port1= 8080

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {});

//routes to /api/articles will be handled in /src/articles/routes.js
app.use("/api/articles", articleRoutes);
app.use("/api/courses", courseRoutes);
app.use('/api/users', userRoutes);
app.use("/api/images", imagesRoutes); // images routes

app.listen(port1, () => console.log(`app listening on port ${port1}`));