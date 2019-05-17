package com.globomatics.Bike.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.globomatics.Bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
