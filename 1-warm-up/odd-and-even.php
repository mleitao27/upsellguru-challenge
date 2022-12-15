<?php
    echo ("This script takes a list of integers and returns two lists, one with odd numbers and another one with even numbers.\n");
    // Handling input
    $input_string = readline('Enter the integers to be processed (separated by a blank space): ');
    $input_array = explode(' ', $input_string);

    // Running function
    list($evens, $odds) = oddAndEven($input_array);

    // Outputting results
    echo('Odd numbers: ');
    echo(json_encode($odds));
    echo("\n");
    echo('Even numbers: ');
    echo(json_encode($evens));
    echo("\n");

    // 
    // Function that takes a list of integers and returns two lists, one with odd numbers and
    // another one with even numbers.
    // 
    // Args: $number_array array of numbers to be processed
    // Return: [$odd_numbers, $even_numbers] array with the odd numbers array on the first position
    // and array of the even numbers on the second
    // 
    function oddAndEven($number_array) {
        // Result arrays
        $odd_numbers = [];
        $even_numbers = [];

        foreach ($number_array as $number) {
            // Checking for numbers only
            if(!is_numeric($number)) {
                echo("Warning: '".$number."' is not a number, ignoring it!\n");
                continue;
            }
            // Push to correct array
            if($number % 2 == 0) array_push($even_numbers, (int)$number);
            else array_push($odd_numbers, (int)$number);
        }

        return [$odd_numbers, $even_numbers];
    }
?>