<?php

if($_SERVER['REQUEST_METHOD']=='GET') {
  if (isset($_GET['time']) && (DateTime::createFromFormat('H-i', $_GET['time']) !== false)) {
    $date = new DateTime();
    $curYear = '-'.date('Y');
    $date = $date->createFromFormat("H-i",$_GET['time']);
    if($date===false) {
      echo 'format';
      exit();
    } 
    $date = $date->createFromFormat("d-m-Y H-i",$_GET['date'].$curYear.$_GET['time']);
    if($date===false) {
      exit();
    } 
    $now = new DateTime('now');
    $interval = $date->diff($now);
    $hours = $interval->h+ $interval->d*24;
    $days = $interval->d;
    if($hours < 10) {
      echo 'hours';
    }
  }
  if(isset($_GET['date']) && (DateTime::createFromFormat('d-m-Y', $_GET['date']) !== false) && !isset($_GET['time'])) {
    $date = new DateTime();
    $curYear = '-'.date('Y');
    $date = $date->createFromFormat("d-m-Y",$_GET['date'].$curYear);
    if($date===false) {
        echo 'format';
    }
  }

  if(isset($_GET['phone']) && (preg_match("/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/",$_GET['phone']) == 0)){
      echo 'format';
  }
  exit();
}

if (isset($_POST['ordersubmit']))
{ 
  $phone = $_POST['phone'];
  $address = $_POST['address'];
  $date = $_POST['date'];
  $time = $_POST['time'];
  $goods = $_POST['goods'];

  require_once($_SERVER['DOCUMENT_ROOT'].'/PHPMailer/class.phpmailer.php');
  require_once($_SERVER['DOCUMENT_ROOT'].'/PHPMailer/PHPMailerAutoload.php');
  $mail = new PHPMailer;

  $mail->isSMTP();
  $mail->Host = 'smtp.beget.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'test@test.ru';
  $mail->Password = 'password';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = '465';
  $mail->CharSet='UTF-8';
  $mail->setFrom("test@test.ru", "Заявка");
  $mail->addReplyTo("test@test.ru", 'No-Reply');
  $mail->addAddress("test@test.ru", 'User');
  $mail->addAddress("goldpirog@yandex.ru", 'User');
  $mail->Subject = 'Заявка с сайта Золотая Кулебяка';
  $mail->msgHTML('<h3 style="background: #168de2; font-size: 14px; text-align: center; color: white; margin:0; padding:0;">'.
  'Заказ с сайта!</h3>'.
    '<p>Телефон клиента: '.htmlspecialchars($phone).'</p>'.
    '<p>Наименование продуктов: '.htmlspecialchars($goods).'</p>'.
    '<p>Дата доставки: '.htmlspecialchars($date).'</p>'.
    '<p>Время доставки: '.htmlspecialchars($time).'</p>'.
    '<p>Адрес доставки: '.htmlspecialchars($address).'</p>');
  $mail->AltBody = "";

  if (!$mail->send()) {
      
    echo 'error';
      
  } else {
    echo 'ok';
  }
}