<?php



// 変数の初期化
$page_flag = 0;
$clean = array();
$error = array();
// サニタイズ
if( !empty($_POST) ) {
	foreach( $_POST as $key => $value ) {
		$clean[$key] = htmlspecialchars( $value, ENT_QUOTES);
	}
}
if( !empty($clean['btn_confirm']) ) {
	$error = validation($clean);
	if( empty($error) ) {
		$page_flag = 1;
	}
} elseif( !empty($clean['btn_submit']) ) {
	$page_flag = 2;
// 変数とタイムゾーンを初期化
$header = null;
$auto_reply_subject = null;
$auto_reply_text = null;
$admin_reply_subject = null;
$admin_reply_text = null;
date_default_timezone_set('Asia/Tokyo');
$header = "MIME-Version: 1.0\n";
$header .= "From: contact\n";


// 運営側へ送るメールの件名
$admin_reply_subject = "お問い合わせを受け付けました";

// 本文を設定
$admin_reply_text = "下記の内容でお問い合わせがありました。（お問い合わせ）\n\n";
$admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
$admin_reply_text .= "氏名：" . $clean['name'] . "\n";
$admin_reply_text .= "カナ：" . $clean['furigana'] . "\n";
$admin_reply_text .= "会社名：" . $clean['companyname'] . "\n";
$admin_reply_text .= "電話番号：" . $clean['tel'] . "\n";
$admin_reply_text .= "メール：" . $clean['mail'] . "\n";
$admin_reply_text .= "メール２：" . $clean['mail2'] . "\n";
if( $clean['inquiry'] === "civil" ){
		$admin_reply_text .= "土木事業\n";
	} elseif ( $clean['inquiry'] === "building" ){
		$admin_reply_text .= "建築事業\n";
	} elseif ( $clean['inquiry'] === "environment" ){
		$admin_reply_text .= "環境事業\n";
	} elseif ( $clean['inquiry'] === "recruit" ){
		$admin_reply_text .= "採用関係\n";
	} elseif( $clean['inquiry'] === "other" ){
		$admin_reply_text .= "その他\n";
	}

$admin_reply_text .= "問い合わせ内容：" . $clean['content'] . "\n\n";



// 運営側へメール送信
mb_send_mail( 'soumu@daioh.co.jp', $admin_reply_subject, $admin_reply_text, $header);

}
function validation($data) {
  $error = array();
  // お名前のバリデーション
  if( empty($data['name']) ) {
    $error[] = "「お名前」は必ず入力してください。";
	}

  // フリガナのバリデーション
	if( empty($data['furigana']) ) {
		$error[] = "「フリガナ」は必ず入力してください。";
	}
  // 電話番号のバリデーション
	if( empty($data['tel']) ) {
		$error[] = "「電話番号」は必ず入力してください。";
	}
  // 問い合わせ内容のバリデーション
	if( empty($data['inquiry']) ) {
		$error[] = "「問い合わせ内容」は必ず選んでください。";
	}
  elseif( (int)$data['inquiry'] < civil || other < (int)$data['inquiry'] ) {
	$error[] = "「問い合わせ内容」は必ず選んでください。";
}
  // 問い合わせ内容のバリデーション
	if( empty($data['content']) ) {
		$error[] = "「問い合わせ内容」は必ず入力してください。";
	}
  return $error;
  }

?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>大旺新洋株式会社</title>
  <meta name="keywords" content="大旺新洋,建設,高知" />
  <meta name="description" content="大旺新洋は、高知県に本社を据え、全国で活動している建設会社です。道路や橋、護岸など、公共性の高い工事を多く行っています。じっと腰を据えてひとつひとつ丁寧に仕上げた仕事は、地域の人々の暮らしを静かに、しかししっかりと支えています。" />
  <link rel="icon" href="dist/images/favicon.ico" type="image/vnd.microsoft.icon">
  <meta property="og:locale" content="ja_JP" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="大旺新洋株式会社" />
  <meta property="og:description" content="大旺新洋は、高知県に本社を据え、全国で活動している建 設会社です。道路や橋、護岸など、公共性の高い工事を多 く行っています。じっと腰を据えてひとつひとつ丁寧に 仕上げた仕事は、地域の人々の暮らしを静かに、しかし しっかりと支えています。" />
  <meta property="og:url" content="http://www.daioh.co.jp/" />
  <meta property="og:site_name" content="大旺新洋株式会社" />
  <meta property="og:image" content="./dist/images/facebook.jpg" />
  <meta property="og:image:secure_url" content="" />
  <meta property="og:image:width" content="1656" />
  <meta property="og:image:height" content="932" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="大旺新洋は、高知県に本社を据え、全国で活動している建 設会社です。道路や橋、護岸など、公共性の高い工事を多 く行っています。じっと腰を据えてひとつひとつ丁寧に 仕上げた仕事は、地域の人々の暮らしを静かに、しかし しっかりと支えています。" />
  <meta name="twitter:title" content="大旺新洋株式会社" />
  <meta name="twitter:site" content="" />
  <meta name="twitter:image" content="./dist/images/twitter.jpg" />
  <meta name="twitter:creator" content="" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="./dist/css/main.min.css">
  <link href="dist/aos.css" rel="stylesheet">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
  <div class="wrapper">
    <header>
      <div class="header-inner">
        <a href="#" class="site-logo-f">
          <h1><img src="dist/images/logo.png" alt="大旺新洋株式会社"></h1>
        </a>
        <div id="f-menu">
          <div id="nav-toggle">
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>MENU</span>
          </div>
        </div>
        <nav>

          <ul id="menu-button" class="">
            <li class="tex-re"><a href="＃">RECRUIT<br class="sp_none">採用情報サイト</a></li>
            <li><a href="index.html">採用情報<br class="sp_none">トップ</a></li>
            <li><a href="project.html">大旺の事業・<br class="sp_none">プロジェクト</a></li>
            <li><a href="whats.html">大旺新洋って<br class="sp_none">どんな会社？</a></li>
            <li><a href="message.html">社長からの<br class="sp_none">メッセージ</a></li>
            <li><a href="support.html">教育制度</a></li>
            <li><a href="session.html">説明会・<br class="sp_none">インターン</a></li>
            <li><a href="recruitment.html">募集要項</a></li>
            <a href="＃" class="nav-entry">
              <li>ENTRY<br class="sp_none"><span class="tex-min">エントリー</span></li>
            </a>
          </ul>
        </nav>
      </div>
      <div class="content-mask">
      </div>
    </header>
    <div id="out-box">
      <div class="r-sec2-in">
        <p class="sec2-catch animated delay-1s" data-aos="fade-right">
          新卒採用　お問い合わせ<br>Contact Us
        </p>
        <div class="dot w-dot-1"></div>
      </div>
    <div id="out-box">
      <div id="works-index" class="s-main">
          <section>
            <div class="s-main-inner">
            <p id="contact" class="main-subtitle sub-4mb_mail sub-4mt">メールでのお問い合わせ</p>
						<!-- form -->
						<!-- formModla -->
							<?php if ($page_flag === 1) : ?>
								<div class="health-wrap modal">
									<div id="modal_bg"></div>

						<form method="post" action="" id="flag1" class="health-wrap contact-modal ContactInput check-wrap">
							<p class="content-ti-point">この内容で送信します。よろしいですか？</p>
							<div id="ContactConfirm" class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">お名前</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
								<p id="input_text" class="CfmItem"><?php echo $clean['name']; ?></p>
								</div>
							</div>

							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">フリガナ（全角）</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
									<p id="input_text2" class="CfmItem"><?php echo $clean['furigana']; ?></p>
								</div>
							</div>

							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">会社名</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
									<p id="input_text3" class="CfmItem"><?php echo $clean['companyname']; ?></p>
								</div>
							</div>
							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">電話番号</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
									<p id="input_text7" class="CfmItem"><?php echo $clean['tel']; ?></p>
								</div>
							</div>
							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">メールアドレス</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
									<p id="input_text8" class="CfmItem"><?php echo $clean['mail']; ?></p>
								</div>
							</div>
							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">確認のためもう一度</p>
								</div>
								<div class="flex-l-l t-left contact-fbox1">
									<p id="input_text9" class="CfmItem"><?php echo $clean['mail2']; ?></p>
								</div>
							</div>
							<div class="flex-row-md plant-list-box-none">
								<div class="flex-l-r t-left">
									<p class="text-b">お問い合わせ内容</p>
								</div>
									<div class="flex-l-l t-left">
										<p id="input_radio" class="CfmItem">
											<?php if( $clean['inquiry'] === "civil" ){ echo '土木事業'; }
											elseif( $clean['inquiry'] === "building" ){ echo '建築事業'; }
											elseif( $clean['inquiry'] === "environment" ){ echo '環境事業'; }
											elseif( $clean['inquiry'] === "recruit" ){ echo '採用関係'; }
											elseif( $clean['inquiry'] === "other" ){ echo 'その他'; }?>
										</p>
										<p id="textarea" class="CfmItem"><?php echo $clean['content']; ?></p>
									</div>
							</div>
							<div class="flex-row-md plant-list-box-none contact-wrap">
								<div class="flex-in">
									<input type="submit" name="btn_back" value="入力画面に戻る" class="health-wrap contact-gb">
								</div>
								<div class="flex-in contact-wrap">
									<input type="submit" name="btn_submit" value="このまま送信する" class="health-wrap contact-bbtn">
								</div>
						</div>
						<input type="hidden" name="name" value="<?php echo $clean['name']; ?>">
						<input type="hidden" name="furigana" value="<?php echo $clean['furigana']; ?>">
						<input type="hidden" name="companyname" value="<?php echo $clean['companyname']; ?>">
						<input type="hidden" name="tel" value="<?php echo $clean['tel']; ?>">
						<input type="hidden" name="mail" value="<?php echo $clean['mail']; ?>">
						<input type="hidden" name="mail2" value="<?php echo $clean['mail2']; ?>">
						<input type="hidden" name="inquiry" value="<?php echo $clean['inquiry']; ?>">
						<input type="hidden" name="content" value="<?php echo $clean['content']; ?>">
						</form>
						</div>
						<!-- formModla -->

				<div>
				<?php elseif ($page_flag === 2) : ?>

				<div id="" class="ContactInput health-wrap tex-p_1">

							<p>お問合せを受け付けました</p>
							<p>お問合せいただきありがとうございました。</p>
							<p>お送りいただきました内容を確認し、<br>担当者よりご連絡させていただきます。</p>
							<p>恐れ入りますが、今しばらくお待ちいただけますよう、よろしくお願い申し上げます。</p>
				</div>
				<?php else: ?>
					<?php if( !empty($error) ): ?>
					<ul class="error_list">
					<?php foreach( $error as $value ): ?>
					<li><?php echo $value; ?></li>
					<?php endforeach; ?>
					</ul>
					<?php endif; ?>
				<!-- form -->
				<div class="ContactInput">
					<p class="text-p health-wrap">以下のフォームに必要事項を入力し、「入力内容を確認する」のボタンを押してください。</p>
					<form class="" action="#contact" method="post" id="form">
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">お名前<span class="notice">必須</span></p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt1" type="text" name="name" value="<?php if(!empty($clean['name'])) { echo $clean['name']; }?>" class="CntItem CntInput Require">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">フリガナ（全角）<span class="notice">必須</span></p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt2" type="text" name="furigana" value="<?php if(!empty($clean['furigana'])) { echo $clean['furigana']; }?>" class="CntItem CntInput Require">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">会社名</p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt3" type="text" name="companyname" value="<?php if(!empty($clean['companyname'])) { echo $clean['companyname']; }?>" class="CntItem CntInput Require">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">電話番号<span class="notice">必須</span></p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt7" type="tel" name="tel" value="<?php if(!empty($clean['tel'])) { echo $clean['tel']; }?>" class="CntItem CntInput Require">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">メールアドレス</p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt8" type="email" name="mail" value="<?php if(!empty($clean['mail'])) { echo $clean['mail']; }?>" class="CntItem CntInput Require CntMail">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">確認のためもう一度</p>
						</div>
						<div class="flex-l-l t-left contact-fbox1">
							<input id="Cnt9" type="email" name="mail2" value="<?php if(!empty($clean['mail2'])) { echo $clean['mail2']; }?>" class="CntItem CntInput Require CntMail">
						</div>
					</div>
					<div class="flex-row-md plant-list-box-none">
						<div class="flex-l-r t-left">
							<p class="text-b">お問い合わせ内容<span class="notice">必須</span></p>
						</div>
						<div class="flex-l-l t-left">
							<ul class="contact-check">
								<li>
									<input id="Cnt10" type="radio" name="inquiry" value="civil" <?php if( !empty($clean['inquiry']) && $clean['inquiry'] === "civil" ){ echo 'checked'; } ?>>土木事業
								</li>
								<li>
									<input id="Cnt11" type="radio" name="inquiry" value="building" <?php if( !empty($clean['inquiry']) && $clean['inquiry'] === "building" ){ echo 'checked'; } ?>>建築事業
								</li>
								<li>
									<input id="Cnt12" type="radio" name="inquiry" value="environment" <?php if( !empty($clean['inquiry']) && $clean['inquiry'] === "environment" ){ echo 'checked'; } ?>>環境事業
								</li>
								<li>
									<input id="Cnt13" type="radio" name="inquiry" value="recruit" <?php if( !empty($clean['inquiry']) && $clean['inquiry'] === "recruit" ){ echo 'checked'; } ?>>採用関係
								</li>
								<li>
									<input id="Cnt14" type="radio" name="inquiry" value="other" <?php if( !empty($clean['inquiry']) && $clean['inquiry'] === "other" ){ echo 'checked'; } ?>>その他
								</li>
							</ul>

							<p class="contact-fbox1">
								<textarea name="content" rows="5" placeholder="" id="Cnt15" class="CntItem CntText" value="">
										<?php if(!empty($clean['content'])) { echo $clean['content']; }?>
								</textarea>
							</p>
						</div>
					</div>
					<p class="contact-wrap">
					 <input id="submit　form-modal-btn" type="submit" name="btn_confirm" value="入力内容を確認する" class="contact-bbtn health-wrap">
					</p>
					</form>
				</div>

						<!-- form -->
						<?php endif; ?>
            </div>



            <!-- top_btn -->
            <div class="top_btn" style="display: none;">
              <div href="#top"><i class="fas fa-arrow-up"></i></div>
            </div>
            <!-- top_btn -->
          </section>

        </div>



        <!--sec5-->
        <!-- <section class="s-main t-sec5 mb-6 s-main-65">
              <a href="ca_contact.html" class="btn-rd btn-gr btn_base t-center"><i class="fas fa-envelope"></i> 新卒採用のお問い合わせ</a>
        </section> -->
        <!-- sec5 -->
      <!-- top_btn -->
      <p class="top_btn">
        <a href="#top"><i class="fas fa-arrow-up"></i></a>
      </p>
      <!-- top_btn -->

    </div>
  </div>

  <footer>
    <div class="footer_bg">
      <div class="wrap">
        <div class="flex-row-md">
          <p class="w-wrap f-inner f-img"><a href="index.html">採用情報<br class="sp_none">トップ</a></p>
          <p class="w-wrap f-inner"><a href="project.html">大旺の事業・<br class="sp_none">プロジェクト</a></p>
          <p class="w-wrap f-inner"><a href="whats.html">大旺新洋って<br class="sp_none">どんな会社？</a></p>
          <p class="w-wrap f-inner"><a href="message.html">社長からの<br class="sp_none">メッセージ</a></p>
          <p class="w-wrap f-inner"><a href="support.html">教育制度</a></p>
          <p class="w-wrap f-inner"><a href="session.html">説明会・<br class="sp_none">インターン</a></p>
          <p class="w-wrap f-inner"><a href="recruitment.html">募集要項</a></p>
          <p class="w-wrap f-inner fotter-nav-mb"><a href="../index.html" target="_blank">大旺新洋<br class="sp_none">トップ</a></p>
          <p class="w-wrap f-inner"><a href="#" class="nav-entry">ENTRY</a></p>
        </div>
      </div>
      <div class="f-copywrap">
        <div class="wrap">
          <div class="flex-row-colr">
            <div class="w-wrap">
              <p class="f-copy">Copyright © 2005-2019 大旺新洋株式会社 All rights reserved.</p>
            </div>
            <div class="w-wrap f-privacy">
              <p class="f-copy"><a href="../company/privacy.html">個人情報保護方針</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </footer>


  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <!-- main.js -->
  <script src="dist/js/main.min.js"></script>
  <script src="dist/aos.js"></script>
  <script>
    AOS.init();
  </script>

</body>

</html>
