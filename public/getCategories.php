<?php

$token = 'secret_sAkWh17TVyviKl6ArXMRSQXzV9nd3nb4HowW5cFQ1r2';
$databaseId = '0de70f4072b9420dbc272c3ff60ccdae';

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.notion.com/v1/databases/$databaseId/query");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Authorization: $token", "Notion-Version: 2021-08-16"));

$categoryData = curl_exec($ch);

curl_close($ch);

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
    echo $categoryData;

?>
