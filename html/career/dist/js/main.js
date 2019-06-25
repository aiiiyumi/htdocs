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
		                $btn.stop(true,true).fadeIn(400);
		                isHidden = false;
		            }
		        }

		    });



		});

		$(function(){
		  $('.top_btn').on('click', function(){
		    $('body,html').animate({
		     scrollTop: 0
		   },800);
		  });

		  var timer = false;
		  $(window).scroll(function(){
		    var scrollY = $(this).scrollTop();
		    var windowH = $(window).height();
		    scrolling = true ;

		    if (timer !== false) {
		      clearTimeout(timer);
		      $('.top_btn').fadeIn();
		    }
		    timer = setTimeout(function() {
		      if(scrollY + windowH > $('body').offset().top) {
		        $('.top_btn').fadeOut(900);
		      } else if(scrollY > 200) {
		        $('.top_btn').fadeOut(900);
		      } else if (scrollY + windowH > $('footer').offset().top) {
						$('.top_btn').fadeIn(100);
					}else{
		        $('.top_btn').fadeIn(100);

		      }
		    }, 500);
		  });

		});


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

//01陸上土木
$(function() {
	$(".a-thumb1").click(function() {
		$(".p-imgboxa").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/2yO5Av4_ZgM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".a-thumb2").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/26.png" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">高知県や四国地方を中心に、関東地方や東北地方でも工事を行います。</p></div>');
	});
	$(".a-thumb3").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/27.png" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">住民の暮らしを守る重要な基盤整備となる公共事業が中心です。</p></div>');
	});
	$(".a-thumb4").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/28.png" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">高知県の会社として、<br>高潮対策工事は住民の命を守る大切な工事として力を入れています。</p></div>');
	});
	$(".a-thumb5").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/c_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">富士山の保護工事についても、高い技術力が評価され長年続けている工事の一つです。</p></div>');
	});
	$(".a-thumb6").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/c_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">ニューマチックケーソン工法など技術力が必要な工法も積極的に採用し、会社としての経験値を高めています。</p></div>');
	});
	$(".a-thumb7").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/31.png" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">交通量の多い地域の主要道の工事は、地域の皆様の理解を頂き、安全管理に細心の注意を払いながら進めます。</p></div>');
	});
	$(".a-thumb8").click(function() {
		$(".p-imgboxa").html('<img src="../dist/images/r02_sum.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">登米地区下部工工事／宮城県登米市東和町米谷字朝田貫地内</p></div>');
	});
	//02港湾土木
	$(".b-thumb1").click(function() {
	  $(".p-imgboxb").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/kHsd1Y-QbfI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".b-thumb2").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_1.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">岸壁は、ケーソンと呼ばれるコンクリート製の大型の箱を海中に沈めて造ります。</p></div>');
	});
	$(".b-thumb3").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_2.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">高さが約10mのケーソンを据え付けた岸壁。ケーソンとしては小さめですが、それでも700tもあります。</p></div>');
	});
	$(".b-thumb4").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_3.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">巨大なケーソンを海中に設置するのに、許される誤差はわすか数センチ。技術力、想像力、経験が問われる現場です。</p></div>');
	});
	$(".b-thumb5").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_4.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">風や雨、波などの状況が常に変化し、多数の機材を同時に運用する海上での作業には、チームワークが不可欠です。</p></div>');
	});
	$(".b-thumb6").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_5.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">ケーソンを作る海上ドッグです。ケーソンは巨大なので、海上で作って船で運びます。</p></div>');
	});
	$(".b-thumb7").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p_1_6.jpg" alt="" class="mainImage-b"><div class="change_text"><p class="change-text-bg tex-min">ケーソン制作の様子です。木枠で囲いながらコンクリートを流し込み、下から順番に造ります。</p></div>');
	});
	$(".b-thumb8").click(function() {
	  $(".p-imgboxb").html('<img src="../dist/images/p01.jpg" alt="" class="mainImage-b">');
	});

	//03船舶
	$(".c-thumb1").click(function() {
	  $(".p-imgboxc").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/WtqbXNIt-qU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".c-thumb2").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">まるでクレーンゲームのように海底の土砂を掴み取って作業するのが、グラブ浚渫船です。</p></div>');
	});
	$(".c-thumb3").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">平成27年3月26日に完工式を迎えた最新鋭のグラブ浚渫船、「第十五龍正丸」です。</p></div>');
	});
	$(".c-thumb4").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">揺れる船の上、巨大なグラブで見えない海中を正確に掘る作業には熟練の技が必要です。</p></div>');
	});
	$(".c-thumb5").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">工期中は土日や休日を除き、基本的に船上で生活します。共に過ごすメンバーは家族同然の仲間です。</p></div>');
	});
	$(".c-thumb6").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">浚渫船の頭脳である操船室。たくさんのモニタを確認しながら、長さ60mの浚渫船を操ります。</p></div>');
	});
	$(".c-thumb7").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/s_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">タグボートと呼ばれる小型船が浚渫船の移動から、資材の運搬まで浚渫作業をサポートします。</p></div>');
	});
	$(".c-thumb8").click(function() {
		$(".p-imgboxc").html('<img src="../dist/images/sp01_sum.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">グラブ式浚渫船 第十五龍正丸</p></div>');
	});

	//04舗装
	$(".d-thumb1").click(function() {
	  $(".p-imgboxd").html('<div class="p-fbox"><iframe width="100%" height="autos" src="https://www.youtube.com/embed/FxwyoaUcv8c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".d-thumb2").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">2015年新設の四万十合材センター。1時間に60トンものアスファルトを生産できます。</p></div>');
	});
	$(".d-thumb3").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">モニターが並ぶオペレーター室。コンピューター制御でプラントを運転・管理します。</p></div>');
	});
	$(".d-thumb4").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">ダンプにアスファルトを積載。作りたてのアスファルトは非常に高温です。</p></div>');
	});
	$(".d-thumb5").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">出荷前にアスファルトの状態をチェック。冷めると固まるので、工事現場への移動時間を考えて温度管理します。</p></div>');
	});
	$(".d-thumb6").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">舗装工事は夜間工事となる場合も多いです。通行を規制しての工事は、綿密な時間が必要になります。</p></div>');
	});
	$(".d-thumb7").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/pv_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">舗装はやり直しができない一発勝負。機械化も進んでも、一人一人の技術が出来上がりを左右します。</p></div>');
	});
	$(".d-thumb8").click(function() {
		$(".p-imgboxd").html('<img src="../dist/images/s01.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">城山トンネル舗装工事／高知県須崎市</p></div>');
	});
	//05技術
	$(".e-thumb1").click(function() {
	 $(".p-imgboxe").html('<div class="p-fbox"><iframe width="100%" height="autos" src="https://www.youtube.com/embed/FMm-cZK-sS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".e-thumb2").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">土壌の硬さを測定する試験です。植生の適否や、適した工法を選定する際に行います。</p></div>');
	});
	$(".e-thumb3").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">質量と堆積を直接測って、土の湿潤密度を算出します。土被り圧のデータが必要な時に用いる試験方法です。</p></div>');
	});
	$(".e-thumb4").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">機械の操作にも正確性が求められます。正しいデータを得るために日々調整しています。</p></div>');
	});
	$(".e-thumb5").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">土を突き固めて最大乾燥密度や最適含水比などを求めます。工事の基礎、盛土等施工の管理基準となります。</p></div>');
	});
	$(".e-thumb6").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">現場から求められる結果は様々です。目的に合わせて試験内容を考え、解決方法を導き出します。</p></div>');
	});
	$(".e-thumb7").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/te_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">舗設後の現場に出て行う試験もあります。出来上がった路面の凹凸の程度や透水性などを調べます。</p></div>');
	});
	$(".e-thumb8").click(function() {
		$(".p-imgboxe").html('<img src="../dist/images/t1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">【土質試験／土粒子の密度試験】土粒子の容積あたりの質量を求め、土質の判断、飽和度や沈降分析の計算に用います。（仁井田試験室）</p></div>');
	});
	//06設計
	$(".f-thumb1").click(function() {
	  $(".p-imgboxf").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/4qCrdpL1OZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".f-thumb2").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">設計・積算はもちろんですが、現場で解決しにくいトラブルを技術的な支援を行い解決に導きます。</p></div>');
	});
	$(".f-thumb3").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">積算業務を集約して原価管理の精度を高めることで、設計面でチャレンジングな提案ができるようになります。</p></div>');
	});
	$(".f-thumb4").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">施工会社として、見た目だけでなく施工コストや建築後のメンテナンスをしっかり考えた設計を心がけています。</p></div>');
	});
	$(".f-thumb5").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">見積や予算の精度を高め、他社との競合で勝てる見積、利益をきっちり確保できる予算を作ります。</p></div>');
	});
	$(".f-thumb6").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">産学官の共同研究を行い、新しい発想で研究を進め、コンクリート構造物の予防保全や維持管理に活用していきます。</p></div>');
	});
	$(".f-thumb7").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/ar_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">ケーソン制作の様子です。木枠で囲いながらコンクリートを流し込み、下から順番に造ります。</p></div>');
	});
	$(".f-thumb8").click(function() {
		$(".p-imgboxf").html('<img src="../dist/images/a01.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">桜沢地区道路改良工事／宮城県本吉郡南三陸町入谷字岩沢地内</p></div>');
	});
	//07建築
	$(".g-thumb1").click(function() {
	  $(".p-imgboxg").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/amDa6hoI4HM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".g-thumb2").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">建築現場は高所作業が伴います。事故が起きないよう、徹底した安全管理が求められる現場です。</p></div>');
	});
	$(".g-thumb3").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">工場施設の建築現場。大型施設では緻密な計画と進捗管理が必要です。</p></div>');
	});
	$(".g-thumb4").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">作業員との定例ミーティング。施工図を元に、チェックを何度も繰り返す。</p></div>');
	});
	$(".g-thumb5").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">整理整頓、清潔は現場の基本です。現場チェックをしながらも、常に美化に努めます。</p></div>');
	});
	$(".g-thumb6").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">現場の安全や正確な進捗のために、作業員と密にコミュニケーションをとりながら施工を進めます。</p></div>');
	});
	$(".g-thumb7").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/bu_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">足場を組んで、鉄骨を建てます。この大きな施設も、2か月足らずの短期間で鉄骨が組み上がります。</p></div>');
	});
	$(".g-thumb8").click(function() {
		$(".p-imgboxg").html('<img src="../dist/images/b01.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">高知県警察本部庁舎／高知県高知市</p></div>');
	});
	//08環境
	$(".h-thumb1").click(function() {
	  $(".p-imgboxh").html('<div class="p-fbox"><iframe width="100%" height="auto" src="https://www.youtube.com/embed/abwnpzJHlTxs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
	});
	$(".h-thumb2").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_1.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">環境事業の拠点となる環境エンジニアリング本部社屋です。フロン破壊装置、再生装置が並んでいます。</p></div>');
	});
	$(".h-thumb3").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_2.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">フロン破壊処理の操作を行っています。新人は、まずはフロンの処理方法から学びます。</p></div>');
	});
	$(".h-thumb4").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_3.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">炎の色でフロン処理の状態をチェックします。目で見て判断する経験が必要な作業です。</p></div>');
	});
	$(".h-thumb5").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_4.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">装置のメンテナンスを行います。メーカーとしての重要な作業です。</p></div>');
	});
	$(".h-thumb6").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_5.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">大旺新洋はフロンの処理装置のメーカーでもあります。処理業を通して培ったノウハウを開発に活かせるところが強みです。</p></div>');
	});
	$(".h-thumb7").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/en_1_6.jpg" alt="" class="mainImage-a"><div class="change_text"><p class="change-text-bg tex-min">事業の成長のためには技術開発が不可欠です。産官学連携で、新しい方式を研究し開発につなげます。</p></div>');
	});
	$(".h-thumb8").click(function() {
		$(".p-imgboxh").html('<img src="../dist/images/p01.jpg" alt="" class="mainImage-a">');
	});
});
