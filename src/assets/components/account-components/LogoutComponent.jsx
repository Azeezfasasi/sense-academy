import React, {useContext, useState} from "react";
import { ProfileContext } from "@/assets/contextAPI/ProfileContext";
import { Modal, ButtonToolbar, Button, Placeholder } from 'rsuite';
  
  const LogoutComponent = () => {
    const { logout } = useContext(ProfileContext);
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    return (
      <>
      <div className="">
        <ButtonToolbar style={{display: "flex", justifyContent: "left", }}>
            <Button size="xs" onClick={() => handleOpen('xs')} style={{width: "100%", backgroundColor: "transparent", textAlign: "left"}}>Logout</Button>
        </ButtonToolbar>

        <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
            <Modal.Title style={{fontWeight: "bold"}}>Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Logout from your account</p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose} appearance="subtle">
                No
            </Button>
            <Button onClick={logout} appearance="primary">
                Yes
            </Button>
            </Modal.Footer>
        </Modal>
      </div>
      </>
    )
  }

  export default LogoutComponent