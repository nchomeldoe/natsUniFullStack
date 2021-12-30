const findAll = {
  tags: ["Students"],
  description: "GET all students - receive a list of all the students",
  operationId: "findAll",
  responses: {
    200: {
      description: "The students were received",
      content: "application/json",
    },
  },
};

const find = {
  tags: ["Students"],
  description: "GET one student - receive a particular student using their id",
  operationId: "find",
  responses: {
    200: {
      description: "The student was received",
      content: "application/json",
    },
  },
};

const create = {
  tags: ["Students"],
  description: "POST a student - add a student to the list of students",
  operationId: "create",
  responses: {
    201: {
      description: "The student was successfully created",
      content: "application/json",
    },
  },
};

const destroy = {
  tags: ["Students"],
  description:
    "DELETE a student - remove a student from the list of students using its id",
  operationId: "destroy",
  responses: {
    204: {
      description: "The student was successfully destroyed",
      content: "application/json",
    },
  },
};

const modify = {
  tags: ["Students"],
  description:
    "PATCH a student - update a student from the list of students using its id",
  operationId: "modify",
  responses: {
    204: {
      description: "The student was successfully modified",
      content: "application/json",
    },
  },
};

module.exports = { findAll, find, create, destroy, modify };
