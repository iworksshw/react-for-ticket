document.addEventListener("DOMContentLoaded", function () {

    //input text reset
    inputTextReset();

    // 드롭다운 (gnb & breadcrumb)
    initDropdowns();

    //파일 찾기
    inputFileUpload();

    // 탭메뉴 (모드 탭 함수)
    tabMenuInit();

    //팝업 내부 스크롤 시 타이틀 쉐도우 추가
    const scrollPops = document.querySelectorAll(".modPopup .popCont");
    scrollPops.forEach(function(scrollPop, idx){
        scrollPop.addEventListener("scroll",function(event){
            if(this.scrollTop >= 1){
                this.previousElementSibling.classList.add("shadow");
            }else{
                this.previousElementSibling.classList.remove("shadow");
            }

        });
    })


    /* 사이트맵 */
    const sitemap = document.querySelector('.sitemap');
    const openBtn = document.querySelector('.sitemapArea .openBtn');
    const closeBtn = document.querySelector('.sitemapArea .closeBtn');

    // 모바일 사이즈 체크
    function isMobileSize() {
        return window.innerWidth <= 1279;
    }

    // 열기
    openBtn.addEventListener('click', () => {
        sitemap.classList.add('active');
        document.body.style.overflow = 'hidden';
        openBtn.setAttribute('aria-expanded', 'true');

        // 모바일 사이즈에서 안 열리게
        if (isMobileSize()) {
            return;
        }

    });

    // 닫기
    closeBtn.addEventListener('click', () => {
        sitemap.classList.remove('active');
        document.body.style.overflow = '';
        openBtn.setAttribute('aria-expanded', 'false'); 
        openBtn.focus();
    });


    // 화면 크기 변경시 모바일에서 자동으로 닫기
    window.addEventListener('resize', () => {
        if (isMobileSize() && sitemap.classList.contains('active')) {
            closeBtn.click();
        }
    });



    /* Header - 마우스오버 & 탭 키 */
    const gnbArea = document.querySelector('.gnbArea');
    const depth1Items = document.querySelectorAll('.gnbArea .depth1List');

    // 모든 하위메뉴 숨기기
    function hideAllMenus() {
        document.querySelectorAll('.gnbArea .depth2Area').forEach(menu => {
            menu.style.display = 'none';
        });
        gnbArea.classList.remove('active');
    }

    // 해당 메뉴 보이기
    function showMenu(item) {
        hideAllMenus();
        
        const subMenu = item.querySelector('.gnbArea .depth2Area');
        if (subMenu) {
            subMenu.style.display = 'block';
            gnbArea.classList.add('active');
        }
    }

    // 이벤트 추가
    depth1Items.forEach(item => {
        // 마우스 오버
        item.addEventListener('mouseenter', () => showMenu(item));
        // 탭으로 포커스
        item.addEventListener('focusin', () => showMenu(item));
    });

    // 메뉴 영역 벗어나면 숨기기
    gnbArea.addEventListener('mouseleave', hideAllMenus);
    gnbArea.addEventListener('focusout', (e) => {
        if (!gnbArea.contains(e.relatedTarget)) {
            hideAllMenus();
        }
    });




});





/* 드롭다운 (gnb & breadcrumb) */
function initDropdowns() {
    const dropdowns = document.querySelectorAll(".comDropdown");

    if(!dropdowns) return;

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector(".btnDrop");
        const menu = dropdown.querySelector(".dropMenu");
        if (!btn || !menu) return;

        // 초기 상태
        btn.setAttribute("title", "열림");
        menu.style.display = "none";

        // 닫기
        const close = () => {
            btn.setAttribute("title", "열림");
            menu.style.display = "none"; 
            btn.classList.remove("open");
        };

        // 열기
        const open = () => {
            // 드롭다운 2개일때, 하나만 열리도록 처리
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    const b = d.querySelector(".btnDrop");
                    const m = d.querySelector(".dropMenu");
                    if (b && m) {
                        b.setAttribute("title", "열림");
                        m.style.display = "none";
                        b.classList.remove("open");
                    }
                }
            });

            // 자기 자신 열기
            btn.setAttribute("title", "닫힘");
            menu.style.display = "block";
            btn.classList.add("open");

        };

        // 토글 메뉴 클릭
        const toggle = () => (btn.getAttribute("title") === "닫힘" ? close() : open());
        btn.addEventListener("click", e => { 
            e.stopPropagation(); 
            toggle(); 
        });

        // 외부 클릭 시 닫기
        document.addEventListener("click", e => { 
            if (!dropdown.contains(e.target)) close(); 
        });

        // 드롭다운 메뉴 마지막에서 tab키 누르면 닫기
        const items = menu.querySelectorAll("li a, li button, li [tabindex]:not([tabindex='-1'])");
        if (items.length > 0) {
            const lastItem = items[items.length - 1];
            lastItem.addEventListener("keydown", e => {
                if (e.key === "Tab" && !e.shiftKey) { 
                    close(); 
                }
            });
        }

    });
}


//파일 찾기
function inputFileUpload(){
    //파일찾기
    const uploadFiles = document.querySelectorAll(".fileBox .uploadBtn");
    uploadFiles.forEach(function(uploadFile,idx){
        uploadFile.addEventListener("change",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            let fileName;
            if(window.FileReader){
                fileName = this.files[0].name;
                console.log(fileName);
            } else {
                console.log("noFileReader");
                //var filename = $(this).val().split('/').pop().split('\\').pop();
                //var filename = this.val().split('/').pop().split('\\').pop();
            }
            fileBox.querySelector(".textBox").innerText = fileName;
            fileBox.classList.add("on");
        });
    });

    //파일찾기 취소
    const delFiles = document.querySelectorAll(".fileBox .fileDel");
    delFiles.forEach(function(delFile,idx){
        delFile.addEventListener("click",function(event){
            const fileBox = parentsElementFind(this, "fileBox");
            fileBox.querySelector(".uploadBtn").value = "";
            fileBox.querySelector(".textBox").innerText = "";
            fileBox.classList.remove("on");
        });
    });
}

// ------------------------------- 팝업 함수 ------------------------------- //
let popupTriggerBtn = null;
//팝업 열기
function openPopup($popName){
    document.querySelector("#"+$popName).classList.add("on");

    //팝업 포커스 이동
    popupTriggerBtn = event.currentTarget;
    const closeButton = document.querySelector("#"+$popName+" .btnPopClose");
    closeButton.focus();
}
//팝업 닫기
function closePopup($popName){
    document.querySelector("#"+$popName).classList.remove("on");

    // 저장된 버튼으로 포커스 복귀
    if (popupTriggerBtn) {
        popupTriggerBtn.focus();
        popupTriggerBtn = null;
    }
}

//알럿
let alertTriggerBtn = null;
function openAlert($altName){
    document.querySelector("#"+$altName).classList.add("on");
    
    //알럿 포커스 이동
    alertTriggerBtn = event.currentTarget;
    const closeButton = document.querySelector("#"+$popName+" .btnArtClose");
    closeButton.focus();
}
function closeAlert($altName){
    document.querySelector("#"+$altName).classList.remove("on");

    // 저장된 버튼으로 포커스 복귀
    if (alertTriggerBtn) {
        alertTriggerBtn.focus();
        alertTriggerBtn = null;
    }
}

// ------------------------------- input text reset 함수 ------------------------------- //
function inputTextReset(){
    let btnResets = document.querySelectorAll('.btnReset');
    btnResets.forEach(function(btn){
        btn.addEventListener('click', function(){
            btn.parentNode.querySelector('.iptText').value = "";
            fnValid.check();
        })
    })
}

// ------------------------------- 탭메뉴 함수 ------------------------------- //
//모드 탭 함수
function tabMenuInit(){
    //모드탭의 수
    const modTabs = document.querySelectorAll(".modTab");
    modTabs.forEach(function(modTab,tabIdx,elements){
        const tabmenus = modTab.querySelectorAll(".tabName");
        const tabConts = modTab.querySelectorAll(".tabCont");

        //모드탭 내의 메뉴 수
        tabmenus.forEach(function(tabmenu,menuIdx,inElements){
            tabmenu.addEventListener("click", function(event){
                inElements.forEach(function(inElement){
                    inElement.classList.remove("on");
                    inElement.setAttribute("title", "탭메뉴");
                });
                this.classList.add("on");
                this.setAttribute("title", "선택 된 탭메뉴");
                tabConts.forEach(function(tabCont,contIdx){
                    tabCont.classList.remove("on");
                    if(menuIdx == contIdx){
                        tabCont.classList.add("on");
                    }
                })
            });
        });
    });

    tabMenuSwiper();
}
function tabMenuSwiper(){
    //모바일, 태블릿, PC 모두 슬라이드
    let tabSwiperAll = new Swiper(".tabSwiper.toAll", {
        focusableElements: false,
        slidesPerView: "auto",
        navigation: {
            prevEl: ".tabSwiper.toAll ~ .tabDirection .tabBtn.alignL button",
            nextEl: ".tabSwiper.toAll ~ .tabDirection .tabBtn.alignR button",
        },
    });
 
    //BreakPoint
    const tabMo = window.matchMedia('(max-width: 768px)');      //모바일 분기
    const tabTa = window.matchMedia('(max-width: 1279px)');     //태블릿 분기
    let tabSwiperMob;
    let tabSwiperTab;
   
    function tabSwiperMobAction($bln){
        if($bln){
            tabSwiperMob = new Swiper(".tabSwiper.toMob", {
                focusableElements: false,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".tabSwiper.toMob ~ .tabDirection .tabBtn.alignL button",
                    nextEl: ".tabSwiper.toMob ~ .tabDirection .tabBtn.alignR button",
                },
            });
        }else{
            if(tabSwiperMob){
                tabSwiperMob.destroy();
                tabSwiperMob = undefined;
            }
        }
    }
    function tabSwiperTabAction($bln){
        if($bln){
            tabSwiperTab = new Swiper(".tabSwiper.toTab", {
                focusableElements: false,
                slidesPerView: "auto",
                navigation: {
                    prevEl: ".tabSwiper.toTab ~ .tabDirection .tabBtn.alignL button",
                    nextEl: ".tabSwiper.toTab ~ .tabDirection .tabBtn.alignR button",
                },
            });
        }else{
            if(tabSwiperTab){
                tabSwiperTab.destroy();
                tabSwiperTab = undefined;
            }
        }
    }
 
    if(tabMo.matches) {
        //console.log("모바일");
        tabSwiperMobAction(true);
    } else {
        //console.log("모바일아님");
        tabSwiperMobAction(false);
    }
    if(tabTa.matches) {
        //console.log("태블릿");
        tabSwiperTabAction(true);
    } else {
        //console.log("태블릿아님");
        tabSwiperTabAction(false);
    }
 
    tabMo.addListener(function(){
        if(tabMo.matches) {
            //console.log("모바일");
            tabSwiperMobAction(true);
        } else {
            //console.log("모바일아님");
            tabSwiperMobAction(false);
        }
    });
    tabTa.addListener(function(){
        if(tabTa.matches) {
            //console.log("태블릿");
            tabSwiperTabAction(true);
        } else {
            //console.log("태블릿아님");
            tabSwiperTabAction(false);
        }
    });
}
function tabMenuInitLine(){
    //모드탭의 수
    const modTabs = document.querySelectorAll(".modTabLine");
    modTabs.forEach(function(modTab,tabIdx,elements){
        const tabmenus = modTab.querySelectorAll(".tabName");
        const tabConts = modTab.querySelectorAll(".tabCont");

        //모드탭 내의 메뉴 수
        tabmenus.forEach(function(tabmenu,menuIdx,inElements){
            tabmenu.addEventListener("click", function(event){
                inElements.forEach(function(inElement){
                    inElement.classList.remove("on");
                    inElement.setAttribute("title", "탭메뉴");
                });
                this.classList.add("on");
                this.setAttribute("title", "선택 된 탭메뉴");
                tabConts.forEach(function(tabCont,contIdx){
                    tabCont.classList.remove("on");
                    if(menuIdx == contIdx){
                        tabCont.classList.add("on");
                    }
                })
            });
        });
    });
}
function swiperTabLine() {
    const swiperLineTab = new Swiper('.tabArea', {
        direction: 'vertical',
        loop: false,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
}

// ------------------------------- 아코디언 함수 ------------------------------- //
//모드 아코디언 함수
function accordionInit(){
    const modAccos = document.querySelectorAll(".modAccordion");
    modAccos.forEach(function(modAcco,modIdx){
        const accoItems = modAcco.querySelectorAll(".accoArea");
        accoItems.forEach(function(accoItem,itemIdx,elements){
            const accoBtn = accoItem.querySelector(".accoTitle");
            const accoCont = accoItem.querySelector(".accoBody");
            accoBtn.addEventListener("click",function(){
                if(this.classList.contains("on")){
                    this.classList.remove("on");
                    this.setAttribute("title", "답변 닫힘");
                    slideUp(accoCont,300);
                    return;
                }
                this.classList.add("on");
                this.setAttribute("title", "답변 열림");
                slideDown(accoCont,300);
            });
        });
    });
}


// ------------------------------- 아코디언 리스트 함수 ------------------------------- //
//모드 아코디언 리스트 함수
function accordionListInit(){
    const modAccos = document.querySelectorAll(".modAccordionList");
    modAccos.forEach(function(modAcco,modIdx){
        const accoItems = modAcco.querySelectorAll(".accoArea");
        accoItems.forEach(function(accoItem,itemIdx,elements){
            const accoBtn = accoItem.querySelector(".accoTitle");
            const accoCont = accoItem.querySelector(".accoBody");

            accoBtn.addEventListener("click",function(){
                elements.forEach(function(element, eleIdx){
                    if(element.classList.contains("on")){
                        element.classList.remove("on");
                        element.querySelector('dt button').setAttribute("title", "답변 닫힘");
                        slideUp(element.querySelector(".accoBody"),300);
                    }else if(itemIdx == eleIdx){
                        element.classList.add("on");
                        element.querySelector('dt button').setAttribute("title", "답변 열림");
                        slideDown(element.querySelector(".accoBody"),300);
                    }
                });
            });
        });
    });
}
// ------------------------------- 모션 함수 ------------------------------- //

//fade in
function fadeIn(element, duration){
    let opacity = 0;
    element.style.display = "block";
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

//fade toggle
function fadeToggle(element, duration){
    element.style.display == "block" ? fadeOut(element, duration) : fadeIn(element, duration);
}

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

// ------------------------------- 기타 함수 ------------------------------- //
//parents 엘리먼트 찾기
function parentsElementFind(my, findElement){
    let parentElement = my.parentNode;
    for(let i = 0;i<=20;++i){
        if(!parentElement.classList.contains(findElement)){
            parentElement = my.parentNode.parentNode;
        }else{
            return parentElement;
        }
    }
}

// ------------------------------- datePicker ------------------------------- //
//날짜
function datePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd'
        }
    });
}
//날짜 + 시간
function timePicker(startIpt, startCont){
    let datepicker = new tui.DatePicker('#'+startCont, {
        date: new Date(),
        input: {
            element: '#'+ startIpt,
            format: 'yyyy-MM-dd HH:mm A'
        },
        timePicker: true
    });
}
//datePicker("datepicker-input","wrapper");

//날짜 기간~기간
function datePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd'
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}
//날짜 기간+시간 ~ 기간+시간
function timePickerTo(startIpt, startCont, endIpt, endCont){
    let today = new Date();
    let picker = tui.DatePicker.createRangePicker({
        startpicker: {
            date: today,
            input: '#'+ startIpt,
            container: '#'+ startCont
        },
        endpicker: {
            date: today,
            input: '#'+ endIpt,
            container: '#'+ endCont
        },
        selectableRanges: [
            [today, new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())]
        ],
        format: 'YYYY-MM-dd HH:mm',
        timePicker: true
    });

    picker.on('change:end', () => {
        console.log(123);
    })
}

//datePickerTo("startpicker-input", "startpicker-container", "endpicker-input", "endpicker-container");
