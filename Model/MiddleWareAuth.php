<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
    include($path . "Model/JWT.php");

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//
//create_token
function CreateToken($username){
    $jwt = parse_ini_file("JWT.ini");
    $header = $jwt['JWT_HEADER'];
    $secret = $jwt['JWT_SECRET'];
    $payload = '{"iat":"' . time() . '","exp":"' . time() + (600) . '","Username":"' . $username . '"}';

    $JWT = new JWT;
    $token = $JWT->encode($header, $payload, $secret);
    return $token;
} 
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//


//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//
// decode_token
function DecodeToken($token){
    $jwt = parse_ini_file("JWT.ini");
    $secret = $jwt['JWT_SECRET'];

    $JWT = new JWT;
    $token_dec = $JWT->decode($token, $secret);

    $rt_token = json_decode($token_dec, TRUE);

    return $rt_token['Username'];
}
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-//

// $token = CreateToken("Hakya");
// echo $token;
// echo '<br>';
// $username = DecodeToken($token);
// echo $username;