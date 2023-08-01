package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1.1")
public class Controller {
    @Autowired
    private CreateEventService service;

    @GetMapping("test")
    public String testAPI() {
        return "success";
    }

    @GetMapping("here")
    public String aaaa() {
        return "greate";
    }

    @PostMapping("createEvent")
    public Response createEvent(@RequestBody Request request) {
        Event event = service.createEvent(request);
        return new Response(event);
    }
}
