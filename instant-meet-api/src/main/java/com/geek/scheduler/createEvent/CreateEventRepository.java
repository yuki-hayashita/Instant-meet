package com.geek.scheduler.createEvent;

import com.geek.scheduler.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreateEventRepository extends JpaRepository<Event, Long> {
}
