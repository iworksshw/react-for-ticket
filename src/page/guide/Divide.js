import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';

function Divide() {
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
                    
                    <div className="pubTitH2">
                        <h2>공항철도 유실물센터</h2>
                    </div>
                    <div className="comImgWrap imgTxtBox">
                        <div className="imgGroup">
                            <div className="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_04_05.jpg`} alt="고객안내센터 이미지" />
                            </div>
                        </div>
                        <div className="rightBox">
                            <div className="pubTitH4">
                                <h4>소요시간</h4>
                            </div>
                            <div className="pubBasicText">
                                <p className="bText">
                                    서울역 도심공항터미널 무료 이용, 열차 지정 좌석제, 객실승무원 서비스 제공, 전동카트 서비스, 무료 와이파이 서비스, 무료 생수(요청 시)
                                </p>
                            </div>
                            <div className="pubTitH4">
                                <h4>운영시각</h4>
                            </div>
                            <div className="pubBasicText">
                                <p className="bText">
                                    06시30분 ~ 23시
                                </p>
                            </div>
                            <div className="pubTitH4">
                                <h4>연락처</h4>
                            </div>
                            <div className="pubBasicText">
                                <p className="bText">
                                    1599-7788
                                </p>
                            </div>
                        </div>                                        
                    </div>
                    
                    {/* 담당부서 */}
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default Divide;