package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import com.geek.scheduler.entity.TimeSlot;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class Response {
    private Long id;
    private String title;
    private String link;
    private List<TimeSlot> timeSlots;
    public Response (Event event) {
        this.id = event.getId();
        this.title = event.getTitle();
        this.link = event.getLink();
        this.timeSlots = event.getTimeSlots();
    }
}
