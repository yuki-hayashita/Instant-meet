package com.geek.scheduler.entity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Getter
@Setter
@Entity
@Table(name = "time_slots")
public class TimeSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-generated id
    private Long id;

    @JsonProperty("start_time")
    private ZonedDateTime startTime;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "event_id")
    private Event event;
}
