 <?php

$conn = new mysqli("localhost","root","","restaurant_db");

$name = $_POST['name'];
$phone = $_POST['phone'];
$food_item = $_POST['food_item'];
$address = $_POST['address'];

$sql = "INSERT INTO orders (name, phone, food_item, address)
VALUES ('$name','$phone','$food_item','$address')";

$conn->query($sql);

$conn->close();

$message = "New Order

Customer: $name
Phone: $phone
Food Item: $food_item
Address: $address

Restaurant Owner: Arhaan Khan";

$message = urlencode($message);

header("Location: https://wa.me/918000368902?text=$message");

exit;

?>       