<?php

if($_SERVER['REQUEST_METHOD']=='GET') {
  if(isset($_GET['phone']) && (preg_match("/^\+?[0-9]{0,3}\(?[0-9]{0,3}[-)]?[-(]?[0-9]{3}[-)]?[-(]?[0-9]{2}[-)]?[-(]?[0-9]{2}[-)]?$/",$_GET['phone'])==0)) {
      echo 'format';
    }
  }
  exit();
}

if (isset($_POST['ordersubmit']))
{ 
  $phone = htmlspecialchars($_POST['phone']);
  $address = htmlspecialchars($_POST['address']);
  $date = htmlspecialchars($_POST['date']);
  $time = htmlspecialchars($_POST['time']);
  $goods = htmlspecialchars($_POST['goods']);

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
  $mail->addAddress("test@test.ru", 'User');
  $mail->Subject = 'Заявка с сайта Золотая Кулебяка';
  $goods_text='<ul>';
  $goods = explode('**',$goods);
  foreach ($goods as $good) {
   $good_text = '<li>'.$good.'</li>';
   $goods_text=$goods_text.$good_text;
  }
  $goods_text=$goods_text.'</ul>';
  $mail->msgHTML('<h3 style="background: #168de2; font-size: 14px; text-align: center; color: white; margin:0; padding:0;">'.
  'Заказ с сайта!</h3>'.
    '<p>Телефон клиента: '.$phone.'</p>'.
    '<p>Наименование продуктов: </p>'. $goods_text.
    '<p>Дата доставки: '.$date.'</p>'.
    '<p>Время доставки: '.$time.'</p>'.
    '<p>Адрес доставки: '.$address.'</p>');
  $mail->AltBody = "";

  if (!$mail->send()) {
      
    echo 'error';
      
  } else {
    echo 'ok';
  }
}