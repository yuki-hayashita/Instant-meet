CREATE DATABASE instant-meet;

USE `instant-meet`;


USE `instant-meet`;

CREATE TABLE `events` (
                          `id` BIGINT NOT NULL AUTO_INCREMENT,
                          `title` VARCHAR(255) NOT NULL,
                          `link` VARCHAR(255) NOT NULL,
                          `earliest_time` TIME NOT NULL,
                          `latest_time` TIME NOT NULL,
                          `time_zone` VARCHAR(255) NOT NULL,
                          PRIMARY KEY (`id`),
                          UNIQUE KEY `link_unique` (`link`)
);

CREATE TABLE `users` (
                         `id` BIGINT NOT NULL AUTO_INCREMENT,
                         `name` VARCHAR(255) NOT NULL,
                         PRIMARY KEY (`id`)
);

CREATE TABLE `availabilities` (
                                  `id` BIGINT NOT NULL AUTO_INCREMENT,
                                  `start_time` DATETIME NOT NULL,
                                  `user_id` BIGINT NOT NULL,
                                  `event_id` BIGINT NOT NULL,
                                  PRIMARY KEY (`id`)
);

CREATE TABLE `time_slots` (
                              `id` BIGINT NOT NULL AUTO_INCREMENT,
                              `start_time` DATETIME NOT NULL,
                              `event_id` BIGINT,
                              PRIMARY KEY (`id`)
);
