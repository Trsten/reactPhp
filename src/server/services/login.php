<?php

include "../DBstorage.php";
include "../model/uzivatel.php";


$postdata = file_get_contents("php://input");

$storage = Dbstorage::getInstance();

if (isset($postdata) && !empty($postdata)) {
    $request  = json_decode($postdata);

    $login = $request->mail;
    $password =$request->password;
    $result = $storage->login($login,$password);
}

error_reporting(E_ERROR | E_PARSE);

if (isset($result) && !empty($result)) {
    $posts_arr['data'] = $result;

    echo json_encode($posts_arr);
} else {
    echo json_encode(array('message' => 'No user Found'));
}

?>