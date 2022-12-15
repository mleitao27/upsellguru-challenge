# upsellguru-challenge
# upsellguru-challenge
## 1 - Warm Up
Regarding the "Warm Up" exercise there is a folder called "1-warm-up" that contains the "odd-and-even.php" file with the script with a function to separate an array of numbers into odd and even numbers arrays. The script can run directly in the directory or via the terminal in the "1-warm-up" Docker container created through the docker-compose file available.

When running the script the user is prompt to type in the terminal the list of numbers separating them with blank spaces. The script then runs a function that goes through the array, checks if the input are in fact numeric values and if so splits them into two arrays, one with odd numbers and another one with even numbers. These arrays are then printed on the terminal.

## 2 - Databases
For the databases exercise the following queries where built to solve each for the points according to the data model supplied. This queries can also be found in the .sql files in the "2-databases" directory.

1. List of hotels without room types
```sql
SELECT *
FROM hotels
WHERE id NOT IN (SELECT DISTINCT(hotel_id) FROM room_types);
```
2. List of hotels with room types without at least one picture
```sql
SELECT h.id, h.name, rt.id, rt.name
FROM hotels AS h
LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
WHERE rt.id NOT IN (SELECT DISTINCT(room_type_id) FROM room_type_pictures);
```
3. List of hotels with number of room types
```sql
SELECT h.id AS hotel_id, COUNT(rt.id) AS n_room_types
FROM hotels AS h
LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
GROUP BY h.id;
```
4. List of cities with average number number of room types per hotel
```sql
SELECT c.id, AVG(room_type_count.n_room_types)
FROM cities AS c
RIGHT JOIN
    (SELECT h.id AS hotel_id, h.city_id AS city_id, COUNT(rt.id) AS n_room_types
    FROM hotels AS h
    LEFT JOIN room_types AS rt ON h.id = rt.hotel_id
    GROUP BY h.id) AS room_type_count
ON c.id=room_type_count.city_id
GROUP BY c.id;
```
There is also some Docker containers where the queries can be tested. There is a container running MySQL (mysql) where the data is being stored. This container can be accessed through its terminal or through the adminer container with the following credentials:

System: MySQL
Server: mysql
Username: upsellguru
Password: upsellguru
Database: upsellguru

This database was seeded by the by the db_seeder container that runs in the seeds.sql file (in "2-databases" directory) in the mysql database. To re-seed the database just need to restart db_seeder container.

## 3 - Algorithms
Regarding the "Algorithms" exercise there is a folder called "3-algorithms" that contains the "isBalanced.php" file with the script with a function that takes a expression and checks if it has balanced brackets or not. The script can run directly in the directory or via the terminal in the "3-algorithms" Docker container created through the docker-compose file available.

When running the script the user is prompt to type in the terminal the expression. The script then runs a function that goes through the string, if a opening bracket is found it is added to a stack, when a closing bracket appears the first position of the stack is searched for the matching bracket, if no match is found the expression is considered unbalanced. All other characters are ignored and the expression is also considered unbalanced if a closing bracket appear before opening brackets are added to the tack and if in the end of the loop there are opening brackets in the stack. For unbalanced expression the index of the unalancing character is stored and showed in the result output.

## 4 - Data Modelling
## 5 - API Client
Regarding the "API Client" exercise there is a folder called "5-api-client" that contains the "open-exchange-rates.php" file with the script with a function that can perform the two operations asked (get from API all exchange rates for a certain currency + get exchange rate between two currencies). The script can run directly in the directory or via the terminal in the "5-api-client" Docker container created through the docker-compose file available.

When running the script the user is prompt to type in the terminal one of the menu options, selecting this way the feature that is going to be executed. The script then runs a function that makes the API request, depending on the selected option and the inputed currencies the script will either return an array of currencies and their exchange rates or just the rate between the two currencies inputed. The results are then printed on the terminal.

Due to limitations of the API's free tier the features are only working for 'USD' as the base currency, this means that for feature 1 the only currency that will word is 'USD' and for feature 2 means that the first currency inputed must also be 'USD' and the second currency can be any other available on the API.