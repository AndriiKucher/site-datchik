<?php
$to = "kyk.alex@ukr.net"; // емайл получателя данных из формы
$tema = "Привіт, цей лист  з datchik.top "; // тема полученного емайла
$message = "Ім'я: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефону: ".$_POST['phone']."<br>"; //полученное из формы name=phone
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>