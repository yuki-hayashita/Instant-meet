package com.geek.scheduler.getEvent;

import com.geek.scheduler.Utils.EventNotFoundException;
import com.geek.scheduler.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GetEventService {
    @Autowired
    private EventRepository repository;

    public Response getEvent(String link) {
        Event event = repository.findByLink(link);

        if (event == null) {
            throw new EventNotFoundException("Event does not exist for the given link");
        }

        Response response = new Response();
        response.setTitle(event.getTitle());
        response.setTimeSlots(event.getTimeSlots());
        List<AvailabilityDTO> availabilityDTOs = event.getAvailabilities().stream()
                .map(AvailabilityDTO::new)
                .toList();
        response.setAvailabilities(availabilityDTOs);

        return response;
    }

}
