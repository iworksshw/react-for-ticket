import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';


function TextList() {
    // DatePicker가 붙을 DOM 요소를 참조
    const datepickerContainerRef = useRef(null);
    const datepickerInputRef = useRef(null); // 입력 필드도 참조할 수 있습니다.

    useEffect(() => {
        // 1. 컴포넌트가 마운트될 때 DatePicker 인스턴스 생성
        const instance = new DatePicker(datepickerContainerRef.current, {
        // 2. 입력 필드는 useRef로 참조한 요소를 지정
        input: {
            element: datepickerInputRef.current,
            format: 'yyyy-MM-dd'
        },
        });

        // 3. 컴포넌트 언마운트 시 인스턴스 해제
        return () => {
        instance.destroy();
        };
    }, []);

    return (
        <div className="layoutContArea">
            <div className="cptBasicGroup">
                <div className="basicGroupArea">
                    <ComSubInfo text={`<em>인천국제공항과 서울역 간 무정차(논스톱)로 가장 안전하고 빠르게 연결</em>하며, ​공항 이용객을 위한 특화된 서비스와 편의 시설을 제공하는 고급형 열차입니다.`} />
                    
                    <div className="pubTitH2">
                        <h2>열차정보</h2>
                    </div>
                    <div className="pubTitH4">
                        <h4>소요시간</h4>
                    </div>
                    <div className="pubBasicText">
                        <ul className="bList">
                            <li className="listItem">서울역 ~ 인천공항2터미널 : <em>51분</em></li>
                            <li className="listItem">서울역 ~ 인천공항1터미널 : <em>43분</em></li>
                        </ul>
                    </div>
                    <span className="pubCaption">항공사 전화번호는 변경될 수 있으니 자세한 사항은 항공사 홈페이지를 통해 확인하세요.</span>
                    <span className="pubCaption gray">항공사 전화번호는 변경될 수 있으니 자세한 사항은 항공사 홈페이지를 통해 확인하세요.</span>
                    <div className="pubTitH2">
                        <h2>서울역 회의실</h2>                               
                        <div className="fnGroupWrap">
                            <div className="frmGroup">
                                <div className="frmChoBox">
                                    <input id="chk101" type="checkbox" className="iptChk" checked />
                                    <label htmlFor="chk101" className="iptLbl">오늘</label>
                                </div>                                    

                                <div className="tui-datepicker-input tui-datetime-input tui-has-focus">
                                    <input type="text" ref={datepickerInputRef} readOnly />
                                    <div ref={datepickerContainerRef}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pubTitH4">
                        <h4>열차운임</h4>
                    </div>
                    <div className="pubBasicText">
                        <ul className="bList">
                            <li className="listItem">
                                어른 : 13,000원
                                <span className="pubRefer">※ 정상운임 : 18,100원(서울역~인천공항1터미널), 18,700원(서울역~인천공항2터미널)</span>
                            </li>
                            <li className="listItem">어린이 : 9,500원</li>
                        </ul>
                    </div>

                    <div class="pubTitH3 step">
                        <h3><em>STEP 1.</em> 공항철도 홈페이지 온라인 예약</h3>
                    </div>
                    <div class="pubTitH3 step">
                        <h3><em>STEP 2.</em> 예약내역 확인 및 온라인 결제</h3>
                    </div>
                    <div class="pubTitH3 step">
                        <h3><em>STEP 3.</em> 회의 당일 도어락 비밀번호 발송</h3>
                    </div>
                    <div class="pubTitH3 step">
                        <h3><em>STEP 4.</em> 예약시간에 회의실로 바로 입실</h3>
                    </div>
                    <div class="pubTitH3">
                        <h3>직통열차만의 차별화된 서비스</h3>
                    </div>
                    <div class="pubBasicText">
                        <p class="bText">
                            서울역 도심공항터미널 무료 이용, 열차 지정 좌석제, 객실승무원 서비스 제공, 전동카트 서비스, 무료 와이파이 서비스, 무료 생수(요청 시)
                        </p>
                    </div>
                    <div class="pubTitH4">
                        <h4>이용시간</h4>
                    </div>
                    <div class="pubBasicText">
                        <ul class="bList">
                            <li class="listItem">탑승수속 : 05:20 ~ 19:00 <em class="colorRed">(접수마감 18:50)</em>
                                                <br/>* 인천공항1터미널 : 항공기 출발 3시간 전 수속완료​
                                                <br/>* 인천공항2터미널 : 항공기 출발 3시간 20분 전 수속완료​</li>
                            <li class="listItem">출국심사 : 05:30 ~ 19:00</li>
                        </ul>
                    </div>
                    <div class="pubTitH2">
                        <h2>직통열차 할인 승차권 구입 및 이용 순서</h2>
                    </div>
                    <div class="pubTitH3">
                        <h3>제휴할인</h3>
                    </div>
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default TextList;