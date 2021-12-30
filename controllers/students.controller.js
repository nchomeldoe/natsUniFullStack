const db = require("../config/firebase.js");
const Student = require("../models/student.js");

// utility function
const getStudentFromId = async (id) => {
  const dbRes = await db.collection("students").where("id", "==", id).get();
  return dbRes.docs[0];
};

// controllers
const findAll = async (req, res) => {
  const dbRes = await db.collection("students").get();
  let students = dbRes.docs.map((doc) => doc.data());
  students = students.sort((a, b) =>
    `${a.lastName} ${a.firstName}` > `${b.lastName} ${b.firstName}` ? 1 : -1
  );
  students = students.map(({ email, id, firstName, lastName }) => {
    return { email, id, name: `${firstName} ${lastName}` };
  });
  res.status(200).send({ students });
};

const find = async (req, res) => {
  const doc = await getStudentFromId(req.params.id);
  const student = doc.data();
  res.status(200).send({ student });
};

const create = async (req, res) => {
  const student = new Student(req.body);
  await db
    .collection("students")
    .doc()
    .set({ ...student });

  res.status(201).send({ student });
};

const destroy = async (req, res) => {
  const doc = await getStudentFromId(req.params.id);
  await doc.ref.delete();
  res.status(204).send();
};

const modify = async (req, res) => {
  const doc = await getStudentFromId(req.params.id);
  const oldStudent = doc.data();
  const newStudent = { ...oldStudent, ...req.body };
  newStudent.dateModified = new Date().toUTCString();
  await doc.ref.set(newStudent);
  res.status(201).send({ newStudent });
};

module.exports = { findAll, find, create, destroy, modify };
