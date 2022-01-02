import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { navigate } from "@reach/router";

import StudentForm from "../StudentForm/StudentForm";

const NewStudent = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    subjects: [],
  };

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(`http://localhost:4000/api/students/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        throw res;
      } else {
        navigate(`/`);
      }
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <>
      <Container maxWidth="md">
        <Stack
          direction="column"
          spacing={2}
          sx={{ position: "relative", top: "100px", alignItems: "center" }}
        >
          <Typography variant="h5">New student</Typography>
        </Stack>
        <StudentForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
        />
      </Container>
    </>
  );
};

export default NewStudent;
