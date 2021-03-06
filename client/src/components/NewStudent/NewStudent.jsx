import React, { useContext } from "react";
import { Container, Typography, Stack } from "@mui/material";
import { navigate } from "@reach/router";

import StudentForm from "../StudentForm/StudentForm";
import { NotificationContext } from "../../context/NotificationProvider";

const NewStudent = () => {
  const { setSnack } = useContext(NotificationContext);

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
        setSnack({
          // handle backend errors
          message: "Sorry, there was an error! Please try again.",
          severity: "error",
          open: true,
        });
        throw res;
      } else {
        const data = await res.json();
        const studentId = data.student.id;
        setSnack({
          message: `${values.firstName} ${values.lastName} has been created!`,
          severity: "success",
          open: true,
        });
        navigate(`/student/${studentId}`);
      }
    } catch (err) {
      setSnack({
        message: "Sorry, there was an error! Please try again.",
        severity: "error",
        open: true,
      });
      console.error(err);
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
