<?php
/**
 * Created by PhpStorm.
 * User: Jorge Rodrigues
 * Date: 21/10/18
 * Time: 13:11
 *
 * Application: Vue-Gitlab
 * Application ID = 74773ae7f9160762956ff6824911fa6bf459c89092f13682eb7073c6868ad5df
 * Secret = 7bf34d05ae41aef3dc7611de833bc26e87cefe1e5c4d4508398a8b779c218027
 * Callback URL = http://gitlab.infocorp.local/gitlab/
 * Scopes:
 * api (Access the authenticated user's API)
 */

$client_id = '74773ae7f9160762956ff6824911fa6bf459c89092f13682eb7073c6868ad5df';
$redirect_uri = 'http://gitlab.infocorp.local/token.php';

# Endereço para onde haverá o redirecionamento:
$redirect = "https://gitlab.com/oauth/authorize?client_id=$client_id&redirect_uri=$redirect_uri&response_type=code&state=YOUR_UNIQUE_STATE_HASH";
# Função header() com o atributo location: apontando para a variavel $redirect, que por
# sua vez aponta para o endereço de onde ocorrerá o redirecionamento.
header("location:$redirect");