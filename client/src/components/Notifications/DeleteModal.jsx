import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";

import { NotificationContext } from "../../context/NotificationProvider";

const DeleteModal = ({ studentName, studentId }) => {
  const { setSnack } = useContext(NotificationContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleDelete = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `http://localhost:4000/api/students/${studentId}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        setSnack({
          // handle backend errors
          message: "Sorry, there was an error! Please try again.",
          severity: "error",
          open: true,
        });
        throw res;
      } else {
        setSnack({
          message: `${studentName} has been deleted!`,
          severity: "success",
          open: true,
        });
        navigate(`/`);
      }
    } catch (err) {
      setSnack({
        message: "Sorry, there was an error! Please try again.",
        severity: "error",
        open: true,
      });
      console.error(err);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="error"
        sx={{ mr: 1 }}
        onClick={handleShowModal}
      >
        Delete
      </Button>
      <Dialog
        open={modalOpen}
        onClose={() => {
          handleCloseModal();
        }}
      >
        <DialogTitle>
          Are you sure you want to delete {studentName}?
        </DialogTitle>
        <DialogActions>
          <Button
            color="primary"
            onClick={handleDelete}
            disabled={isSubmitting}
          >
            Delete
          </Button>
          <Button
            onClick={handleCloseModal}
            color="secondary"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
