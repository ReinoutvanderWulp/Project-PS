<?php

if (isset($_POST['submit'])) {
    $mailto = "r0881423@student.thomasmore.be";
    //getting customer data
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $fromEmail = $_POST['email'];
    $phone = $_POST['tel'];

    $message = "Client Name: " . $name . "\n"
        . "Client surname: " . $surname . "\n"
        . "Phone Number: " . $phone . "\n"
        . "Email: " . $fromEmail . "\n"
        . "Client Message: " . "\n" . $_POST['message'];

    $result1 = mail($mailto, $message);

    if ($result1) {
        $success = "Your Message was sent Successfully!";
    } else {
        $failed = "Sorry! Message was not sent, Try again Later.";
    }

}