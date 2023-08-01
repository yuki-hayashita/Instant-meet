package com.geek.scheduler.createEvent;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.time.ZoneId;

@Setter
@Getter
public class Request {

    private String title;

    private List<LocalDate> dates;

    private LocalTime earliest_time;

    private LocalTime latest_time;

    private ZoneId timeZone;
}
