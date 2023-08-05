package com.geek.scheduler.updateEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("updateEventController")
@RequestMapping("api/v1.1")
public class Controller {
    @Autowired
    private UpdateEventService service;

    @PostMapping("updateEvent")
    public ResponseEntity<?> updateEvent(@RequestBody Request request) {
        service.updateEvent(request);
        return ResponseEntity.status(HttpStatus.OK).body("Successfully saved");
    }

}
