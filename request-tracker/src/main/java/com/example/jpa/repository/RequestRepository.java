package com.example.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.example.jpa.model.Request;

@Repository
public interface RequestRepository extends JpaRepository<Request, Long> {

    List<Request> findByOrderByIdAsc();

}
