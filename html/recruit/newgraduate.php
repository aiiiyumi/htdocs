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
$admin_reply_text = "下記の内容でお問い合わせがありました。（新卒採用）\n\n";
$admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
$admin_reply_text .= "氏名：" . $clean['name'] . "\n";
$admin_reply_text .= "カナ：" . $clean['furigana'] . "\n";
$admin_reply_text .= "会社名：" . $clean['companyname'] . "\n";
$admin_reply_text .= "部署：" . $clean['department'] . "\n";
$admin_reply_text .= "郵便番号：" . $clean['zip'] . "\n";
$admin_reply_text .= "住所：" . $clean['address'] . "\n";
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
mb_send_mail( 'nyanpooo@lunedetriangle.sakura.ne.jp', $admin_reply_subject, $admin_reply_text, $header);

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
  <title>大旺新洋株式会社｜採用情報｜新卒採用</title>

	<meta name="keywords" content="大旺新洋,建設,高知" />
	<meta name="description" content="大旺新洋は、高知県に本社を据え、全国で活動している建 設会社です。道路や橋、護岸など、公共性の高い工事を多 く行っています。じっと腰を据えてひとつひとつ丁寧に 仕上げた仕事は、地域の人々の暮らしを静かに、しかし しっかりと支えています。"/>
		<link rel="icon" href="../dist/images/favicon.ico" type="image/vnd.microsoft.icon">
		<meta property="og:locale" content="ja_JP" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="大旺新洋株式会社" />
	<meta property="og:description" content="大旺新洋は、高知県に本社を据え、全国で活動している建 設会社です。道路や橋、護岸など、公共性の高い工事を多 く行っています。じっと腰を据えてひとつひとつ丁寧に 仕上げた仕事は、地域の人々の暮らしを静かに、しかし しっかりと支えています。" />
	<meta property="og:url" content="http://www.daioh.co.jp/recruit/newgraduate.php" />
	<meta property="og:site_name" content="大旺新洋株式会社" />
	<meta property="og:image" content="../dist/images/facebook.jpg" />
	<meta property="og:image:secure_url" content="" />
	<meta property="og:image:width" content="1656" />
	<meta property="og:image:height" content="932" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content="大旺新洋は、高知県に本社を据え、全国で活動している建 設会社です。道路や橋、護岸など、公共性の高い工事を多 く行っています。じっと腰を据えてひとつひとつ丁寧に 仕上げた仕事は、地域の人々の暮らしを静かに、しかし しっかりと支えています。" />
	<meta name="twitter:title" content="大旺新洋株式会社" />
	<meta name="twitter:site" content="" />
	<meta name="twitter:image" content="../dist/images/twitter.jpg" />
	<meta name="twitter:creator" content="" />
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
		<link rel="stylesheet" href="../dist/css/main.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
  <div id="civil" class="wrapper">
    <header id="header">
      <div class="header-inner">
        <a href="http://www.daioh.co.jp/" class="site-logo-f">
          <h1>
            <img src="../dist/images/logo.png" alt="大旺新洋株式会社">
          </h1>
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
            <li><a href="../index.html">TOP</a></li>
						<li><a href="../company/notice.html">お知らせ</a></li>
						<li><a href="../works/index.html">事業紹介</a></li>
						<li><a href="../pride/index.html">“裏方のプライド”</a></li>
            <li><a href="../company/index.html">企業情報</a></li>
						<li><a href="../company/health.html">健康経営への取組み</a></li>
            <li><a href="index.html">採用情報</a></li>
						<li><a href="../company/contact.php">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
        <div class="content-mask">
        </div>
      </header>
      <div id="out-box-9" class="container content-ti-box-b">
        <p class="content-ti-point">新卒採用</p>
      </div>
      <div class="s-container">
        <div id="works-index" class="s-main">
          <section>
            <div class="s-main-inner">
              <p class="main-subtitle">新卒採用者　募集内容</p>
              <div class="tex-p_1">
                <a href="https://job.rikunabi.com/2020/company/r628110006/" target="_blank" class="o-btn"><p>リクナビからエントリー</p></a>
                <a href="#contact" class="o-btn"><p>新卒採用 お問い合わせ</p></a>
              </div>
              <div class="tex-p_1">
                <table class="recruit-t">
                  <tbody>
                    <tr>
                      <th colspan="3" class="blue-b-p text-b">募集職種</th>
                    </tr>
                    <tr>
                      <td rowspan="3">総合職</td>
                      <td>技術系(土木施工管理、設計積算)</td>
                      <td rowspan="2">原則、施工管理試験指定学科対象</td>
                    </tr>
                    <tr>
                      <td>技術系(建築施工管理、設計積算)</td>
                    </tr>
                    <tr>
                      <td>事務系(総務、経理、営業ほか)</td>
                      <td rowspan="3">指定なし</td>
                    </tr>
                    <tr>
                      <td colspan="2">港湾船舶職</td>
                    </tr>
                    <tr>
                      <td colspan="2">舗装技能職</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tex-p_1">
                <table class="recruit-t">
                  <tbody>
                    <tr>
                      <th class="blue-b-p text-b">応募資格</th>
                    </tr>
                    <tr>
                      <td>大学、高専、専門・短大、高校卒業予定者</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tex-p_1 sub-4pb">
                <table class="recruit-t-less">
                  <tbody>
                    <tr>
                      <th colspan="7" class="blue-b-p text-b">採用人数</th>
                    </tr>
                    <tr class="recruit-t-bb">
                      <td class="blue-b-p text-b t-center">職種</td>
                      <td class="blue-b-p text-b t-center">平成26年<br>3月卒</td>
                      <td class="blue-b-p text-b t-center">平成27年<br>3月卒</td>
                      <td class="blue-b-p text-b t-center">平成28年<br>3月卒</td>
                      <td class="blue-b-p text-b t-center">平成29年<br>3月卒</td>
                      <td class="blue-b-p text-b t-center">平成30年<br>3月卒</td>
                      <td class="blue-b-p text-b t-center">平成31年<br>3月卒</td>
                    </tr>
                    <tr>
                      <td>総合職（土木系）</td>
                      <td class="t-center">2</td>
                      <td class="t-center">9</td>
                      <td class="t-center">2</td>
                      <td class="t-center">6</td>
                      <td class="t-center">10</td>
                      <td class="t-center">2</td>
                    </tr>
                    <tr>
                      <td>総合職（建築系）</td>
                      <td class="t-center">1</td>
                      <td class="t-center">4</td>
                      <td class="t-center">8</td>
                      <td class="t-center">7</td>
                      <td class="t-center">4</td>
                      <td class="t-center">5</td>
                    </tr>
                    <tr>
                      <td>総合職（環境）</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">1</td>
                      <td class="t-center">0</td>
                    </tr>
                    <tr>
                      <td>総合職（事務系）</td>
                      <td class="t-center">2</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">2</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                    </tr>
                    <tr>
                      <td>総合職（事務系）</td>
                      <td class="t-center">2</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">2</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                    </tr>
                    <tr>
                      <td>一般職（事務系）</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">0</td>
                      <td class="t-center">1</td>
                      <td class="t-center">1</td>
                      <td class="t-center">0</td>
                    </tr>
                    <tr>
                      <td>船舶職社員</td>
                      <td class="t-center">5</td>
                      <td class="t-center">3</td>
                      <td class="t-center">2</td>
                      <td class="t-center">2</td>
                      <td class="t-center">4</td>
                      <td class="t-center">2</td>
                    </tr>
                    <tr class="recruit-t-bb">
                      <td>舗装専門職社員</td>
                      <td class="t-center">0</td>
                      <td class="t-center">1</td>
                      <td class="t-center">3</td>
                      <td class="t-center">3</td>
                      <td class="t-center">3</td>
                      <td class="t-center">0</td>
                    </tr>
                    <tr class="recruit-t-bb">
                      <td class="blue-b-p text-b t-center">採用人数　計</td>
                      <td class="blue-b-p text-b t-center">10</td>
                      <td class="blue-b-p text-b t-center">17</td>
                      <td class="blue-b-p text-b t-center">15</td>
                      <td class="blue-b-p text-b t-center">21</td>
                      <td class="blue-b-p text-b t-center">23</td>
                      <td class="blue-b-p text-b t-center">9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                <p class="main-subtitle">給与条件</p>
                <div class="tex-p_1 sub-4pb">
                  <table class="recruit-t">
                    <tbody>
                      <tr>
                        <th class="blue-b-p text-b t-center">給　与</th>
                        <td>当社規定による</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">諸手当</th>
                        <td>家族手当、勤務地手当、現場手当、別居手当、超過勤務手当、免許手当</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">昇　給</th>
                        <td>年１回（7月）</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">賞　与</th>
                        <td>年2回（6月、12月）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="main-subtitle">勤務条件</p>
                <div class="tex-p_1 sub-4pb">
                  <table class="recruit-t">
                    <tbody>
                      <tr>
                        <th class="blue-b-p text-b t-center">勤 務 地</th>
                        <td colspan="2">高知本社・本店、東京支店、東北支店、名古屋支店、中国支店、九州支店 管轄地域</td>
                      </tr>
                      <tr>
                        <th rowspan="2" class="blue-b-p text-b t-center">諸手当</th>
                        <th class="blue-b-p text-b t-center">本支店勤務</th>
                        <td>平日／8：00～17：00　　土曜日／8：00～12：00</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">作業所勤務</th>
                        <td>平日／8：00～17：00　　土曜日／8：00～17：00</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">休　暇</th>
                        <td colspan="2">日曜日、第2,4土曜日、祝日、夏季休暇、年末年始休暇、会社記念日、特別休暇、有給休暇、リフレッシュ休暇</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="main-subtitle">福利厚生</p>
                <div class="tex-p_1 sub-4pb">
                  <table class="recruit-t">
                    <tbody>
                      <tr>
                        <th class="blue-b-p text-b t-center">加入保険</th>
                        <td>健康保険、厚生年金保険、労災保険、雇用保険</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">各種制度</th>
                        <td>互助会制度、借上社宅制度、住宅・教育資金融資制度、独身寮完備、退職金制度、育児休業・介護休業制度、継続雇用制度（定年60歳）、表彰制度、クラブ活動</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="main-subtitle">応募方法</p>
                <div class="tex-p_1 sub-4pb">
                  <p class="text-b tex-p_1">リクナビまたは下記お問い合わせフォームにてご応募ください。</p>
                  <div class="tex-p_1">
                    <a href="https://job.rikunabi.com/2020/company/r628110006/" target="_blank" class="o-btn"><p>リクナビからエントリー</p></a>
                    <a href="#contact" class="o-btn"><p>新卒採用 お問い合わせ</p></a>
                  </div>
                </div>
                <p class="main-subtitle">採用担当窓口</p>
                <div class="tex-p_1 sub-4pb">
                  <table class="recruit-t">
                    <tbody>
                      <tr>
                        <th class="blue-b-p text-b t-center">高知本社</th>
                        <td>〒781-0112　高知県高知市仁井田1625－2<br>管理本部（総務）　TEL:088－847-2112</td>
                      </tr>
                      <tr>
                        <th class="blue-b-p text-b t-center">東京支店</th>
                        <td>〒141-0031　品川区西五反田１丁目24番４号タキゲンビル４Ｆ<br>管理本部（業務推進）　TEL:03－5435-6280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p id="contact" class="main-subtitle sub-4mb_mail sub-4mt">メールでのお問い合わせ</p>


                  <!-- form -->
									<!-- formModla -->
                    <?php if ($page_flag === 1) : ?>
                      <div id="" class="health-wrap modal">
                        <div id="modal_bg"></div>

                  <form method="post" action="" id="flag1" class="health-wrap contact-modal ContactInput check-wrap-r-new">
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
                        <p class="text-b">部署名</p>
                      </div>
                      <div class="flex-l-l t-left contact-fbox1">
                        <p id="input_text4" class="CfmItem"><?php echo $clean['department']; ?></p>
                      </div>
                    </div>
                    <div class="flex-row-md plant-list-box-none">
                      <div class="flex-l-r t-left">
                        <p class="text-b">郵便番号</p>
                      </div>
                      <div class="flex-l-l t-left contact-fbox1">
                        <p id="input_text5" class="CfmItem"><?php echo $clean['zip']; ?></p>
                      </div>
                    </div>
                    <div class="flex-row-md plant-list-box-none">
                      <div class="flex-l-r t-left">
                        <p class="text-b">ご住所</p>
                      </div>
                      <div class="flex-l-l t-left contact-fbox1">
                        <p id="input_text6" class="CfmItem"><?php echo $clean['address']; ?></p>
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
									<input type="hidden" name="department" value="<?php echo $clean['department']; ?>">
									<input type="hidden" name="zip" value="<?php echo $clean['zip']; ?>">
									<input type="hidden" name="address" value="<?php echo $clean['address']; ?>">
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
                    <p class="text-b">部署名</p>
                  </div>
                  <div class="flex-l-l t-left contact-fbox1">
                    <input id="Cnt4" type="text" name="department" value="<?php if(!empty($clean['department'])) { echo $clean['department']; }?>" class="CntItem CntInput Require">
                  </div>
                </div>
                <div class="flex-row-md plant-list-box-none">
                  <div class="flex-l-r t-left">
                    <p class="text-b">郵便番号</p>
                  </div>
                  <div class="flex-l-l t-left contact-fbox1 c-zip">
                    <input id="Cnt5" type="text" name="zip" value="<?php if(!empty($clean['zip'])) { echo $clean['zip']; }?>" class="CntItem CntInput Require">
                  </div>
                </div>
                <div class="flex-row-md plant-list-box-none">
                  <div class="flex-l-r t-left">
                    <p class="text-b">ご住所</p>
                  </div>
                  <div class="flex-l-l t-left contact-fbox1">
                    <input id="Cnt6" type="text" name="address" value="<?php if(!empty($clean['address'])) { echo $clean['address']; }?>" class="CntItem CntInput Require">
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
            <p class="top_btn">
              <a href="#top"><i class="fas fa-arrow-up"></i></a>
            </p>
            <!-- top_btn -->
          </section>

        </div>

      </div>
    </div>
</div>






      <footer>
        <div class="wrap">
          <div class="flex-row-md">
              <p class="w-wrap f-inner f-img"><a href="../index.html"><img src="../dist/images/icon_logo.svg" alt="">大旺新洋TOP</a></p>
              <p class="w-wrap f-inner"><a href="../company/notice.html">お知らせ</a></p>
							<p class="w-wrap f-inner"><a href="../works/index.html">事業紹介</a></p>
							<p class="w-wrap f-inner"><a href="../pride/index.html">裏方のプライド</a></p>
							<p class="w-wrap f-inner"><a href="../company/index.html">企業情報</a></p>
							<p class="w-wrap f-inner"><a href="index.html">採用情報</a></p>
              <p class="w-wrap f-inner"><a href="../company/contact.php">お問い合わせ</a></p>
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

      </footer>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- main.js -->
    <script src="../dist/js/main.js"></script>

</body>

</html>
