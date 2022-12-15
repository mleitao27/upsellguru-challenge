-- 1. List of hotels without room types
SELECT *
FROM hotels
WHERE id NOT IN (SELECT DISTINCT(hotel_id) FROM room_types);