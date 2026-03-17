import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';


function Img() {
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
                    
                    <div class="pubTitH2">
                        <h2>이미지</h2>
                    </div>

                    <div class="pubTitH4">
                        <h4>가로폭 이미지 1개</h4>
                    </div>

                    <div class="comImgWrap">
                        <div class="imgGroup">
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_001.jpg`} alt="서울역 도심공항터미널 수화물 신청 이미지" />
                                <p class="imgTxt">서울역 도심공항터미널 무료 이용</p>
                            </div>
                        </div>
                    </div>

                    <div class="pubTitH4">
                        <h4>가로폭 이미지 2개</h4>
                    </div>

                    <div class="comImgWrap col2">
                        <div class="imgGroup">
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_001.jpg`} alt="서울역 도심공항터미널 수화물 신청 이미지" />
                                <p class="imgTxt">서울역 도심공항터미널 무료 이용</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_002.jpg`} alt="서울역 도심공항터미널 열차 내부 이미지" />
                                <p class="imgTxt">안락한 열차 지정 좌석제</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_003.jpg`} alt="열차 내부 객실 승무원 서비스 받는 이미지" />
                                <p class="imgTxt">객실 승무원 서비스​​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_004.jpg`} alt="열차 내 화장실 이미지" />
                                <p class="imgTxt">열차 내 화장실 (4호차) (휠체어 이용객 사용 가능)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_005.jpg`} alt="열차 내 키즈칸(6호차) 이미지" />
                                <p class="imgTxt">키즈칸(6호차)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_006.jpg`} alt="인천공항 1터미널 전동카드 서비스​ 이미지" />
                                <p class="imgTxt">인천공항 1터미널 전동카드 서비스​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_007.jpg`} alt="제휴호텔 서틀버스 무료이용​하는 모습" />
                                <p class="imgTxt">제휴호텔 서틀버스 무료이용​</p>
                            </div>
                        </div>
                    </div>

                    <div class="pubTitH4">
                        <h4>가로폭 이미지 3개</h4>
                    </div>

                    <div class="comImgWrap col3">
                        <div class="imgGroup">
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_001.jpg`} alt="서울역 도심공항터미널 수화물 신청 이미지" />
                                <p class="imgTxt">서울역 도심공항터미널 무료 이용</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_002.jpg`} alt="서울역 도심공항터미널 열차 내부 이미지" />
                                <p class="imgTxt">안락한 열차 지정 좌석제</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_003.jpg`} alt="열차 내부 객실 승무원 서비스 받는 이미지" />
                                <p class="imgTxt">객실 승무원 서비스​​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_004.jpg`} alt="열차 내 화장실 이미지" />
                                <p class="imgTxt">열차 내 화장실 (4호차) (휠체어 이용객 사용 가능)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_005.jpg`} alt="열차 내 키즈칸(6호차) 이미지" />
                                <p class="imgTxt">키즈칸(6호차)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_006.jpg`} alt="인천공항 1터미널 전동카드 서비스​ 이미지" />
                                <p class="imgTxt">인천공항 1터미널 전동카드 서비스​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_007.jpg`} alt="제휴호텔 서틀버스 무료이용​하는 모습" />
                                <p class="imgTxt">제휴호텔 서틀버스 무료이용​</p>
                            </div>
                        </div>
                    </div>

                    <div class="pubTitH4">
                        <h4>가로폭 이미지 4개</h4>
                    </div>

                    <div class="comImgWrap col4">
                        <div class="imgGroup">
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_001.jpg`} alt="서울역 도심공항터미널 수화물 신청 이미지" />
                                <p class="imgTxt">서울역 도심공항터미널 무료 이용</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_002.jpg`} alt="서울역 도심공항터미널 열차 내부 이미지" />
                                <p class="imgTxt">안락한 열차 지정 좌석제</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_003.jpg`} alt="열차 내부 객실 승무원 서비스 받는 이미지" />
                                <p class="imgTxt">객실 승무원 서비스​​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_004.jpg`} alt="열차 내 화장실 이미지" />
                                <p class="imgTxt">열차 내 화장실 (4호차)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_005.jpg`} alt="열차 내 키즈칸(6호차) 이미지" />
                                <p class="imgTxt">키즈칸(6호차)</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_006.jpg`} alt="인천공항 1터미널 전동카드 서비스​ 이미지" />
                                <p class="imgTxt">인천공항 1터미널 전동카드 서비스​</p>
                            </div>
                            <div class="imgArea">
                                <img src={`${process.env.PUBLIC_URL}/common/images/contents/cont_02_01_007.jpg`} alt="제휴호텔 서틀버스 무료이용​하는 모습" />
                                <p class="imgTxt">제휴호텔 서틀버스 무료이용​</p>
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

export default Img;