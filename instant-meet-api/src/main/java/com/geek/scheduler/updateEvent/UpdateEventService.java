package com.geek.scheduler.updateEvent;

import com.geek.scheduler.Utils.EventNotFoundException;
import com.geek.scheduler.entity.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;

@Service
public class UpdateEventService {
    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private AvailabilityRepository availabilityRepository;
    @Autowired
    private UserRepository userRepository;

    /**
     * @Transactional DB操作失敗でrollback
     */
    @Transactional
    public void updateEvent(Request request) {
        User user = new User();
        user.setName(request.getName());
        user = userRepository.save(user);

        Event event = eventRepository.findByLink(request.getLink());
        if (event == null) {
            throw new EventNotFoundException("Event does not exist");
        }

        for (ZonedDateTime start_time: request.start_times) {
            Availability availability = new Availability();
            availability.setStart_time(start_time);
            availability.setUser(user);
            availability.setEvent(event);
            availabilityRepository.save(availability);
        }
    }
}
