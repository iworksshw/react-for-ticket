import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from './CptMain.module.scss';

//메인 좌측 직통열차
function Express () {

    return (
        <div className={`${styles.expressTrain} ${styles.on}`}>
            <p  className={styles.title}>
                <b>서울에서 공항까지</b> 한번에!<br/>가장 빠르고 편안하게 시작하세요.
            </p>

            <div className={styles.reserveBox}>
                <div className={`${styles.iptArea } ${styles.flexType}`}>
                    <div className={styles.left}>
                        <label htmlFor="departure">출발역</label>
                        <input type="text" id="departure" placeholder="어디서 출발하세요?" />
                    </div>
                    <div className={styles.right}>
                        <label htmlFor="arrival">도착역</label>
                        <input type="text" id="arrival" placeholder="어디로 갈까요?" />
                        <button type="button" className={styles.stnChange}>
                            <span className="blind">좌우 변경 버튼</span>
                        </button>
                    </div>
                </div>
                
                <div className={styles.iptArea}>
                    <label htmlFor="pax">인원</label>
                    <input type="text" id="pax" placeholder="몇명이서 가시나요?" />
                </div>

                <div className={styles.iptArea}>
                    <label htmlFor="date">날짜</label>
                    <input type="text" id="date" placeholder="언제 떠나실 건가요?" />
                </div>

                <div className={styles.btnArea}>
                    <button type="button">열차 조회</button>
                </div>
            </div>

            <div className={styles.expressOpt}>
                <ul>
                    <li><a href="javascript:void(0);"><p>이용안내<span>직통열차의 모든정보</span></p></a></li>
                    <li><a href="javascript:void(0);"><p>나의 승차권<span>QR로 한번에 패스!</span></p></a></li>
                </ul>
            </div>
        </div>
    )
}

//메인 좌측 일반열차
function Railroad () {

    return (
        <div className={`${styles.standardTrain} ${styles.on}`}>
            <p className={styles.title}>
                <b>수도권 어디서나</b> 환승 연결!<br/>공항과 도심을 편리하게 경험하세요.
            </p>

            <div className={styles.reserveBox}>
                <div className={`${styles.iptArea } ${styles.flexType}`}>
                    <div className={styles.left}>
                        <label htmlFor="departure">출발역</label>
                        <input type="text" id="departure" placeholder="어디서 출발하세요?" />
                    </div>
                    <div className={styles.right}>
                        <label htmlFor="arrival">도착역</label>
                        <input type="text" id="arrival" placeholder="어디로 갈까요?" />
                        <button type="button" className={styles.stnChange}>
                            <span className="blind">좌우 변경 버튼</span>
                        </button>
                    </div>
                </div>

                <div className={styles.btnArea}>
                    <button type="button">조회</button>
                </div>
            </div>

            <div className={styles.reserveInfo}>
                <button type="button">
                    오늘
                    <span className={styles.boundary}>오전</span>
                    <span className={styles.time}>
                        <span className={styles.hour}>10</span>
                        <span className={styles.minute}>35</span>
                    </span>
                    출발
                </button>
            </div>

            <div className={styles.trainInformation}>
                <div className={styles.basic}>
                    <p><span>67</span>분</p>
                    <p><span>13</span>개역</p>
                    <p>일반 <span>5,350</span>원</p>
                </div>

                <div className={styles.detail}>
                    <ul>
                        <li>
                            <span className={`${styles.stnMark } ${styles.arex}`}>공항</span>
                            <span className={styles.stnNm}>서울역</span>
                            <p>
                                (첫차
                                <span className={styles.time}>
                                    <span className={styles.hour}>05</span>
                                    <span className={styles.minute}>20</span>
                                </span>, 
                                막차
                                <span className={styles.time}>
                                    <span className={styles.hour}>00</span>
                                    <span className={styles.minute}>00</span>
                                </span>)
                            </p>
                        </li>
                        <li>
                            <span className={`${styles.stnMark } ${styles.arex}`}>공항</span>
                            <span className={styles.stnNm}>인천공항 제2터미널</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.standardOpt}>
                <ul>
                    <li>
                        <a href="javascript:void(0);">
                            <p>
                                이용안내
                                <span>일반열차의 모든정보</span>
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <p>
                                실시간 열차정보
                                <span>도착·출발을 한눈에!</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function CptMain () {
    // --------------------------- 채용공고/입찰공고 ---------------------------
    const [trainTab, setTrainTab] = useState(0); //고속/일반 상태값 0:고속 1:일반
    const trainClass = `${styles.leftBox} ${trainTab == 0 ? styles.tabExpress : styles.tabStandard}`;
    // --------------------------- data ---------------------------
    //공지사항
    const noticeTitle = "공지사항";
    const noticeUrl = "/react-for-beginners/board/pr";
    const noticeList = [
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum01.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum02.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum03.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
        {"title":"불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범 불법스포츠도박 근절부터 장애인 체육 후원까지 스포츠토토, 공익 사업의 모범",
        "msg":"공지사항 상세 PC에서 2줄까지 노출됩니다.공지사항 상세 PC에서 2줄까지 노출됩니다 공지사항 상세 PC에서 2줄까지 노출됩니다.",
        "date":"2025-02-26",
        "imgUrl":"/resource/images/main/main_thum04.jpg",
        "imgAlt":"공지사항 이미지",
        "url":"/react-for-beginners/board/prView"},
    ];

    return (
        <div className={styles.cptMain}>
            <div className={styles.mainInner}>
                <div className={trainClass}>
                    <div className={styles.leftInner}>
                        <div className={styles.trainTab}>
                            <ul>
                                <li><button type="button" className={trainTab == 0 ? styles.active : ""} title="선택 된 탭메뉴" onClick={() => setTrainTab(0)}>직통열차</button></li>
                                <li><button type="button" className={trainTab == 1 ? styles.active : ""} title="탭메뉴" onClick={() => setTrainTab(1)}>일반열차</button></li>
                            </ul>
                        </div>
                        <div className={styles.tabCont}>
                            {trainTab === 0 ? <Express /> : <Railroad />}
                        </div>
                    </div>
                </div>
                <div className={styles.rightBox}>
                    <div className={styles.rightInner}>
                        <div className={styles.contentsFrame}>
                            <div className={styles.linkArea}>
                                <div className={styles.quickLink}>
                                    {/* 직통열차 메뉴 */}
                                    <ul className={`${styles.express } ${styles.on}`}>
                                        <li><a href="javscript:void(0);">도심공항 <br/>터미널</a></li>
                                        <li><a href="javscript:void(0);">체험학습 <br/>프로그램</a></li>
                                        <li><a href="javscript:void(0);">공항철도 <br/>회의실 예약</a></li>
                                        <li><a href="javscript:void(0);">직통열차 <br/>열차시간표</a></li>
                                    </ul>

                                    {/* 일반열차 메뉴 */}
                                    <ul className={styles.standard}>
                                        <li><a href="javscript:void(0);">간편 냉난방 <br/>민원접수</a></li>
                                        <li><a href="javscript:void(0);">체험학습 <br/>프로그램</a></li>
                                        <li><a href="javscript:void(0);">공항철도 <br/>회의실 예약</a></li>
                                        <li><a href="javscript:void(0);">자전거 <br/>휴대승차</a></li>
                                    </ul>
                                </div>
                                <div className={styles.notice}>
                                    <p className={styles.title}>
                                        <span>공지사항</span>
                                        <a href="javascript:void(0);">
                                            <span className="blind">더보기</span>
                                        </a>
                                    </p>
                                    <div className={styles.list}>
                                        <ul>
                                            <li>
                                                <a href="javscript:void(0);">
                                                    <span className={styles.ntTit}>에어부산 인천공항2터미널 이전 안내</span>
                                                    <span className={styles.date}>2025.07.28</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javscript:void(0);">
                                                    <span className={styles.ntTit}>공항철도 열차 내 음식물 휴대제한(반입) 기준 개정안 2025년 버전2025년 버전2025년 버전2025년 버전2025년 버전2025년 버전</span>
                                                    <span className={styles.date}>2025.07.28</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javscript:void(0);">
                                                    <span className={styles.ntTit}>도심공항터미널 이용안내</span>
                                                    <span className={styles.date}>2025.07.28</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.bannerArea}>
                                <div className={styles.banCover}>
                                    <div className={`${styles.banInner}`}>
                                        {/* <div className={styles.optionArea}>
                                            <div className="swiper-pagination"></div>
                                            <div className={styles.control}>
                                                <button type="button" id="playBtn" title="재생"><span className="blind">play</span></button>
                                                <button type="button" id="pauseBtn" className={styles.on} title="일시정지"><span className="blind">pause</span></button>
                                            </div>
                                        </div> */}
                                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                            <SwiperSlide><a href="javascript:void(0);"><img src={`${process.env.PUBLIC_URL}/common/images/main/main_slide01.svg`} alt="" /></a></SwiperSlide>
                                            <SwiperSlide><a href="javascript:void(0);"><img src={`${process.env.PUBLIC_URL}/common/images/main/main_slide02.svg`} alt="" /></a></SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={styles.bannerArea}>
                                <div className={styles.banCover}>
                                    <div className={`${styles.banInner } "swiper-container"`}>
                                        <div className={styles.optionArea}>
                                            <div className="swiper-pagination"></div>
                                            <div className={styles.control}>
                                                <button type="button" id="playBtn" title="재생"><span className="blind">play</span></button>
                                                <button type="button" id="pauseBtn" className={styles.on} title="일시정지"><span className="blind">pause</span></button>
                                            </div>
                                        </div>
                                        <ul className="swiper-wrapper">
                                            <li className="swiper-slide"><a href="javascript:void(0);"><img src={`${process.env.PUBLIC_URL}/common/images/main/main_slide01.svg`} alt="" /></a></li>
                                            <li className="swiper-slide"><a href="javascript:void(0);"><img src={`${process.env.PUBLIC_URL}/common/images/main/main_slide02.svg`} alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className={styles.optionFrame}>
                            <ul>
                                <li><a href="javscript:void(0)"><span className={styles.icon}><img src={`${process.env.PUBLIC_URL}/common/images/main/main_opt_01.svg`} alt="" /></span><span className={styles.txt}>간편 지연증명서</span></a></li>
                                <li><a href="javscript:void(0)"><span className={styles.icon}><img src={`${process.env.PUBLIC_URL}/common/images/main/main_opt_02.svg`} alt="" /></span><span className={styles.txt}>유실물 센터</span></a></li>
                                <li><a href="javscript:void(0)"><span className={styles.icon}><img src={`${process.env.PUBLIC_URL}/common/images/main/main_opt_03.svg`} alt="" /></span><span className={styles.txt}>자주하는 질문</span></a></li>
                                <li><a href="javscript:void(0)"><span className={styles.icon}><img src={`${process.env.PUBLIC_URL}/common/images/main/main_opt_04.svg`} alt="" /></span><span className={styles.txt}>고객의 소리</span></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* 하단영역 */}
                    <div className={styles.layoutFooter}>
                        {/* Footer */}
                        <div className={styles.cptFooter}>
                            <div className={styles.footArea}>
                                <div className={styles.copyArea}>
                                    <div className={styles.quickGroup}>
                                        <ul>
                                            <li className={styles.hglt}><a href="javascript:void(0)">공항철도</a></li>
                                            <li><a href="javascript:void(0)">여객운송약관</a></li>
                                            <li><a href="javascript:void(0)">누리집 이용약관</a></li>
                                            <li><a href="javascript:void(0)">개인정보처리방침</a></li>
                                        </ul>
                                    </div>
                                    <div className={styles.copyGroup}>
                                        <div className={styles.infoArea}>
                                            <ul>
                                                <li className={styles.add}>(22694) 인천광역시 서구 검바위로 46 (검암동) 공항철도(주)</li>
                                                <li className={styles.tel}>전화 <span>1599-7788</span></li>
                                                <li className={styles.fax}>팩스 <span>032-745-8899</span></li>
                                                <li className={styles.name}>대표자 : 박대수</li>
                                                <li className={styles.lcn}>사업자등록번호 : 101-81-68490</li>
                                            </ul>
                                        </div>
                                        <div className={styles.copyBox}>
                                            <p>Copyright (C) 2025 by AIRPORT RAILROAD Co., Ltd. All rights reserved.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.markArea}>
                                    <ul>
                                        <li><img src="/common/images/common/eprivacy.svg" alt="" /></li>
                                        <li><img src="/common/images/common/wa_mark.svg" alt="" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //하단영역 */}
                </div>
            </div>
            {/* //main 본문 */}
        </div>
    );
}

export default CptMain;