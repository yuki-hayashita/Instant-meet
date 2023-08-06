package com.geek.scheduler.getEvent;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class TimeSlotResponse {
    private LocalTime startTime;
    private String username;
    private List<ZonedDateTime> availabilities = new ArrayList<>();

}
