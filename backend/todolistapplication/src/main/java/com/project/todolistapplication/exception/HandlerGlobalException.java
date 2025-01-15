package com.project.todolistapplication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class HandlerGlobalException {
    
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<?> manejadorRecursoNoEncontrado(ResourceNotFoundException recursoNoEncontradoExcepcion){
  return  ResponseEntity.status(HttpStatus.NOT_FOUND).body(recursoNoEncontradoExcepcion.getMessage());  
}


@ExceptionHandler(Exception.class)
public ResponseEntity<?> uniqueHandlerGlobalException(Exception exception){
  return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server internal error.");  
}

}
