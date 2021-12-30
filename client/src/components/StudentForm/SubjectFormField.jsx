import React, { useState } from "react";
import { Field } from "formik";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Box,
} from "@mui/material";

const SubjectFormField = ({ name, label, helpMessage }) => {
  const taughtSubjects = [
    "Accountancy",
    "Biology",
    "Classics",
    "Creative Writing",
    "Economics",
    "French",
    "Geography",
    "German",
    "Mathematics",
    "Philosophy",
    "Photography",
  ];

  return (
    <>
      <Field name={name}>
        {({ field, form, meta }) => (
          <FormControl sx={{ mb: 1, minWidth: 250, maxWidth: 350 }}>
            <InputLabel id="subjects-label">{label}</InputLabel>
            <Select
              labelId="subjects-label"
              id="subjects"
              multiple
              value={field.value}
              onChange={(e) => {
                form.setFieldValue("subjects", e.target.value);
              }}
              input={
                <OutlinedInput id="select-multiple-chip" label="Subjects" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {taughtSubjects.map((subject) => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </Field>
    </>
  );
};
export default SubjectFormField;
