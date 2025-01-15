import axios from 'axios';

const API_URL = "http://localhost:8082/api/tasks";

const getAll = () => axios.get(API_URL);
const getOne = (id) => axios.get(`${API_URL}/${id}`);
const createOne = (data) => axios.post(API_URL,data);
const updateOne = (id,data) => axios.put(`${API_URL}/${id}`,data);
const deleteOne = (id) => axios.delete(`${API_URL}/${id}`);


const ToDoListService = {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne
}

export default ToDoListService;
