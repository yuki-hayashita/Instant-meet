package com.geek.scheduler.entity;
import com.geek.scheduler.createEvent.Request;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto-generated id
    private Long id;

    private String title;

    @Column(unique = true)
    private String link;

    private LocalTime earliest_time;
    private LocalTime latest_time;

    private ZoneId timeZone;

    @OneToMany(mappedBy = "event")
    private List<TimeSlot> timeSlots;

    @OneToMany(mappedBy = "event")
    private List<User> users;

    public Event(Request request) {
        this.title = request.getTitle();
        this.earliest_time = request.getEarliest_time();
        this.latest_time = request.getLatest_time();
        this.timeZone = request.getTimeZone();
    }
}
