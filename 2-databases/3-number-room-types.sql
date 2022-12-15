-- 3. List of hotels with number of room types
SELECT h.id AS hotel_id, COUNT(rt.id) AS n_room_types
FROM hotels AS h
LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
GROUP BY h.id;