import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import styles from './CptHeader.module.scss';
import PubDropdown from "../public/PubDropdown";

function CptHeader() {
    const languages = ['영어', '중국어', '일본어'];
    const money = ['달러', '위안', '엔'];
    const gnbGroup = [
        {
            "title" : "승차권",
            "subTitle" : "승차권을 예매하고 편리하게 이용하세요.",
            "depth2" : [
                {
                    "title2" : "승차권 예약",
                    "depth3" : []
                },
                {
                    "title2" : "예약조회/변경/취소",
                    "depth3" : ["회원 예약조회", "비회원 예약조회"]
                },
            ]
        },
        {
            "title" : "직통열차",
            "subTitle" : "도심과 공항을 가장 빠르고 쾌적하게 이용해 보세요.",
            "depth2" : [
                {
                    "title2" : "직통열차 소개",
                    "depth3" : []
                },
                {
                    "title2" : "직통열차 시각표",
                    "depth3" : ["직통열차 시각표(평일)", "직통열차 시각표(휴일)"]
                },
                {
                    "title2" : "직통열차 운행시각",
                    "depth3" : []
                },
                {
                    "title2" : "승차권구입 안내",
                    "depth3" : []
                },
                {
                    "title2" : "도심공항터미널",
                    "depth3" : ["도심공항터미널 이용안내", "도심공항터미널 이용절차", "항공보안 자율신고제도"]
                },
            ]
        },
        {
            "title" : "일반열차",
            "subTitle" : "수도권 어디서나 인천공항까지 편하게 이용해 보세요.",
            "depth2" : [
                {
                    "title2" : "일반열차 소개",
                    "depth3" : []
                },
                {
                    "title2" : "일반열차 운임안내",
                    "depth3" : []
                },
                {
                    "title2" : "승차권구입 안내",
                    "depth3" : []
                },
                {
                    "title2" : "역 정보",
                    "depth3" : ["서울역", "공덕", "홍대입구", "디지털미디어시티", "마곡나루", "김포공항", "계양", "검암", "청라국제도시", "영종", "운서", "공항화물청사", "인천공항1터미널", "인천공항2터미널"]
                },
                {
                    "title2" : "역 편의시설",
                    "depth3" : []
                },
                {
                    "title2" : "실시간 열차정보",
                    "depth3" : []
                },
                {
                    "title2" : "구글 스트리트뷰",
                    "depth3" : []
                },
            ]
        },
        {
            "title" : "고객서비스",
            "subTitle" : "고객을 위한 모든 서비스, 지금 바로 이용하세요.",
            "depth2" : [
                {
                    "title2" : "체험학습",
                    "depth3" : ["이용안내", "프로그램", "예약하기"]
                },
                {
                    "title2" : "회의실",
                    "depth3" : ["이용안내", "위치확인", "예약하기", "회의실 FAQ"]
                },
                {
                    "title2" : "자전거 휴대승차",
                    "depth3" : ["이용안내", "예약하기"]
                },
                {
                    "title2" : "유실물센터",
                    "depth3" : []
                },
                {
                    "title2" : "간편지연증명서",
                    "depth3" : []
                },
                {
                    "title2" : "행사신청",
                    "depth3" : []
                },
                {
                    "title2" : "광고문의",
                    "depth3" : []
                },
                {
                    "title2" : "AREX 멤버십",
                    "depth3" : []
                },
                {
                    "title2" : "마케팅 제휴신청",
                    "depth3" : []
                },
            ]
        },
        {
            "title" : "고객센터",
            "subTitle" : "더 나은 서비스를 위해 고객님의 목소리에 귀 기울입니다.",
            "depth2" : [
                {
                    "title2" : "공지사항",
                    "depth3" : []
                },
                {
                    "title2" : "회의간편민원접수",
                    "depth3" : []
                },
                {
                    "title2" : "고객의 소리",
                    "depth3" : []
                },
                {
                    "title2" : "자주하는 질문",
                    "depth3" : []
                },
            ]
        },
    ];
    const [sitemapOpen, setSitemapOpen] = useState(false);
    console.log(gnbGroup[0].title);
    return (
        <div className={styles.cptHeader}>
            <div className={styles.headerArea}>
                <div className={styles.gnbGroup}>
                    <div className={styles.logoBox}>
                        <div className={styles.logo}><a href="./#"></a></div>
                        <div className={styles.logoSide}><a href="./#"></a></div>
                    </div>   
                    <div className={styles.gnbBox}>
                        {/* gnb 상단 */}
                        <div className={styles.gnbTop}>
                            <div className={styles.gnbTopArea}>
                                <ul className={styles.depth1Group}>
                                    <li className={styles.depth1List}>
                                        <a href="javascript:void(0)" className={styles.depth1Name}>로그인</a>
                                    </li>
                                    <li className={styles.depth1List}>
                                        <a href="javascript:void(0)" className={styles.depth1Name}>회원가입</a>
                                    </li>
                                    <li className={styles.depth1List}>
                                        <a href="javascript:void(0)" className={styles.depth1Name} target="_blank" title="새 창 열림">공항철도 홈페이지</a>
                                    </li>
                                    <li className={styles.depth1List}>
                                        <PubDropdown list={languages} defaultVal="한국어" />
                                    </li>
                                    <li className={styles.depth1List}>
                                        <PubDropdown list={money} defaultVal="KRW" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* //gnb 상단 */}
                        
                        {/* gnb 하단 */}
                        <div className={styles.gnbCont}>     
                            {/* gnb 메뉴 */}
                            <div className={styles.menuArea}>
                                <ul className={styles.depth1Group}>
                                    {gnbGroup.map((item, idx) => (
                                        <li className={styles.depth1List} key={idx}>
                                            <a href="javascript:void(0)" className={styles.depth1Name}>{item.title}</a>
                                            <div className={styles.depth2Area}>
                                                <div className={styles.depth2Box}>
                                                    <div className={styles.depth2Tit}>
                                                        <p className={styles.mainTit}>{item.title}</p>
                                                        <p className={styles.subTit}>{item.subTitle}</p>
                                                    </div>
                                                    <ul className={styles.depth2Group} role="menu">
                                                        {item.depth2.map((dep2,idx2) => (
                                                            <li className={styles.depth2List} key={idx2}><a href="javascript:void(0)" className={styles.depth2Name}>{dep2.title2}</a></li>
                                                        ))}
                                                    </ul>  
                                                </div>  
                                            </div>                                      
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* 검색, 장바구니, 개인정보 */}
                            <div className={styles.quickArea}>
                                <button className={styles.srchBtn} type="button">
                                    <img src={`${process.env.PUBLIC_URL}/common/images/common/ic_26_srch.svg`} alt="" />
                                    <span className="blind">메뉴검색 열기</span>
                                </button>
                                <button className={styles.cartBtn} type="button">
                                    <img src={`${process.env.PUBLIC_URL}/common/images/common/ic_26_cart.svg`} alt="" />
                                    <span className="blind">장바구니</span>
                                </button>
                                <button className={styles.infoBtn} type="button">
                                    <img src={`${process.env.PUBLIC_URL}/common/images/common/ic_26_info.svg`} alt="" />
                                    <span className="blind">개인정보</span>
                                </button>
                            </div>
                            {/*사이트맵 */}
                            <div className={styles.sitemapArea}>
                                <button className={styles.openBtn} aria-expanded="false" type="button" onClick={() => setSitemapOpen(prev => !prev)}>
                                    <img src={`${process.env.PUBLIC_URL}/common/images/common/ic_26_hamburger.svg`} alt="" />
                                </button>
                                <div className={`${styles.sitemap} ${sitemapOpen ? styles.active : ''}`}>
                                    <div className={styles.sitemapInner}>
                                        <div className={styles.sitemapCont}>
                                            <div className={styles.sitemapHead}>
                                                <p className={styles.tit}>전체메뉴</p>
                                            </div>
                                            <nav aria-label="사이트맵 전체 메뉴">
                                                <div className={styles.depth1Wrap}>
                                                    <ul className={styles.depth1Group}>
                                                        {gnbGroup.map((item, idx) => (
                                                            <li className={styles.depth1List} key={idx}>
                                                                <div className={styles.depth1Name}>{item.title}</div>
                                                                <ul className={styles.depth2Group} role="menu">
                                                                    {item.depth2.map((dep2,idx2) => (
                                                                        <li className={styles.depth2List} key={idx2}>
                                                                            <a href="javascript:void(0)" className={styles.depth2Name}>{dep2.title2}</a>
                                                                            {dep2.depth3 != 0 ? 
                                                                            <ul className={styles.depth3Group} role="menu">
                                                                                {dep2.depth3.map((dep3,idx3) => (
                                                                                    <li className={styles.depth3List} key={idx3}><a href="javascript:void(0)" className={styles.depth3Name}>{dep3}</a></li>
                                                                                ))}
                                                                            </ul> : ""}
                                                                        </li>
                                                                    ))}
                                                                </ul>    
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </nav>
                                            <div className={styles.sitemapFoot}>
                                                <button className={styles.closeBtn} type="button" onClick={() => setSitemapOpen(prev => !prev)}>
                                                    <span className="blind">전체메뉴 닫기</span>
                                                </button>
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //gnb 하단 */}
                    </div>                       
                </div>
            </div>
        </div>
    );
}
export default CptHeader;