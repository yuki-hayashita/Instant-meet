package com.geek.scheduler.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
public class AvailabilityDTO {

    private Long id;
    private ZonedDateTime start_time;
    private String user; // note this is the name of the User


    public AvailabilityDTO(Availability availability) {
        this.id = availability.getId();
        this.start_time = availability.getStart_time();
        this.user = availability.getUser().getName();
    }
}
