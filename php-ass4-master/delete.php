<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "student_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Delete record
if (isset($_GET['id'])) {
    $roll_no = $_GET['id'];
    $sql = "DELETE FROM students WHERE roll_no='$roll_no'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}
?>

<a href="display.php">Back to Records</a>
