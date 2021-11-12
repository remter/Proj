Drop Table if exists `inventory`;
CREATE TABLE if not exists `inventory` (`id` int(10)  NOT NULL AUTO_INCREMENT, `name` varchar(45) NOT NULL, `serialNum` varchar(45) NOT NULL,`type` ENUM('computer', 'phone', 'monitor', 'drive') Not Null,`model` varchar(45),`maker` varchar(45),`description` varchar(145),`ownerid` int(10),`created_at` DATETIME NOT NULL default NOW(),`last_updated` DATETIME NOT NULL default NOW() ON UPDATE NOW(),primary key (`id`)) AUTO_INCREMENT = 1;

Drop Table if exists `users`;

CREATE TABLE if not exists `users` (`id` int(10)  NOT Null AUTO_INCREMENT,`name` varchar(45) Not Null,`username`  varchar(45) Not Null unique,`role` ENUM('owner', 'manager', 'engineer', 'admin', 'user') default 'user' Not Null, `created_at` DATETIME NOT NULL default NOW(),`last_updated` DATETIME NOT NULL default NOW() ON UPDATE NOW(),primary key (`id`)) AUTO_INCREMENT = 1;
