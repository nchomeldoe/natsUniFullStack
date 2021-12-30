const express = require("express");
const swaggerUI = require("swagger-ui-express");
const router = require("./routes/students.js");
const swaggerDocument = require("./config/swagger.js");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.use("/api", router);

app.get("/api", (req, res) => res.send("Welcome to my API!"));

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route")
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
