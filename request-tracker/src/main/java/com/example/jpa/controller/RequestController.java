package com.example.jpa.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jpa.exception.ResourceNotFoundException;
import com.example.jpa.model.Request;
import com.example.jpa.repository.RequestRepository;

// @CrossOrigin(origins = {"http://localhost:9000", "http://localhost:4545"}, maxAge = 3600)
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/")
public class RequestController {

	@Autowired
	private RequestRepository requestRepository;
	
	@GetMapping("requests")
	public List<Request> getAllRequests() {
		// return this.requestRepository.findAll();
		return this.requestRepository.findByOrderByIdAsc();
		// return this.requestRepository.findAll(Sort.by(Sort.Direction.ASC, "seatNumber"));
	}
	
	@GetMapping("/requests/{id}") 
	public ResponseEntity<Request> getRequestById(@PathVariable (value = "id") final Long requestId) 
		throws ResourceNotFoundException {
		final Request request = requestRepository.findById(requestId)
				.orElseThrow(() -> new ResourceNotFoundException("RequestId not found for this id :: " + requestId));
			return ResponseEntity.ok().body(request);		
	}
	
	@PostMapping("requests")
	public Request createRequest(@RequestBody final Request request) {
		return this.requestRepository.save(request);
	}
	
	@PutMapping("requests/{id}")
	public ResponseEntity<Request> updateRequest(@PathVariable (value = "id") final Long requestId, 
			@Valid @RequestBody final Request requestDetails) throws ResourceNotFoundException {
		
		final Request request = requestRepository.findById(requestId)
				.orElseThrow(() -> new ResourceNotFoundException("RequestId not found for this id :: " + requestId));
		
		request.setCategory(requestDetails.getCategory());
		request.setDescription(requestDetails.getDescription());
		request.setStatus(requestDetails.getStatus());
		
		return ResponseEntity.ok(this.requestRepository.save(request));
	}
	
}
