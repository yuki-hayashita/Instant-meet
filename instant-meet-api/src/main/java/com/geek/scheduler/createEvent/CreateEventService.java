package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import com.geek.scheduler.entity.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CreateEventService {
    @Autowired
    private CreateEventRepository repository;

    public Event createEvent(Request request) {
        String link = UUID.randomUUID().toString();
        Event event = new Event(request);
        event.setLink(link);
        event = repository.save(event);
        return event;
    }
}
