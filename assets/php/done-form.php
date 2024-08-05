<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    include("connection.php");

    $email = $_POST["email"];
    $accept_all = $_POST["accept_all"];

    if ($accept_all == 1 && trim($email) != "") {
        $stmt = $db->prepare("SELECT accept_all FROM mail WHERE email = :email");
        $stmt->bindParam(":email", $email);
        $stmt->execute();
        $mail = $stmt->fetch(PDO::FETCH_ASSOC);

        if (empty($mail)) {
            $stmt = $db->prepare("INSERT INTO mail (email, accept_all) VALUES (:email, :accept_all)");
            $stmt->bindParam(":email", $email);
            $stmt->bindParam(":accept_all", $accept_all);
            $stmt->execute();
        } else {
            if ($mail['accept_all'] == 0) {
                $stmt = $db->prepare("UPDATE mail SET accept_all = :accept_all WHERE email = :email");
                $stmt->bindParam(":email", $email);
                $stmt->bindParam(":accept_all", $accept_all);
                $stmt->execute();
            }
        }
        $contentHtml = '<div class="slide"> <section class="page"> <div class="pageTop"> <div class="pageTitle"> <h1>İşleminiz Tamamlandı ✅</h1> <button class="mainBtn" onclick="PrevPage();"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4m0 0l6-6m-6 6l6 6"/></svg></button> </div> <p>Ödemenin onaylanması maksimum 24 saat kadar sürebilir</p> <button class="mainBtn" onclick="talert(\'description\');">Anlaşma Açıklaması</button> <button class="mainBtn" onclick="talert(\'all\');">Kabul Edilen Tüm Maddeler</button> </div> <div class="pageDetail"> <div class="goPageBtn"> <button class="goBtn mainBtn" onclick="copyMail();">Dekont Gönder <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m0 0l-6 6m6-6l-6-6"></path></svg></button> </div> </div> </section> </div>';
        $response = ["status" => "success", "content" => $contentHtml];

        setcookie("done", "1", time() + (86400 * 30), "/");
    }
    else {
        $response = ["status" => "error", "content" => false];
    }

    echo json_encode($response);
    exit;
}