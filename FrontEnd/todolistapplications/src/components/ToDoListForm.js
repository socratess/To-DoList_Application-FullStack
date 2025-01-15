import {Button, Form} from 'react-bootstrap';

function ToDoListForm({task, setTask, errors, handleSave}){

const handlechange = (e) => {

const {name, value, checked} = e.target;


if(name==='completed' || name==='pending'){

  setTask(prevState => ({
    ...prevState, 
    completed: name==='completed'? checked : !checked,
  }));

}
else{
  setTask(prevState => ({...prevState, [name]:value}))
}

}


    return (

        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
              type="text"
              name="title" 
              placeholder="Title of the task"
              value={task.title}
              onChange={handlechange}
              isInvalid={!!errors.title}
              />
          <Form.Control.Feedback type='invalid'>
              {errors.title}
          </Form.Control.Feedback>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
              as="textarea"
              rows={10}
              name="description" 
              placeholder="Description of the task"
              value={task.description}
              onChange={handlechange}
              isInvalid={!!errors.description}
              />
          <Form.Control.Feedback type='invalid'>
              {errors.description}
          </Form.Control.Feedback>
        </Form.Group>
  


        <Form.Group className="mb-3">
        <Form.Label>Completed</Form.Label>
        <Form.Check
            type="checkbox" 
            name="completed" 
            checked={task.completed === true}
            onChange={handlechange}
            label="Yes - Completed"
            isInvalid={!!errors.completed}
            />    
  <Form.Check
            type="checkbox" 
            name="pending" 
            checked={task.completed === false}
            onChange={handlechange}
            label="No - Pending"
            isInvalid={!!errors.completed}
            />  
        <Form.Control.Feedback type='invalid'>
            {errors.completed}
        </Form.Control.Feedback>
      </Form.Group>


        <Button variant="primary" onClick={() => handleSave()}>
          Save
        </Button>
      </Form>


    );
}

export default ToDoListForm;