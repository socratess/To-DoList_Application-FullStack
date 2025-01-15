package com.project.todolistapplication.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.todolistapplication.dto.TasksDTO;
import com.project.todolistapplication.entity.TasksEntity;
import com.project.todolistapplication.exception.ResourceNotFoundException;
import com.project.todolistapplication.repository.TasksRepository;

@Service
public class TasksService {
    
@Autowired
private TasksRepository  tasksRepository;

public List<TasksDTO> getAllTasks() {
    return tasksRepository.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
}

public TasksDTO getTaskById(Long id) {
   return convertToDTO(tasksRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found.")));
}

public TasksDTO createTask(TasksDTO tasksDTO) {
 return convertToDTO(tasksRepository.save(convertToEntity(tasksDTO)));
}

public TasksDTO updateTask(Long id, TasksDTO tasksDTO) {
 TasksEntity tEntity = tasksRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found."));
 tEntity.setTitle(tasksDTO.getTitle());
 tEntity.setDescription(tasksDTO.getDescription());
 tEntity.setCompleted(tasksDTO.isCompleted());
 return convertToDTO(tasksRepository.save(tEntity));
}

public void deleteTask(Long id) {
   tasksRepository.delete(tasksRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Task not found.")));
}

private TasksDTO convertToDTO(TasksEntity tEntity){
    TasksDTO tasksDTO = new TasksDTO();
    tasksDTO.setId(tEntity.getId());
    tasksDTO.setTitle(tEntity.getTitle());
    tasksDTO.setDescription(tEntity.getDescription());
    tasksDTO.setCompleted(tEntity.isCompleted());

    return tasksDTO;
}


private TasksEntity convertToEntity(TasksDTO tDto){

    TasksEntity tasksEntity= new TasksEntity();
    tasksEntity.setTitle(tDto.getTitle());
    tasksEntity.setDescription(tDto.getDescription());
    tasksEntity.setCompleted(tDto.isCompleted());

    return tasksEntity;
    
}

}
