DROP DATABASE upsellguru;
CREATE DATABASE upsellguru;
USE upsellguru;

CREATE TABLE IF NOT EXISTS `cities` (
  `id` INT NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `hotels` (
  `id` INT NOT NULL,
  `city_id` INT NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (city_id) REFERENCES `cities` (id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `room_types` (
  `id` INT NOT NULL,
  `hotel_id` INT NOT NULL,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (hotel_id) REFERENCES `hotels` (id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `room_type_pictures` (
  `id` INT NOT NULL,
  `hotel_id` INT NOT NULL,
  `room_type_id` INT NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (hotel_id) REFERENCES `hotels` (id) ON DELETE CASCADE,
  FOREIGN KEY (room_type_id) REFERENCES `room_types` (id) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO `cities`
VALUES (1, 'city1'),
(2, 'city2'),
(3, 'city3'),
(4, 'city4'),
(5, 'city5'),
(6, 'city6');

INSERT INTO `hotels`
VALUES (1, 1, 'hotel1'),
(2, 2, 'hotel2'),
(3, 2, 'hotel22'),
(4, 3, 'hotel3'),
(5, 3, 'hotel33'),
(6, 3, 'hotel333'),
(7, 4, 'hotel4'),
(8, 4, 'hotel44'),
(9, 4, 'hotel444'),
(10, 4, 'hotel4444'),
(11, 5, 'hotel5'),
(12, 5, 'hotel55'),
(13, 5, 'hotel555'),
(14, 5, 'hotel5555'),
(15, 5, 'hotel55555');

INSERT INTO `room_types`
VALUES (1, 1, 'h1rt1', 'mountain'),
(2, 1, 'h1rt2', 'sea'),
(3, 1, 'h1rt3', 'bird'),
(4, 1, 'h1rt4', 'grass'),
(5, 1, 'h1rt5', 'shell'),
(6, 2, 'h2rt1', 'view'),
(7, 2, 'h2rt2', 'sky'),
(8, 2, 'h2rt3', 'apple'),
(9, 3, 'h22rt1', 'red'),
(10, 3, 'h22rt2', 'blue'),
(11, 3, 'h22rt3', 'dark blue'),
(12, 4, 'h3rt1', 'family'),
(13, 5, 'h33rt1', 'group'),
(14, 5, 'h33rt2', 'big group'),
(15, 7, 'h4rt1', 'forest'),
(16, 8, 'h44rt1', 'key'),
(17, 9, 'h444rt1', 'bunk beds'),
(18, 10, 'h4444rt1', 'tree'),
(19, 11, 'h5rt1', 'large');

INSERT INTO `room_type_pictures`
VALUES (1, 1, 1, 'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-jumbo.jpg?quality=75&auto=webp'),
(2, 2, 2, 'https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg'),
(3, 2, 3, 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg'),
(4, 3, 4, 'https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg'),
(5, 4, 5, 'https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-Hotel-Room-11.jpg');