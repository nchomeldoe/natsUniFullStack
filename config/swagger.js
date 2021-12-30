const students = require("../docs/student.swagger.js");

const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "Nat's Node API",
    description:
      "The documentation for the Node API I built on the _nology self-paced course",
    contact: {
      name: "Nat",
      email: "",
      url: "",
    },
  },
  servers: {
    url: "https://localhost:4000/",
    description: "Local server",
  },
  tags: {
    name: "Students",
  },
  paths: {
    "/api/students": {
      get: students.findAll,
      post: students.create,
    },
    "/api/students/:id": {
      get: students.find,
      delete: students.destroy,
      patch: students.modify,
    },
  },
};

module.exports = swaggerDocument;
