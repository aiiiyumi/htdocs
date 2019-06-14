

<link rel="stylesheet" href="../css/main.min.css">
<div id="modal-content-01" class="health-wrap modal-content contact-modal">
  <p class="content-ti-point">この内容で送信します。よろしいですか？</p>
  <p class="content-ti-point">この内容で送信します。よろしいですか？</p>
  <!-- form -->
  <div id="ContactConfirm" class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">お名前</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
    <p id="input_text" class="CfmItem">&nbsp;</p>
    <p><?php echo htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8'); ?></p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">フリガナ（全角）</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text2" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">会社名</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text3" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">部署名</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text4" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">郵便番号</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text5" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">ご住所</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text6" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">電話番号</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text7" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">メールアドレス</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text8" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">確認のためもう一度</p>
    </div>
    <div class="flex-l-l t-left contact-fbox1">
      <p id="input_text9" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none">
    <div class="flex-l-r t-left">
      <p class="text-b">お問い合わせ内容</p>
    </div>
    <div class="flex-l-l t-left">
        <p id="input_radio" class="CfmItem">&nbsp;</p>
        <p id="textarea" class="CfmItem">&nbsp;</p>
    </div>
  </div>
  <div class="flex-row-md plant-list-box-none contact-wrap">
    <div class="flex-in">
      <input id="modal-close" type="button" name="submit" value="入力画面に戻る" class="health-wrap contact-gb">
    </div>
    <div class="flex-in contact-wrap">
      <input type="button" name="submit" value="このまま送信する" class="health-wrap contact-bbtn">
    </div>
  </div>
  <!-- form -->
<!-- <form id="mail-form" action="./send.php" method="post">
  <table>
      <thead>
        <tr>
          <td colspan="2">入力内容確認</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>お名前</th>
          <td>
          </td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td><?php echo htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td><?php echo htmlspecialchars($_POST['tel'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>URL</th>
          <td><?php echo htmlspecialchars($_POST['url'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>性別</th>
          <td><?php echo htmlspecialchars($_POST['sex'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>お住まいのエリア</th>
          <td><?php echo htmlspecialchars($_POST['location'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>お問い合わせ項目</th>
          <td>
           <?php
            foreach ($_POST['check'] as $value) {
              echo htmlspecialchars("{$value},", ENT_QUOTES, 'UTF-8');
            };
           ?>
          </td>
        </tr>
        <tr>
          <th>件名</th>
          <td><?php echo htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
        <tr>
          <th>お問い合わせ内容</th>
          <td><?php echo htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8'); ?>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td><a href="./form.php"><button type="button" id="back-input" name="back-input">入力画面へ戻る</button></a>
          </td>
          <td><button type="submit" id="submit-send" name="submit-send">送信する</button>
          </td>
        </tr>
      </tfoot>
  </table>
</form> -->
</div>
<script src="../js/main.min.js"></script>
