package com.geek.scheduler.getEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController("getEventController")
@RequestMapping("api/v1.1")
public class Controller {
    @Autowired
    private GetEventService service;

    @GetMapping("/getEvent/{link}")
    public Response getEvent(@PathVariable String link) {
        return service.getEvent(link);
    }


}

