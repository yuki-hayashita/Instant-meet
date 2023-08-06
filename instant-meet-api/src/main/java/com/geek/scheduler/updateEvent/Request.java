package com.geek.scheduler.updateEvent;

import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.List;

@Getter
@Setter
public class Request {

    private String name;

    private String link;

    List<ZonedDateTime> start_times;
}
