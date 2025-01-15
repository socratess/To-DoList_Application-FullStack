package com.project.todolistapplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.todolistapplication.dto.TasksDTO;
import com.project.todolistapplication.service.TasksService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/tasks")
public class TasksController {
    

@Autowired
private TasksService tasksService;


@GetMapping
@Operation(summary = "Get All Tasks", description = "Get a list of all tasks")
public List<TasksDTO> getAllTasks(){
    return tasksService.getAllTasks();
}

@GetMapping("/{id}")
@Operation(summary = "Get a Task", description = "Get a task By Id")
public ResponseEntity<TasksDTO> getTaskById(@PathVariable Long id){
    return ResponseEntity.ok(tasksService.getTaskById(id));
}

@PostMapping
@Operation(summary = "Create a Task", description = "Create a task with title, description,completed/uncompleted")
public TasksDTO createTask(@RequestBody TasksDTO tasksDTO){
    return tasksService.createTask(tasksDTO);
}

@PutMapping("/{id}")
@Operation(summary = "Update a Task", description = "Update a task with title, description,completed/uncompleted")
public ResponseEntity<TasksDTO> updateTask(@PathVariable Long id, @RequestBody TasksDTO tasksDTO){
return ResponseEntity.ok(tasksService.updateTask(id,tasksDTO));
}


@DeleteMapping("/{id}")
@Operation(summary = "Delete a Task", description = "Delete a task By Id")
public ResponseEntity<Void> deleteTask(@PathVariable Long id){
    tasksService.deleteTask(id);
    return ResponseEntity.noContent().build();
}

}
