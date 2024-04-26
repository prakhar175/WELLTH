<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $Name = $_POST['Name'];
    $gender = $_POST['gender'];
    $age=$_POST['age'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $weight=$_POST['weight'];
    $height=$_POST['height'];
    $mobile = $_POST['mobile'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];

    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "customerinfo";

    $conn = new mysqli($servername, $username, $password, $dbname);
  
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    
    $sql = "INSERT INTO fitness (Name,age, gender, dob, email, address, mobile, weight,height, state, city, zip) 
            VALUES ('$Name','$age', '$gender', '$dob', '$email', '$address', '$mobile','$weight','$height', '$state', '$city', '$zip')";

    if ($conn->query($sql) === TRUE) {
        echo "<script> alert('Your details have been accepted and our team will contact you soon');
        window.location.href = 'home2.html';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    
    $conn->close();
}
?>