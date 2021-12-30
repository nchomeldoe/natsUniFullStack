import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import * as Yup from "yup";
import React from "react";
import { navigate } from "@reach/router";

import FormField from "./FormField";
import SubjectFormField from "./SubjectFormField";

const StudentForm = ({
  initialValues,
  handleSubmit,
  typeOfForm,
  studentId,
}) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    age: Yup.number().required().min(0).max(100),
    // subject: Yup.array().required(), ????
    // https://github.com/jquense/yup
    email: Yup.string().email().required(),
  });

  const refreshPage = () => {
    window.location.reload();
  };

  const deleteStudent = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/students/${studentId}`,
        { method: "DELETE" }
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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box
            sx={{
              position: "relative",
              top: "150px",
              display: "flex",
              flexDirection: "column",
            }}
            spacing={2}
          >
            <div>
              <FormField
                name="firstName"
                label="First Name"
                helpMessage="Please enter first name"
              />
              <FormField
                name="lastName"
                label="Last Name"
                helpMessage="Please enter last name"
              />
            </div>
            <div>
              <FormField
                name="age"
                label="Age"
                helpMessage="Please enter age as a number"
              />
            </div>
            <div>
              <SubjectFormField
                name="subjects"
                label="Subjects"
                helpMessage="Please select at least one subject"
              />
            </div>
            <div>
              <FormField
                name="email"
                label="Email"
                helpMessage="Please enter a valid email address"
              />
            </div>
            <div>
              <Button
                variant="contained"
                sx={{ mr: 1, mb: 1 }}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
              <Button variant="outlined" onClick={refreshPage}>
                Reset
              </Button>
            </div>
            {typeOfForm === "Existing Student" ? (
              <div>
                <Button
                  onClick={deleteStudent}
                  variant="outlined"
                  color="error"
                  sx={{ mr: 1 }}
                >
                  Delete
                </Button>
              </div>
            ) : null}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;
