$(function(){
			$('#nav-toggle').click(function(){
						$("header").toggleClass('open');
				$("nav").slideToggle(500);
					});

		});

		$(function(){

		// ボタンの要素を指定します。ここでは「#for_top a」を指定
		    var $btn = $('.top_btn');
		    var isHidden = true;

		//  デフォルトは非表示
		    $btn.hide();
		        $(window).scroll(function () {

		// 240pxスクロールした時点でフェードイン表示する
		        if( $(this).scrollTop() > 440 ) {　　
		            if( isHidden ) {
		                $btn.stop(true,true).fadeIn(300);
		                isHidden = false;
		            }
		        } else {

		//最上段から240pxの位置に戻るとフェードアウトで消える
		            if( !isHidden ) {
		                $btn.stop(true,true).fadeOut();
		                isHidden = true;
		            }
		        }
		    });



		// クリックイベントの登録
		    $btn.click(function(){

		//  ページトップへスクロール
		        $('html, body').animate({
		                'scrollTop': 0

		// 1/1000秒でスピード調整
	}, 800);

		// デフォルトイベントのキャンセル
		        return false;
		    });
		});

// 		$(function(){
// 	$(window).on("scroll touchmove", function(){ //スクロール中に判断する
// 			$(".top_btn").stop(); //アニメーションしている場合、アニメーションを強制停止
// 			$(".top_btn").css('display', 'none').delay(500).fadeIn('fast');
// 			//スクロール中は非表示にして、500ミリ秒遅らせて再び表示
// 	});
// });

// 		$(function(){
//   $(window).scroll(function(e){
//     var bottomY = 10, //スクロール時の下からの位置
//       $window = $(e.currentTarget),
//       height = $window.height(), //ウィンドウ(ブラウザ)の高さ
//       scrollTop = $window.scrollTop(), //スクロール量
//       documentHeight = $(document).height(), //ページ全体の高さ
//       footerHeight = $("footer").height(); //フッタの高さ
//       bottomHeight = footerHeight + height + scrollTop + bottomY - documentHeight;
//     if(scrollTop >= documentHeight - height - footerHeight + bottomY){
//       $('.top_btn').css({ bottom: bottomHeight - bottomY }); //スクロール時にbottomの値が変動
//     }else{
//       $('.top_btn').css({ bottom: bottomY });
//     }
//   });
// });



		$(function(){

		//グローバル変数
		var nowModalSyncer = null ;		//現在開かれているモーダルコンテンツ
		var modalClassSyncer = "modal-syncer" ;		//モーダルを開くリンクに付けるクラス名

		//モーダルのリンクを取得する
		var modals = document.getElementsByClassName( modalClassSyncer ) ;

		//モーダルウィンドウを出現させるクリックイベント
		for(var i=0,l=modals.length; l>i; i++){

			//全てのリンクにタッチイベントを設定する
			modals[i].onclick = function(){

				//ボタンからフォーカスを外す
				this.blur() ;

				//ターゲットとなるコンテンツを確認
				var target = this.getAttribute( "data-target" ) ;

				//ターゲットが存在しなければ終了
				if( typeof( target )=="undefined" || !target || target==null ){
					return false ;
				}

				//コンテンツとなる要素を取得
				nowModalSyncer = document.getElementById( target ) ;

				//ターゲットが存在しなければ終了
				if( nowModalSyncer == null ){
					return false ;
				}

				//キーボード操作などにより、オーバーレイが多重起動するのを防止する
				if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない
				//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する

				//オーバーレイを出現させる
				$( "#modal_bg" ).append( '<div id="modal-overlay"></div>' ) ;
				$( "#modal-overlay" ).fadeIn( "fast" ) ;

				//コンテンツをセンタリングする
				centeringModalSyncer() ;

				//コンテンツをフェードインする
				$( nowModalSyncer ).fadeIn( "slow" ) ;

				//[#modal-overlay]、または[#modal-close]をクリックしたら…
				$( "#modal-overlay,#modal-close" ).unbind().click( function() {

					//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
					$( "#" + target + ",#modal-overlay" ).fadeOut( "fast" , function() {

						//[#modal-overlay]を削除する
						$( '#modal-overlay' ).remove() ;

					} ) ;

					//現在のコンテンツ情報を削除
					nowModalSyncer = null ;

				} ) ;

			}

		}

			//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
			$( window ).resize( centeringModalSyncer ) ;

			//センタリングを実行する関数
			function centeringModalSyncer() {


				//モーダルウィンドウが開いてなければ終了
				if( nowModalSyncer == null ) return false ;

				//画面(ウィンドウ)の幅、高さを取得
				var w = $( window ).width() ;
				var h = $( window ).height() ;

				//コンテンツ(#modal-content)の幅、高さを取得
				// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
		//		var cw = $( nowModalSyncer ).outerWidth( {margin:true} ) ;
		//		var ch = $( nowModalSyncer ).outerHeight( {margin:true} ) ;
				var cw = $( nowModalSyncer ).outerWidth() ;
				var ch = $( nowModalSyncer ).outerHeight() ;

				//センタリングを実行する
				$( nowModalSyncer ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;

			}

		} ) ;



		function myFunction() {
			document.getElementById("workChild").classList.toggle("show");
		}

		window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {
				var dropdowns = document.getElementsByClassName("work-menu-childcontent");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		}


		$(function(){

	//.accordion7の中のp要素がクリックされたら
	$('.f-menu-sec p').click(function(){

		//クリックされた.accordion7の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();

	});

        //.accordion7の中の.innerの中のli要素の中のp要素がクリックされたら
	$('.f-menu-sec .inner li p').click(function() {

		//クリックされた.accordion7の中の.innerの中のli要素の中のp要素の子要素のul要素が開いたり閉じたりする。
		$(this).children('ul').slideToggle();

  });
});




$(function() {
  // input[type=text]の値を取得する
  $("input[type='text']").on("keyup", function() {
    var val = $('input[name="name"]').val();
    $("#input_text").text(val);
  });
	$("input[type='text']").on("keyup", function() {
    var val = $('input[name="name_kana"]').val();
    $("#input_text2").text(val);
  });
	$("input[type='text']").on("keyup", function() {
    var val = $('input[name="companyname"]').val();
    $("#input_text3").text(val);
  });
	$("input[type='text']").on("keyup", function() {
    var val = $('input[name="department"]').val();
    $("#input_text4").text(val);
  });
	$("input[type='text']").on("keyup", function() {
    var val = $('input[name="zip"]').val();
    $("#input_text5").text(val);
  });
	$("input[type='text']").on("keyup", function() {
    var val = $('input[name="address"]').val();
    $("#input_text6").text(val);
  });
	$("input[type='tel']").on("keyup", function() {
    var val = $('input[name="tel"]').val();
    $("#input_text7").text(val);
  });
	$("input[type='email']").on("keyup", function() {
    var val = $('input[name="mail"]').val();
    $("#input_text8").text(val);
  });
	$("input[type='email']").on("keyup", function() {
    var val = $('input[name="mail2"]').val();
    $("#input_text9").text(val);
  });
	$("input[type='radio']").on("change", function() {
    var val = $(this).val();

    $("#input_radio").text(val);
  });
	$("textarea").on("keyup", function(){
    var val = $(this).val();
    $("#textarea").text(val)
  });

	});

$('#submit').click(function() { $('#mail_form').submit(); });


$(function(){
   // #で始まるアンカーをクリックした場合に処理
	 var headerHight = 100;

   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top-headerHight;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});




$(function(){

	//分割したい個数を入力
	var division = 5;

	//要素の数を数える
	var divlength = $('#media-list .li').length;
	//分割数で割る
	dlsizePerResult = divlength / division;
	//分割数 刻みで後ろにmorelinkを追加する
	for(i=1;i<=dlsizePerResult;i++){
		$('#media-list .li').eq(division*i-1)
                .after('<span class="morelink link'+i+'">続きを読む</span>');
	}
	//最初のli（分割数）と、morelinkを残して他を非表示
	$('#media-list .li,.morelink').hide();
	for(j=0;j<division;j++){
		$('#media-list .li').eq(j).show();
	}
	$('.morelink.link1').show();

	//morelinkにクリック時の動作
	$('.morelink').click(function(){
		//何個目のmorelinkがクリックされたかをカウント
		index = $(this).index('.morelink');
		//(クリックされたindex +2) * 分割数 = 表示数
		for(k=0;k<(index+2)*division;k++){
			$('#media-list .li').eq(k).fadeIn();
		}

		//一旦全てのmorelink削除
		$('.morelink').hide();
		//次のmorelink(index+1)を表示
		$('.morelink').eq(index+1).show();

	});

});
