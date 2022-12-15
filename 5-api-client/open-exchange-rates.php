<?php
while(1) {
    // Menu options and input
    echo("\nMenu\n(1) All exchange rates with CurrencyX\n(2) Exchange rate between CurrencyX and CurrencyY\n(3) Exit\n");
    $input_option = readline('Select one of the options above: ');

    // Check if valid option selected
    if($input_option != '1' && $input_option != '2' && $input_option != '3') {
        echo("WARNING: You must choose a vali option.\n");
    }
    else if($input_option == '1') {
        // Currency input
        $currency_input = readline("\nInput the base currency of which you want to know the exchange rates: ");
        // Input sanitization (get only 1 currency + uppercase it)
        $currency_x = strtoupper(explode(' ', $currency_input)[0]);

        if($data = oxrRequest($currency_x)) {
            // Print results by looping through rates array
            echo("The exchange rates for ".$currency_x." are:\n");
            foreach($data as $currency => $rate) {
                echo($currency." => ".$rate."\n");
            }
        } else continue;
    }
    else if($input_option == '2') {
        // Currency input
        $currency_input = readline("\nInput the two currencies between which you want to know the exchange rates (separated by space): ");
        // Input sanitization (get 2 currencies + uppercase it)
        $currencies = explode(' ', $currency_input);
        $currency_x = strtoupper($currencies[0]);
        $currency_y = strtoupper($currencies[1]);
        // If missing currencies
        if(count($currencies) < 2) {
            echo("WARNING: Two currencies must be provided!\n");
            continue;
        }

        if($data = oxrRequest($currency_x, $currency_y)) {
            // Print results
            echo("Exchange rate between ".$currency_x." and ".$currency_y." is ".$data."\n");
        } else continue;
    }
    else if($input_option == '3') break;
}

// 
// Function makes a request to the Open Exchange Rates API
// 
// Args: $oxr_url request URL
// Return: $oxr_data return by the API
// 
function oxrRequest($currency_x = null, $currency_y = null) {
    $app_id = '3a820a387d1f45f198691b0091f189a9';

    if(!$currency_x) {
        echo("WARNING: A base currency must be provided!\n");
        return false;
    }

    $oxr_url = "https://openexchangerates.org/api/latest.json?app_id=".$app_id."&base=".$currency_x;
    // Open CURL session:
    $ch = curl_init($oxr_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // Get the data:
    $json = curl_exec($ch);
    // Decode JSON response:
    $oxr_data = json_decode($json);
    // Close CURL session
    curl_close($ch);

    // Check for API error
    if($oxr_data->error) {
        echo("ERROR: ".$oxr_data->description."\n");
        return false;
    }

    // First feature - return all rates for base currency selested
    $final_data = $oxr_data->rates;
    // Second feature - returning rate between 2 currencies
    if($currency_y) {
        // Check if rate between currecies exist
        if(!$oxr_data->rates->$currency_y) {
            echo("ERROR: There is not exchange rate between ".$currency_x." and ".$currency_y.")!\n");
            return false;
        }
        $final_data = $oxr_data->rates->$currency_y;
    }

    return $final_data;
}
?>