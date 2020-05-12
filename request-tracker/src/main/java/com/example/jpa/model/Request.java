package com.example.jpa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "request")
public class Request {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	// @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "request_seq")
	// @SequenceGenerator(name = "request_seq", sequenceName = "request_seq", initialValue = 1, allocationSize = 1)
	private long id;
	
	@Column(name = "category")
	private String category;

	@Column(name = "description")
	private String description;
	
	@Column(name = "status")
	private String status;

	public Request() {
		super();
	}

	public Request(String category, String description, String status) {
		super();
		this.category = category;
		this.description = description;
		this.status = status;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

}
