package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Response {
    private Long id;
    private String title;
    private String link;
    public Response (Event event) {
        this.id = event.getId();
        this.title = event.getTitle();
        this.link = event.getLink();
    }
}
