import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';


function SubInfo() {
    // DatePicker가 붙을 DOM 요소를 참조
    // const datepickerContainerRef = useRef(null);
    // const datepickerInputRef = useRef(null); // 입력 필드도 참조할 수 있습니다.

    // useEffect(() => {
    //     // 1. 컴포넌트가 마운트될 때 DatePicker 인스턴스 생성
    //     const instance = new DatePicker(datepickerContainerRef.current, {
    //     // 2. 입력 필드는 useRef로 참조한 요소를 지정
    //     input: {
    //         element: datepickerInputRef.current,
    //         format: 'yyyy-MM-dd'
    //     },
    //     });

    //     // 3. 컴포넌트 언마운트 시 인스턴스 해제
    //     return () => {
    //     instance.destroy();
    //     };
    // }, []);

    return (
        <div className="layoutContArea">
            <div className="cptBasicGroup">
                <div className="basicGroupArea">
                    {/* 서브타이틀/브레드크럼 */}
                    <ComSubInfo text={`<em>인천국제공항과 서울역 간 무정차(논스톱)로 가장 안전하고 빠르게 연결</em>하며, ​공항 이용객을 위한 특화된 서비스와 편의 시설을 제공하는 고급형 열차입니다.`} />

                    <ComSubInfo list={[
                        "운영목적 : 공항철도 이용 중 느끼셨던 불편 및 개선사항 등 이용객 의견을 수렴하여 더 나은 서비스를 제공하는데 적극 활용하고자 합니다.",
                        "고객의 소리는 평일(09:00~18:00) 중에 접수되므로 주말 및 공휴일에는 처리가 다소 지연될 수 있습니다.",
                        "상업적 광고, 타인을 비방하거나 음해하는 내용, 비속어 표현, 반복성 게시물 등 고객의 소리 운영 목적에 부합하지 않을 경우 작성자에게 통보 없이 삭제될 수 있습니다.",
                        "온도조절 및 계도요청 등 즉각적인 조치가 필요한 경우 콜센터(1599-7788, 운영시간 06:30~23:00)를 이용해주시기 바랍니다."
                    ]} />
                    

                    <div className="pubTitH2">
                        <h2>각종 정보박스</h2>
                    </div>

                    <div className="comInfoBox">
                        <div className="boxArea icon001">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit"><em>직통열차 내 무료 와이파이(Wi-Fi) 서비스​</em></dt>
                                    <dd className="desc">직통열차 내에서는 무료로 초고속 와이파이를 이용하여 인터넷 접속을 하실 수 있습니다.
                                        <br/>(이용방법 : 무선 네트워크 검색 &gt; AREX Free Wi-Fi 선택 &gt; 인터넷 접속)</dd>
                                </dl>
                            </div>
                            {/* <div className="infoBtn">
                                <a href="#" target="_blank" className="btn gLine icon">직통열차 예약발매</a>
                            </div>  */}
                        </div>
                    </div>

                    <div className="comInfoBox">
                        <div className="boxArea icon002">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit"><em>STEP 1</em> 직통열차 예약발매시스템 접속</dt>
                                    <dd className="desc">제휴사(홈페이지 배너 및 QR코드 등)를 통해 직통열차 예약발매시스템 접속</dd>
                                </dl>
                            </div>
                            <div className="infoBtn">
                                <a href="#" target="_blank" className="btn gLine">직통열차 예약발매</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="comInfoBox">
                        <div className="boxArea icon014">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit"><em>경찰청 유실물 통합포털</em></dt>
                                    <dd className="desc">‘24.3.1.일부터 공항철도 유실물 시스템이 LOST112로 통합 운영됩니다.</dd>
                                </dl>
                            </div>

                            <div className="infoBtn">
                                <a href="#" target="_blank" className="btn blue">LOST112 바로가기​</a>
                            </div>
                        </div>
                    </div>

                    <div className="comInfoBox">
                        <div className="boxArea icon003">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit"><em>STEP 2</em> 직통열차 승차권 예매</dt>
                                    <dd className="desc">
                                        예약발매시스템 회원가입 후 승차권 예약·발매(자동 할인 적용)
                                        <span className="pubCaption">예약 중 페이지를 벗어날 경우 할인이 미적용 될 수 있습니다.</span>
                                        <span className="pubCaption">운임할인이 적용되지 않을 경우 제휴사를 통해 다시 접속하여 주세요.</span>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="comInfoBox">
                        <div className="boxArea icon004">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit"><em>STEP 3</em> 직통열차 승차</dt>
                                    <dd className="desc">승차권 QR코드를 직통열차 게이트에 스캔 후 승강장 이동</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
   
                    <div className="comInfoBox">
                        <div className="boxArea icon005">
                            <div className="infoCont">
                                <dl className="infoBox">
                                    <dt className="tit">서울역 도심공항터미널</dt>
                                    <dd className="desc">
                                        <ul className="descList">
                                            <li className="descItem">얼리 체크인 가능 출국 당일 원하는 시간에 방문하여 사전 탑승수속 가능​
                                                <span className="pubCaption">인천공항 항공기 T1 출발 기준 3시간 전, T2 출발 기준 3시간 20분전 마감</span>
                                            </li>
                                            <li className="descItem">도심공항터미널에서 출국심사 완료 시 인천공항 전용 출국통로를 이용하여 빠르고 편리하게 출국장으로 이동​​</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 회색 정보상자 --> */}
                    <div className="comGrayBox">
                        <dl className="boxGroup">
                            <dt className="boxTitle">
                                <em>신청방법</em>
                                <span>공항철도 홈페이지 신청</span>
                            </dt>
                            <dd className="boxCont">
                                1. 원하는 날짜 및 체험학습 코스 선택하여 예약 신청 (희망일 10일전 예약 필수)<br/>
                                2. 참가학생들의 명단 작성 후, 공항철도 담당자에게 메일로 회신​
                                <span className="pubRefer bold">※ 희망일 10일 전에 상세일정 및 명단양식을 메일로 받아보실 수 있습니다. 단, 참가 7일 전까지 명단 미확정 시 모의여권 및 항공권 제공 불가합니다.</span>
                            </dd>
                        </dl>
                    </div>

                    
                    {/* 담당부서 */}
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default SubInfo;