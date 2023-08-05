package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import com.geek.scheduler.entity.EventRepository;
import com.geek.scheduler.entity.TimeSlot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class CreateEventService {
    @Autowired
    private EventRepository repository;

    public Event createEvent(Request request) {
        String link = UUID.randomUUID().toString();
        Event event = new Event(request);
        event.setLink(link);

        // timezoneを持ったtimeSlotsを追加
        List<TimeSlot> timeSlots = new ArrayList<>();
        LocalTime time = request.getEarliest_time();
        while (!time.isAfter(request.getLatest_time())) {
            for (LocalDate date: request.getDates()) {
                ZonedDateTime start = ZonedDateTime.of(date, time, request.getTimeZone());
                TimeSlot timeSlot = new TimeSlot();
                timeSlot.setStartTime(start);
                timeSlot.setEvent(event);
                timeSlots.add(timeSlot);
            }
            time = time.plusMinutes(15);
        }
        event.setTimeSlots(timeSlots);
        event = repository.save(event);
        return event;
    }
}
