import { Modal } from "react-bootstrap";
import ToDoListForm from "./ToDoListForm";




function ToDoListModalEditable({showModal,handleClose, task, setTask, errors, handleSave}){

    return (
<Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{task.id ? "Update Task": "Create Task"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<ToDoListForm
task={task}
setTask = {setTask} 
errors = {errors}
handleSave = {handleSave}
/>
        </Modal.Body>
      </Modal>

    )
}

export default ToDoListModalEditable;