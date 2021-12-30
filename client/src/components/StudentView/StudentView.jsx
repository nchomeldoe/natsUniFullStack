import React, { useEffect, useState } from "react";
import { Container, Typography, Stack } from "@mui/material";
import { useMatch } from "@reach/router";
import Loader from "react-loader-spinner";
import { navigate } from "@reach/router";

import StudentForm from "../StudentForm/StudentForm";

const StudentView = () => {
  const { studentId } = useMatch("/student/:studentId");
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/students/${studentId}`
        );
        if (!res.ok) {
          throw res;
        }
        const data = await res.json();
        const studentData = data.student;
        setStudent(studentData);
      } catch (err) {
        console.err(err);
      }
    };
    fetchStudentData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/students/${studentId}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
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
      {student ? (
        <Container maxWidth="md">
          <Stack
            direction="column"
            spacing={2}
            sx={{ position: "relative", top: "100px", alignItems: "center" }}
          >
            <Typography variant="h5">Student view</Typography>
          </Stack>
          <StudentForm
            initialValues={student}
            handleSubmit={handleSubmit}
            typeOfForm={"Existing Student"}
            studentId={studentId}
          />
        </Container>
      ) : (
        <Container maxWidth="md">
          <Stack
            sx={{ position: "relative", top: "100px", alignItems: "center" }}
          >
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              alignItems="center"
            />
          </Stack>
        </Container>
      )}
    </>
  );
};

export default StudentView;
