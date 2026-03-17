$(document).ready(function(){
	$(".familySite").click(function(){
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(".familySite dd").slideDown();
		}else{
			$(".familySite dd").slideUp();
		}
	});
	$(".menu li").mouseover(function(){
		$(this).children('ul').show();
		$('#gnb').show();
	});
	$(".menu li ul li").mouseleave(function(){
		$(".menu li > ul > li > ul").hide();
	});

	$("#gnb").mouseleave(function(){
		$('#gnb').hide();
		$("nav > ul > li > ul").hide();
	});

	$('.topBtn' ).click( function() {
		$( 'html, body' ).animate({ scrollTop : 0}, 400 );
		return false;
	});

	var swiper = new Swiper('.businessSlider', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.Next',
			prevEl: '.Prev',
		},
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		speed: 1500,
		parallax: true,
		loop:true,
	});

	$("aside > ul > li").each(function(){
		var hasDepth = $("aside ul > li").has("ul");

		$(hasDepth).children("a").css({"background":"url('/hankookilbo/images/common/icon_plus.jpg')no-repeat right 12px center"});	
		//	$("aside ul > li").children("ul").show();
		/*if($(this).children("ul").hasClass("2depth")) {*/
		$(hasDepth).click(function(){
			$("aside ul > li").children("ul").hide();
			$(hasDepth).children("a").css({"background":"url('/hankookilbo/images/common/icon_plus.jpg')no-repeat right 12px center"});	
			$(this).children("ul").show();
			$(this).children("a").css({"background":"url('/hankookilbo/images/common/icon_minus.jpg')no-repeat right 12px center"});	
		});
	});
	
	$(function() {
		var hoverLiData = '<span class="drowborder top"></span><span class="drowborder right"></span><span class="drowborder bottom"></span><span class="drowborder left"></span>';
		$('.businessLIst ul li').hover(function () {
			$(this).append(hoverLiData);
			$(this).find('.drowborder.top').animate({'width': '208px'}, 200);
			$(this).find('.drowborder.right').delay(200).animate({'height': '100%'}, 200);
			$(this).find('.drowborder.bottom').delay(400).animate({'width': '208px'}, 200);
			$(this).find('.drowborder.left').delay(600).animate({'height': '100%'}, 200);
			$('.businessLIst ul li.noactive').find('.drowborder').empty().remove();
		}, function () {
			$(this).find('.drowborder').empty().remove();
		});
	});
	
	$('.btn-example').click(function(){
		var $href = $(this).attr('href');
		layer_popup($href);
	});
	function layer_popup(el){

		var $el = $(el);        //레이어의 id를 $el 변수에 저장
		var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수
	
		isDim ? $('.dimLayer').fadeIn() : $el.fadeIn();

		var $elWidth = ~~($el.outerWidth()),
			$elHeight = ~~($el.outerHeight()),
			docWidth = $(document).width(),
			docHeight = $(document).height();

		// 화면의 중앙에 레이어를 띄운다.
		if ($elHeight < docHeight || $elWidth < docWidth) {
			$el.css({
				marginTop: -$elHeight /2,
				marginLeft: -$elWidth/2
			})
		} else {
			$el.css({top: 0, left: 0});
		}

		$el.find('a.btnLayerClose').click(function(){
			isDim ? $('.dimLayer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
			return false;
		});

		$('.layer .dimBg').click(function(){
			$('.dimLayer').fadeOut();
			return false;
		});

	}

	function popupOpen(url,intWidth,intHeight) {
		window.open(url, "_blank", "width="+intWidth+",height="+intHeight+",resizable=1,scrollbars=1") ;
	}

	var modal = {
		$bg : null,
		view : function($obj){
			if(!this.$bg){
				$("body").append('<span class="modal_bg"></span>');
				this.$bg = $(".modal_bg");
			};
			$(".pop_wrap").filter(":visible").find(".pop_close").click();
			$obj.css({"display":"block","visibility":"hidden"});
			var l = $obj.width()/2, t = $obj.height()/2;
			this.$bg.show();
			$obj.find(".pop_close").click(function(){ modal.hidden($obj); return false; });
			$obj.css({"visibility":"visible","margin-left":-l+"px","margin-top":-t+"px"});
		},
		hidden : function($obj){
			if(this.$bg) this.$bg.hide();
			$obj.hide();
		}
	}

/***SELECT***/
	var fileTarget = $('#CertFile');
		fileTarget.on('change', function(){ // 값이 변경되면 
		    var cur = $(".filebox input[id='CertFile']").val();
		$(".upload-name").val(cur);
		}); 

	var fileTarget = $('#DocFile');
		fileTarget.on('change', function(){ // 값이 변경되면 
		    var cur = $(".filebox input[id='DocFile']").val();
		$(".upload-name2").val(cur);
		}); 
/***SELECT***/
	/*$(window).scroll(function(e) {
        if( $(this).scrollTop() >= 1 ) {
			$('header').addClass('subHeader');
			$('header').css({"position": "fixed","top": 0, "width":"100%","background":"#fff"});
			$("#img_logo_url").attr("src", "/images/common/sub_logo.png");
        } else {
			$('header').removeClass('subHeader');
			$('header').css({"position": "relative"});
			$("#img_logo_url").attr("src", "/images/common/main_logo.png");
        }
    })*/
});


//20250401 이후 스크립트
document.addEventListener("DOMContentLoaded", function () {
	all1MenuAction(); //모바일 메뉴
	mainContSwiper(); //메인 컨텐츠 스와이프
});

//모바일 메뉴
function all1MenuAction(){
    const btnAllMenu = document.querySelector(".allMenu");
    const btnCloseAllMenus = document.querySelectorAll(".allMenuArea .btnClose");
    const all1Menus = document.querySelectorAll(".allMenuArea .depth1Name");
	
    if(btnAllMenu){
        btnAllMenu.addEventListener("click", function(e){
            document.querySelector(".allMenuArea").classList.add("on");
            document.querySelector("body").style.cssText = "height:100%; min-height:100%; overflow:hidden !important;";
        });
    }
    btnCloseAllMenus.forEach(function(btn){
        btn.addEventListener("click", function(e){
            document.querySelector(".allMenuArea").classList.remove("on");
            document.querySelector("body").style.cssText = "";
        });
    });
	
    all1Menus.forEach(function(all1Menu){
        all1Menu.addEventListener("click", function(e){
			if(!all1Menu.nextElementSibling){return;}
			e.preventDefault();
			all1Menu.parentNode.classList.toggle("on");
			if(all1Menu.parentNode.classList.contains("on")){
				slideDown(all1Menu.nextElementSibling, 200);
			}else{
				slideUp(all1Menu.nextElementSibling, 200);
			}
        });
    });
}



//메인 컨텐츠 스와이프
let mainBoardSwiper; //메인 중앙 컨텐츠
let mainListSwiper; //메인 공고 컨텐츠

//메인 공고 컨텐츠 스와이프 (모바일일때)
function mainMobileAction($bln){
	if(mainBoardSwiper){
		mainBoardSwiper.destroy();
		mainBoardSwiper = undefined;
	}
	if($bln){
		mainBoardSwiper = new Swiper(".mainTabSwiper", {
			focusableElements: false,
			slidesPerView: "auto",
		});
	}
}

//메인 중앙 컨텐츠 스와이프 (테블릿일때)
function mainTabletAction($bln){
	if(mainListSwiper){
		mainListSwiper.destroy();
		mainListSwiper = undefined;
	}
	if($bln){
		mainListSwiper = new Swiper(".infoSwiper", {
			focusableElements: false,
			slidesPerView: "auto",
		});
	}
}

//공고 스와이퍼 재시작(새로 불러왔을때)
function mainBoardReset() {
    const matchMo = window.matchMedia('(max-width: 768px)');      //모바일 분기
    if(matchMo.matches) {
        //console.log("모바일");
        mainMobileAction(true);
    } else {
        //console.log("모바일아님");
        mainMobileAction(false);
    }
}

function mainContSwiper(){
    const matchMo = window.matchMedia('(max-width: 768px)');      //모바일 분기
    const matchTa = window.matchMedia('(max-width: 1279px)');     //태블릿 분기

    matchMo.addEventListener("change", function(e){
        if(matchMo.matches) {
            console.log("모바일");
            mainMobileAction(true);
        } else {
            console.log("모바일아님");
            mainMobileAction(false);
        }
    });
    matchTa.addEventListener("change", function(e){
        if(matchTa.matches) {
            console.log("태블릿");
            mainTabletAction(true);
        } else {
            console.log("태블릿아님");
            mainTabletAction(false);
        }
    });
	
    if(matchMo.matches) {
        //console.log("모바일");
        mainMobileAction(true);
    } else {
        //console.log("모바일아님");
        mainMobileAction(false);
    }
    if(matchTa.matches) {
        //console.log("태블릿");
        mainTabletAction(true);
    } else {
        //console.log("태블릿아님");
        mainTabletAction(false);
    }
}

// ------------------------------- 모션 함수 ------------------------------- //
//slide function (slideUp)
function slideUp(element, duration) {
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideUpInterval = setInterval(function() {
        currentStep++;
        element.style.height = (height - stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideUpInterval);
            element.style.display = "none";
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}

//slide function (slideDown)
function slideDown(element, duration) {
    element.style.display = "block";
    element.style.height = "0px"; // 이 부분을 수정하여 초기 높이를 0으로 설정합니다.
    let height = element.scrollHeight;
    let interval = 10; // millidurationonds per frame
    let steps = Math.ceil(duration / interval);
    let stepHeight = height / steps;
    let currentStep = 0;

    let slideDownInterval = setInterval(function() {
        currentStep++;
        element.style.height = (stepHeight * currentStep) + "px";
        if (currentStep >= steps) {
            clearInterval(slideDownInterval);
            element.style.height = ""; // 높이를 초기화하여 다시 제대로 작동하도록 합니다.
        }
    }, interval);
}
