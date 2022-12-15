-- 2. List of hotels with room types without at least one picture
SELECT h.id, h.name, rt.id, rt.name
FROM hotels AS h
LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
WHERE rt.id NOT IN (SELECT DISTINCT(room_type_id) FROM room_type_pictures);