<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "student_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch record for update
if (isset($_GET['id'])) {
    $roll_no = $_GET['id'];
    $result = $conn->query("SELECT * FROM students WHERE roll_no='$roll_no'");
    $student = $result->fetch_assoc();
}

// Update record
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $contact = $_POST['contact'];

    $sql = "UPDATE students SET first_name='$first_name', last_name='$last_name', contact='$contact' WHERE roll_no='$roll_no'";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Update Student</title>
</head>
<body>
    <h2>Update Student</h2>
    <form action="" method="POST">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" value="<?php echo $student['first_name']; ?>" required><br><br>
        
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value="<?php echo $student['last_name']; ?>" required><br><br>
        
        <label for="contact">Contact Number:</label>
        <input type="text" id="contact" name="contact" value="<?php echo $student['contact']; ?>" required><br><br>
        
        <input type="submit" value="Update">
    </form>
</body>
</html>
