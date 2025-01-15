import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import AppNavbar from './layouts/AppNavbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Container,Button  } from 'react-bootstrap';
import ToDoListPage from './pages/ToDoListPage';
import { useEffect, useState } from "react";

function App() {


  const [darkMode, setDarkMode] = useState(false);

  // Cambia la clase del body según el tema
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <Router>
       <div className={darkMode ? 'app dark' : 'app'}>
       <AppNavbar/>
       <Container className="d-flex flex-column align-items-end py-3">
          <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Container>
    <Container>
<Routes>
  <Route  path='/' element={<ToDoListPage/>}/>
</Routes>
  </Container>
  </div>
  </Router>
  );
}

export default App;
