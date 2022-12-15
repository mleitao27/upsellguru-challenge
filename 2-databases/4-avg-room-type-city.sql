-- 4. List of cities with average number number of room types per hotel
SELECT c.id, AVG(room_type_count.n_room_types)
FROM cities AS c
RIGHT JOIN
    (SELECT h.id AS hotel_id, h.city_id AS city_id, COUNT(rt.id) AS n_room_types
    FROM hotels AS h
    LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
    GROUP BY h.id) AS room_type_count
ON c.id=room_type_count.city_id
GROUP BY c.id;