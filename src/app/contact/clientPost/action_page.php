<?php

$error = '';
$firstname = '';
$email = '';
$lastname = '';
$message = '';

function clean_text($string)
{
 $string = trim($string);
 $string = stripslashes($string);
 $string = htmlspecialchars($string);
 return $string;
}

if(isset($_POST["submit"]))
{
 if(empty($_POST["firstname"]))
 {
  $error .= '<p><label class="text-danger">Please Enter your firstname</label></p>';
 }
 else
 {
  $firstname = clean_text($_POST["firstname"]);
  if(!preg_match("/^[a-zA-Z ]*$/",$firstname))
  {
   $error .= '<p><label class="text-danger">Only letters and white space allowed</label></p>';
  }
 }
 if(empty($_POST["email"]))
 {
  $error .= '<p><label class="text-danger">Please Enter your Email</label></p>';
 }
 else
 {
  $email = clean_text($_POST["email"]);
  if(!filter_var($email, FILTER_VALIDATE_EMAIL))
  {
   $error .= '<p><label class="text-danger">Invalid email format</label></p>';
  }
 }
 if(empty($_POST["lastname"]))
 {
  $error .= '<p><label class="text-danger">lastname is required</label></p>';
 }
 else
 {
  $lastname = clean_text($_POST["lastname"]);
 }
 if(empty($_POST["message"]))
 {
  $error .= '<p><label class="text-danger">Message is required</label></p>';
 }
 else
 {
  $message = clean_text($_POST["message"]);
 }
 if($error == '')
 {
  require 'class/class.phpmailer.php';
  $mail = new PHPMailer;
  $mail->IsSMTP();        //Sets Mailer to send message using SMTP
  $mail->Host = 'smtpout.secureserver.net';  //Sets the SMTP hosts
  $mail->Port = '80';        //Sets the default SMTP server port
  $mail->SMTPAuth = true;       //Sets SMTP authentication. Utilizes the Userfirstname and Password variables
  $mail->Userfirstname = 'xxxxxxxxxx';     //Sets SMTP userfirstname
  $mail->Password = 'xxxxxxxxxx';     //Sets SMTP password
  $mail->SMTPSecure = '';       //Sets connection prefix. Options are "", "ssl" or "tls"
  $mail->From = $_POST["email"];     //Sets the From email address for the message
  $mail->Fromfirstname = $_POST["firstname"];    //Sets the From firstname of the message
  $mail->AddAddress('pyk.bartlomiej@gmail.com', 'firstname');//Adds a "To" address
  $mail->AddCC($_POST["email"], $_POST["firstname"]); //Adds a "Cc" address
  $mail->WordWrap = 50;       //Sets word wrapping on the body of the message to a given number of characters
  $mail->IsHTML(true);       //Sets message type to HTML
  $mail->lastname = $_POST["lastname"];    //Sets the lastname of the message
  $mail->Body = $_POST["message"];    //An HTML or plain text message body
  if($mail->Send())        //Send an Email. Return true on success or false on error
  {
   $error = '<label class="text-success">Thank you for contacting us</label>';
  }
  else
  {
   $error = '<label class="text-danger">There is an Error</label>';
  }
  $firstname = '';
  $email = '';
  $lastname = '';
  $message = '';
 }
}

?>
