const express = require("express");
const articleRoutes = require("./src/articles/routes.js");
const courseRoutes = require("./src/courses/routes.js");
const userRoutes = require("./src/users/routes.js");
const cors = require("cors");
require("dotenv").config();


console.log(process.env.PGUSER);




const app = express();

const port = process.env.PORT;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {});

//routes to /api/articles will be handled in /src/articles/routes.js
app.use("/api/articles", articleRoutes);
app.use("/api/courses", courseRoutes);
app.use('/api/users', userRoutes);


app.listen(port, () => console.log(`app listening on port ${port}`));
