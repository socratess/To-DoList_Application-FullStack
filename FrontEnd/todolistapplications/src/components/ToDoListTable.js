import {Button,Table, Form} from 'react-bootstrap';
import { useState } from 'react';

function ToDoListTable({tasks, handleDelete, handleShow}){
  
  const [filter, setFilter] = useState('all'); // Estado para manejar el filtro

  // Filtrar las tareas según el estado seleccionado
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.completed === (filter === 'completed'));



return (


  <>
   <Form.Group className="mb-3">
   <Form.Label>Filter Tasks</Form.Label>
   <div>
   <Form.Check
            inline
            label="All"
            name="filter"
            type="radio"
            id="filter-all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
<Form.Check
            inline
            label="Completed"
            name="filter"
            type="radio"
            id="filter-completed"
            checked={filter === 'completed'}
            onChange={() => setFilter('completed')}
          />
          <Form.Check
            inline
            label="Pending"
            name="filter"
            type="radio"
            id="filter-pending"
            checked={filter === 'pending'}
            onChange={() => setFilter('pending')}
          />
   </div>
   </Form.Group>

  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Completed</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredTasks.map(task => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.completed ?
            (<span style={{ color: 'green' }}>✔️</span>) :
            (<span style={{ color: 'red' }}>❌</span>)}</td>
          <td>
            <Button variant='warning' onClick={e => { e.stopPropagation(); handleShow(task); } }>
              Update
            </Button>
            {" "}
            <Button variant='danger' onClick={e => { e.stopPropagation(); handleDelete(task.id); } }>
              Delete
            </Button>
          </td>

        </tr>
      ))}
    </tbody>
  </Table></>
  );
}

export default ToDoListTable;