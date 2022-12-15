<?php
    echo ("This script takes a expression and checks if it has balanced brackets or not.\n");
    // Handling input
    $input_expr = readline('Enter the expression to be processed: ');

   // Running function
   $unbalance = notBalanced($input_expr);

   // Outputting results
   if($unbalance == -1) echo("The expression is balanced!\n");
   else echo("The expression is NOT balanced at index ".$unbalance."!\n");

    // 
    // Function that takes a expression and checks if it has balanced brackets or not.
    // 
    // Args: $number_array expression in string format
    // Return: $balanced boolean that is true if the expression is balanced and false if no.
    // 
    function notBalanced($expr) {
        $chars = str_split($expr);
        // Balanced flag
        $balanced = true;
        // stack to store opening brackets
        $stack = [];
        // Index of the current exp char
        $index = 0;
        // Index where exp is unbalanced
        $unbalanced_index = -1;

        foreach($chars as $i){
            $index += 1;
            // Add opening brackets to stack
            if ($i == '(' || $i == '[' || $i == '{') array_push($stack, [$i, $index]);
            // Ignore other chars
            else if($i != ')' && $i != ']' && $i != '}') continue;
            // Check if closing brackets match opening ones
            else {
                // If opening brackets in stack
                if (count($stack) > 0) {
                    $aux = $stack[count($stack) - 1];
                    array_pop($stack);
                    if($aux[0] == '(' && $i != ')') {
                        $unbalanced_index = $aux[1];
                        $balanced = false;
                        break;
                    }
                    if($aux[0] == '[' && $i != ']') {
                        $unbalanced_index = $aux[1];
                        $balanced = false;
                        break;
                    }
                    if($aux[0] == '{' && $i != '}') {
                        $unbalanced_index = $aux[1];
                        $balanced = false;
                        break;
                    }
                }
                // Closing brackets before opening
                else {
                    $unbalanced_index = $index;
                    $balanced = false;
                    break;
                }
            }
        }
        
        // Not matched opening brackets left in stack
        if(count($stack) > 0) {
            if($unbalanced_index == -1) {
                $unbalanced_index = $stack[count($stack) - 1][1];
                $balanced = false;
            }
        }
        
        // Return answer
        if($balanced) return -1;
        else return $unbalanced_index;

    }
?>