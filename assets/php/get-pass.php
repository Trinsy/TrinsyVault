<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    include("connection.php");

    $id = 1;
    $passwordInput = $_POST["password"];

    $stmt = $db->prepare("SELECT * FROM pass WHERE id = :id");
    $stmt->bindParam(":id", $id);
    $stmt->execute();
    $pass = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!empty($passwordInput) && isset($pass) && password_verify($passwordInput, $pass['password'])) {
        $stmt = $db->prepare("SELECT * FROM deal WHERE id = :id");
        $stmt->bindParam(":id", $id);
        $stmt->execute();
        $deal = $stmt->fetch(PDO::FETCH_ASSOC);
        if(isset($deal) && isset($deal["html"])) {
            $contentHtml = trim($deal["html"]);
            $response = ["status" => "success", "content" => $contentHtml];
        }
        else {
            $response = ["status" => "error", "content" => false];
        }
    }
    else {
        $response = ["status" => "error", "content" => false];
    }

    echo json_encode($response);
    exit;
}