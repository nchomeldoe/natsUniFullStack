import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import React, { useState } from "react";

const DeleteModal = ({ studentName }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleShowModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

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
          <Button color="primary">Delete</Button>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
