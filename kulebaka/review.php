<?php 


if (isset($_POST['reviewsubmit']))
{ 
  $name = $_POST['name'];
  $text = $_POST['text'];
  date_default_timezone_set('Etc/UTC');
  require_once($_SERVER['DOCUMENT_ROOT'].'/PHPMailer/class.phpmailer.php');
  require_once($_SERVER['DOCUMENT_ROOT'].'/PHPMailer/PHPMailerAutoload.php');
  $mail = new PHPMailer;

  $mail->isSMTP();
  $mail->Host = 'smtp.beget.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'zakaz@goldpirog.ru';
  $mail->Password = ']5n2a2]*';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = '465';
  $mail->CharSet='UTF-8';
  $mail->setFrom("zakaz@goldpirog.ru", "Отзыв");
  $mail->addReplyTo("zakaz@goldpirog.ru", 'No-Reply');
  $mail->addAddress("zakaz@goldpirog.ru", 'User');
  $mail->addAddress("goldpirog@yandex.ru", 'User');
  $mail->Subject = 'Новый отзыв с сайта Золотая Кулебяка';
  $mail->msgHTML('<h3 style="background: #168de2; font-size: 14px; text-align: center; color: white; margin:0; padding:0;">'.
  'Отзыв с сайта!</h3>'.
    '<p>Имя клиента (компании): '.htmlspecialchars($name).'</p>'.
    '<p>Текст отзыва: '.htmlspecialchars($text).'</p>');
  $mail->AltBody = "";

  if (!$mail->send()) {
      
    echo 'error';
      
  } else {
    echo 'ok';
  }
}