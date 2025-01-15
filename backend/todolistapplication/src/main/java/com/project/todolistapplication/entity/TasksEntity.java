package com.project.todolistapplication.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name= "tasks")
public class TasksEntity {
    


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@NotNull
@Column(nullable = false, length = 100)
@Size(min=5,max=100)
private String title;

@NotNull
@Column(nullable = false, length = 1000)
@Size(min=5,max=1000)
private String description;

@NotNull
@Column(nullable = false)
private boolean completed;

public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getTitle() {
    return title;
}

public void setTitle(String title) {
    this.title = title;
}

public String getDescription() {
    return description;
}

public void setDescription(String description) {
    this.description = description;
}

public boolean isCompleted() {
    return completed;
}

public void setCompleted(boolean completed) {
    this.completed = completed;
}

}
