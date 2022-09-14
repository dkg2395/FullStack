package com.mongodbexample.controller;

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

import com.mongodbexample.documents.Student;
import com.mongodbexample.repositories.StudentRepository;

@RestController
@RequestMapping("students")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@GetMapping
	public ResponseEntity<List<Student>> getAllStudent() {
		return ResponseEntity.ok(studentRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Student> getStudent(@PathVariable Integer id) {
		return ResponseEntity.ok(studentRepository.findById(id).get());
	}

	@PostMapping
	public ResponseEntity<Student> createStudent(@RequestBody Student student) {

		return ResponseEntity.ok(studentRepository.save(student));

	}

	@PutMapping
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {

		return ResponseEntity.ok(studentRepository.save(student));

	}

	@DeleteMapping("/{id}")
	public String deleteStudent(@PathVariable Integer id) {
		studentRepository.deleteById(id);
		return "Student deleted";
	}

}
