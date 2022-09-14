package com.mongodbexample.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongodbexample.documents.Student;

public interface StudentRepository extends MongoRepository<Student, Integer> {

}
