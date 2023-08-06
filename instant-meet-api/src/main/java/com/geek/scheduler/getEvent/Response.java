package com.geek.scheduler.getEvent;

import com.geek.scheduler.entity.Availability;
import com.geek.scheduler.entity.AvailabilityDTO;
import com.geek.scheduler.entity.TimeSlot;
import com.geek.scheduler.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Response {
    private String title;
    private List<TimeSlot> timeSlots;
    private List<AvailabilityDTO> availabilities;
}
