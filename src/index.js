const express = require("express");
const path = require('path');
const cors = require("cors");

const recipesRouter = require('./routers/recipes');

const app = express();
const { handleError } = require('./utils/error');

app.use(cors());

app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
      `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.redirect("/api/v1/recipes");
  });
  

app.use('/api/v1/recipes', recipesRouter);

app.use(handleError);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});