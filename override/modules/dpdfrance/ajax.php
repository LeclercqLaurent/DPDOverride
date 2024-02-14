<?php

require_once dirname(__FILE__, 3) . '/config/config.inc.php';
require_once dirname(__FILE__, 3) . '/init.php';
require_once __DIR__ . '/dpdfrance.php';

$result = null;
if (Tools::getValue('updateStateToShipped') && Tools::getIsset('checkbox')) {
    $orders = Tools::getValue('checkbox');

    if (is_string($orders)) {
        $orders = explode(',', $orders);
    }

    print '<pre>';
    var_dump($orders);
    print '</pre>';
    die();
}

echo $result;
