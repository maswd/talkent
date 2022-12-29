import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


export default function BasicModal(props, { children }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="text-6xl">
        {props.text}
      </button>
      <Modal
        className="text-fuchsia-700"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute inset-0 bg-red-800 w-1/2 h-1/2 p-10 translate-y-1/2 -translate-x-1/2 ">
          {children}
        </Box>
      </Modal>
    </div>
  );
}
