import {Button,Modal} from 'react-bootstrap';

function ToDoListModal({showConfirmModal, handleClose, handleConfirm, message}){

    return (


        <Modal show={showConfirmModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>


    );



}


export default ToDoListModal;