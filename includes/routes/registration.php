<?php


function check_user_exist($request){
  if (username_exists($request['user_login'])) {
      return 'yes';
  } else {
      return 'no';
  }
}

add_action('rest_api_init', function(){
	register_rest_route('adeapi/v1', 'check_user_exist',[
		'methods'	=>	'POST',
		'callback'	=>	'check_user_exist'
	]);
});

$user_pass;
function add_user_api($request){

	$user_id = wp_insert_user([
		'user_login'	=>	$request['user_login'],
		'user_pass'	=>	$request['user_pass'],
		'user_email'	=>	$request['user_email'],
    'role' => 'users',
	]);
  $user_pass = $request['user_pass'];

  $user_data = get_userdata($user_id);

	if( is_wp_error($user_id) ){
		$error_message = $user_id->get_error_message();

    status_header(403);
    echo $error_message;
    exit;

	}else{

// Функция, которая отправляет письмо при регистрации нового пользователя

    // Создаем дату и время отправки письма
  

    $user = get_user_by('ID', $user_id);
    
    // Email пользователя
    $user_email = $user->user_email;
    

$htmlContent = '
	<html> 
    <head> 
      <title>Welcome to Zoonika</title> 
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head> 
    <body>
      <table>
        <tr>
          <td><img width="250px" height="76px" src="https://zoonika.com/wp-content/themes/zoonika/images/Zoonika_logo.svg" alt=""/></td>
        </tr>
        <tr>
          <td><h2 style="font-size: 24px; margin: 15px 0px;">Здравствуйте, '.$user->display_name.'!</h2></td>
        </tr>
        <tr>
          <td>Поздравляем Вас с успешной регистрацией на портале о животных <a href="https://zoonika.com">Зооника!</a></td>
        </tr>
        <tr>
          <td>Ваш доступ ко входу в кабинет и редактированию:</td>
        </tr>
        <tr>
          <td>Логин: '.$user->display_name.'</td>
        </tr>
        <tr>
          <td>Пароль: '.$user_pass.'</td>
        </tr>
        <tr>
          <td><b>Воспользуйтесь уникальными возможностями бесплатно:</b></td>
        </tr>
        <tr>
          <td>1. <b>Максимизируйте свои продажи</b> — размещайте неограниченное количество объявлений, привлекая больше покупателей без дополнительных затрат.</td>
        </tr>
        <tr>
          <td>2. <b>Поддерживайте репутацию на высоте</b> — редактируйте карточку Вашего питомника, чтобы всегда предоставлять актуальную и привлекательную информацию о Вашем бизнесе.</td>
        </tr>
        <tr>
          <td>3. <b>Оптимизируйте управление питомником</b> — ведите карточки родителей-производителей, чтобы повысить ценность и конкурентоспособность Вашего предложения.</td>
        </tr>
        <tr>
          <td>4. <b>Увеличьте шансы на успешные сделки</b> — создавайте и управляйте четырьмя типами объявлений: Продажа, В дар, Анонс помета, Открыт к вязке, охватывая все потребности Вашего бизнеса.</td>
        </tr>
        <tr>
          <td><b>Какие преимущества вы получаете после регистрации:</b></td>
        </tr>
        <tr>
          <td>1. <b>Ваш собственный мини-сайт</b> — дополнительная брендированная страница, которая привлекает новых клиентов и повышает узнаваемость Вашего питомника в поисковых системах.</td>
        </tr>
        <tr>
          <td>2. <b>Автоматизированные продажи</b> — все запросы с нашего портала мгновенно поступают на Вашу электронную почту, обеспечивая Вам постоянный поток заинтересованных покупателей.</td>
        </tr>
        <tr>
          <td>3. <b>Доступ к целевой аудитории</b> — получите доступ к более чем 500 уникальных посетителей ежедневно, увеличивая шансы на успешные сделки и расширение клиентской базы.</td>
        </tr>
        <tr>
          <td>4. <b>Продвижение вашего бизнеса</b> — используйте возможности платформы для рекламы, участия в акциях и других маркетинговых активностях, что позволит значительно увеличить Ваши продажи.</td>
        </tr>
        <tr>
          <td>5. <b>Повышение посещаемости</b> — привлекайте больше клиентов через прямые переходы на Ваш сайт, повышая конверсию и доход.</td>
        </tr>
        <tr>
          <td>6. <b>Легкость в поиске</b> — отображение Вашего питомника на карте делает его доступным для клиентов, заинтересованных в покупке рядом с их местоположением.</td>
        </tr>
        <tr>
          <td>Если у Вас возникнут какие-либо вопросы или сложности, наша <a href="mailto:info@zoonika.com?subject=Общие вопросы">Служба заботы</a> всегда готова помочь Вам. Пишите, и мы оперативно решим любые проблемы.</td>
        </tr>
        <tr>
          <td>Если Вы не хотите размещать Ваш питомник у нас на сайте, то нажмите <a href="mailto:info@zoonika.com?subject=Удалить аккаунт">Сюда</a> и мы удалим ваш питомник.</td>
        </tr>
        <tr>
          <td>С уважением,</td>
          <td><b>администрация портала Зооника.</b></td>
        </tr>
      </table>
    </body> 
	</html>'; 

$to = $user_email;
$subject = 'Успешная регистрация: Zoonika.com';


$from = 'info@zoonika.com';
$from_name = 'Портал Zoonika';

$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: ' . $from_name . ' <' . $from . '>';


    // Отправляем письмо
    wp_mail($to , $subject, $htmlContent, $headers);
    wp_mail('info@zoonika.com' , $subject, $htmlContent, $headers);

  // return $message;
    return $user_data->data;
	}
}


add_action('rest_api_init', function(){
	register_rest_route('adeapi/v1', 'add_user_api',[
		'methods'	=>	'POST',
		'callback'	=>	'add_user_api'
	]);

});