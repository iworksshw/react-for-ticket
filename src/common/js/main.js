document.addEventListener("DOMContentLoaded", function () {
    //모드탭의 수
    const mainTab = document.querySelectorAll(".trainTab ul li a");
    if(mainTab) {
        mainTab.forEach(function(){
            const position = document.querySelector(".mainInner .leftBox");
            const tabItem = document.querySelectorAll(".trainTab ul li a");
            const tabCont = document.querySelectorAll(".tabCont > div");
            const linkCont  = document.querySelectorAll(".quickLink > ul");

            const exp = document.querySelector(".tabCont > .expressTrain");
            const stnd = document.querySelector(".tabCont > .standardTrain");
            const expLink = document.querySelector(".quickLink > ul.express");
            const stndLink = document.querySelector(".quickLink > ul.standard");

            const tabTa = window.matchMedia('(max-width: 1279px)');
            
            //모드탭 내의 메뉴 수
            tabItem.forEach(function(tabmenu,menuIdx,inElements){
                tabmenu.addEventListener("click", function(event){
                    inElements.forEach(function(inElement){
                        inElement.classList.remove("active");
                        inElement.setAttribute("title", "탭메뉴");
                    });
                    this.classList.add("active");
                    this.setAttribute("title", "선택 된 탭메뉴");
                    
                    tabCont.forEach(function(content,contIdx){
                        content.classList.remove("on");
                        if(menuIdx == contIdx){
                            content.classList.add("on");
                        }
                    })
                    

                    linkCont.forEach(function(link, linkIdx){
                        link.classList.remove("on");
                        if(menuIdx == linkIdx){
                            link.classList.add("on");
                        }
                    })

                    if (this.classList.contains("express")){
                        position.classList.remove("tabStandard");
                        position.classList.add("tabExpress");    
                        if(!tabTa.matches) {
                            fadeOut(stnd, 100);
                            fadeIn(exp, 100);
                            fadeOut(stndLink, 100);
                            fadeIn(expLink, 100, "flex");
                        }else{
                            stnd.setAttribute("style","display:none; opactiy:0;")
                            exp.setAttribute("style","display:block; opactiy:1;")
                            stndLink.setAttribute("style","display:none; opactiy:0;")
                            expLink.setAttribute("style","display:flex; opactiy:1;")
                        }
                    } else if (this.classList.contains("standard")){
                        position.classList.remove("tabExpress");
                        position.classList.add("tabStandard");
                        if(!tabTa.matches) {
                            fadeOut(exp, 100);
                            fadeIn(stnd, 100);
                            fadeOut(expLink, 100);
                            fadeIn(stndLink, 100, "flex");
                        }else{
                            exp.setAttribute("style","display:none; opactiy:0;")
                            stnd.setAttribute("style","display:block; opactiy:1;")
                            expLink.setAttribute("style","display:none; opactiy:0;")
                            stndLink.setAttribute("style","display:flex; opactiy:1;")
                        }
                    }
                });
            });
        });
    }

    //fade in
    function fadeIn(element, duration, dsp="block"){
        let opacity = 0;
        element.style.display = dsp;
        element.style.opacity = opacity;
        let action = setInterval(function(){
            opacity += 10/duration;
            element.style.opacity = opacity;
            if(opacity >= 1){
                clearInterval(action);
            }
        }, 10);
    }

    //fade out
    function fadeOut(element, duration){
        let opacity = 1;
        element.style.opacity = opacity;
        let action = setInterval(function(){
            opacity -= 10/duration;
            element.style.opacity = opacity;
            if(opacity <= 0){
                clearInterval(action);
                element.style.display = "none";
            }
        }, 10);
    }

    function mainSlide() {
        const masinSlide = new Swiper('.bannerArea > .banCover > .banInner', {
            direction: 'horizontal',
            loop: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

        var play = document.querySelector("#playBtn");
        var pause = document.querySelector("#pauseBtn");
        // console.log(play);
        // console.log(pause);
        if(play) {
            play.addEventListener('click',function(){
                masinSlide.autoplay.start();
                play.classList.remove("on");
                pause.classList.add("on");
            });
        }

        if(pause) {
            pause.addEventListener('click',function(){
                masinSlide.autoplay.stop();
                pause.classList.remove("on");
                play.classList.add("on");
            });
        }
    }

    mainSlide();

    const headerBox = document.querySelector(".layoutTop");
    
    console.log(headerBox);
    if (!headerBox) {
        console.error("headerBox 요소를 찾을 수 없습니다.");
    }

    window.addEventListener("scroll",function(){      
       console.log("스크롤 이벤트 발생");

        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("현재 스크롤 위치:", scrollTop);

        if (scrollTop >= 1) {
            headerBox.classList.add("scr");
        } else {
            headerBox.classList.remove("scr");
        }
    });
    
});

