<?php
/**
 * Created by PhpStorm.
 * User: Jorge Rodrigues
 * Date: 21/10/18
 * Time: 13:21
 */

// Verifica se o parametro código está presente.
if (key_exists('code', $_GET)) {
    // POST URL
    $url = 'https://gitlab.com/oauth/token';
    // PARÂMETROS
    $params = [
        'client_id' => '74773ae7f9160762956ff6824911fa6bf459c89092f13682eb7073c6868ad5df',
        'client_secret' => '7bf34d05ae41aef3dc7611de833bc26e87cefe1e5c4d4508398a8b779c218027',
        'code' => $_GET['code'],
        'grant_type' => 'authorization_code',
        'redirect_uri' => 'http://gitlab.infocorp.local/token.php'
    ];
    // Url-ify the data for the POST
    $params_string = '';
    foreach ($params as $key => $value) {
        $params_string .= $key . '=' . $value . '&';
    }
    rtrim($params_string, '&');
    // Inicia a conexão
    $ch = curl_init();
    // Set the url, number of POST vars, POST data
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, count($params));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Accept: application/json'
    ));
    // Executa a requisição.
    $result = curl_exec($ch);
    // Fecha a conexão.
    curl_close($ch);

    if ($result) {
        $decoded = json_decode($result, true);
        if ($decoded && key_exists('access_token', $decoded)) {
            setcookie("__token", $decoded['access_token'], time() + 3600);  /* Expira em 1 hora */
        }
    }

    # Redireciona de volta
    header("location:http://gitlab.infocorp.local/");
}