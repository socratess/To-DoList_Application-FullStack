import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
import ToDoListService from '../services/toDoListService'
import ToDoListTable from '../components/ToDoListTable'
import ToDoListModal from '../components/ToDoListModal'
import ToDoListModalEditable from '../components/ToDoListModalEditable'

function ToDoListPage(){

const [task, setTask] = useState([]);
const [showModal, setShowModal] = useState(false);
const [showConfirmModal, setShowConfirmModal] = useState(false);
const [taskIdDelete, setTaskIdDelete] = useState(null);
const [error, setError] = useState([]);
const [selectTask, setSelectTask] = useState({nombre:"", description:"", completed:""});
//const navigate = useNavigate();



const loadingTask = async () => {

    try {
        const response = await ToDoListService.getAll()
        setTask(response.data)
    } catch (error) {
        console.log("Error getting tasks ", error)
    }
}


useEffect( () => {
    loadingTask()
},[])


const handleShow = (task ={nombre:"", description:"", completed:true}) =>{
   setSelectTask({
      ...task, 
     completed: task.completed===undefined ? true : task.completed
})
    setError({})
    setShowModal(true)
}


const handleDelete = (id) => {
    setTaskIdDelete(id)
    setShowConfirmModal(true)
};

const handleClose = () => {
    setShowModal(false)
};

const confirmDeletion = async () => {
    try {
        await ToDoListService.deleteOne(taskIdDelete)
        loadingTask()
    } catch (error) {
        console.log("Task error deleting.", error)
    }
    setShowConfirmModal(false)
}


const handleSave = async () => {
    if(!checkForm()){
        return
    }
    try {
   
if(selectTask.id){
    await ToDoListService.updateOne(selectTask.id, selectTask)
}else{
    await ToDoListService.createOne(selectTask)
}
loadingTask()
 } catch (error) {
    console.log("Task error saving.", error)
 } 
 setShowModal(false)  
};


const checkForm = () => {

    const newErrors = {}


if(selectTask.title.length < 0 || selectTask.title.length > 100){
newErrors.name = "The title should be between 0 and 100";}

if(selectTask.description.length < 0 || selectTask.description.length > 1000){
    newErrors.name = "The description should be between 0 and 1000";}

    setError(newErrors)

    return Object.keys(newErrors).length === 0
}






return(
    <Container className="mt-3">
        <h1>Tasks</h1>


<Button variant="primary" onClick={() => handleShow()}>Create New Task</Button>

{" "}

          <ToDoListTable 
          tasks={task}
          handleDelete={handleDelete}
          handleShow={handleShow}
          />

          <ToDoListModal
          showConfirmModal={showConfirmModal}
          handleClose={() =>setShowConfirmModal(false)}
          handleConfirm={confirmDeletion}
          message="¿Are you sure to delete it?"
          />


          <ToDoListModalEditable
          showModal={showModal}
          handleClose={handleClose}
          task={selectTask}
          setTask = {setSelectTask}
            errors ={error}
            handleSave = {handleSave}
          />
    </Container>
)
}

export default ToDoListPage;