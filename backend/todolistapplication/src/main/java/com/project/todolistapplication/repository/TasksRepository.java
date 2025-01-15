package com.project.todolistapplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.todolistapplication.entity.TasksEntity;

@Repository
public interface TasksRepository extends JpaRepository<TasksEntity, Long> {
    
}
