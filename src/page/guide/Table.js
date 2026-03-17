import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';


function SubBasic() {
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
                        <h2>일반열차</h2>
                    </div>

                    <div class="pubTitH3">
                        <h3>운임안내</h3>
                    </div>

                    <div class="pubTitH4">
                        <h4>일반열차 운임체계</h4>
                    </div>

                    <div class="tableHeader">
                        <p class="date">2025-08-23 (토)</p>
                        <p class="count">예약 완료 수<span class="deco">/</span><span class="use">총 이용 수</span></p>
                    </div>

                    <div class="comDataTable md">
                        <table class="basic">
                            <caption>적용대상 및 비고를 포함한 표</caption>
                            <colgroup>
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>적용 대상</th>
                                    <th>비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- thead 있을때 --> */}
                                <tr>
                                    <td>어른</td>
                                    <td class="left">
                                        어른운임(기준운임)= 기본임율 + 추가임율
                                        <br/>① 수도권 구간(서울역 ~ 청라국제도시역)
                                        <br/>- 기본임율 : 10km 까지 1,550원
                                        <br/>- 추가임율 : 10km~50km까지 5km마다 100원 / 50km 초과 시 8km 마다 100원
                                        <br/>② 독립운임 구간(청라국제도시역 ~ 인천공항1터미널역)
                                        <br/>- 기본임율 : 10km 까지 1,200원
                                        <br/>- 추가임율 : 10Km 초과 1km 마다 130원
                                        <br/>③ 인천공항1터미널역 ~ 인천공항2터미널역
                                        <br/>- 기본임율 : 10km 까지 1,200원
                                        <br/>- 추가임율 : 10Km 초과 1km 마다 108.02원
                                    </td>
                                </tr>
                                <tr>
                                    <td>어린이
                                        <br/>(만6세이상 만13세 미만)</td>
                                    <td class="left">
                                        전구간(서울역 ~ 인천공항2터미널역)
                                        <br/>- 기본운임 : 550원
                                        <br/>- 추가운임 : 각 구간별 어른 추가운임 X 50% (50%할인)
                                    </td>
                                </tr> 
                                <tr>
                                    <td>65세 이상 노인
                                        <br/>장애인
                                        <br/>국가유공자
                                        <br/>독립유공자
                                        <br/>5.18 민주화 운동 부상자</td>
                                    <td class="left">
                                        무임 (해당 신분증 제시한 경우 또는 우대용 교통카드 사용시)
                                    </td>
                                </tr>  
                                <tr>
                                    <td>유아
                                        <br/>(만6세 미만)</td>
                                    <td class="left">
                                        무임 (보호자 1명에 유아 3명 한함)
                                    </td>
                                </tr>  
                                <tr>
                                    <td>청소년
                                        <br/>(만13세 이상 만18세 이하)</td>
                                    <td class="left">
                                        전구간(서울역 ~ 인천공항2터미널역)
                                        <br/>- 기본운임 : 900원
                                        <br/>- 추가운임 : 각 구간별 어른 추가운임 X 80% (20%할인)
                                    </td>
                                </tr>                                                      
                            </tbody>
                        </table>                                                
                    </div>

                    <div class="pubTitH4">
                        <h4>역간 기준운임(어른, 선후불 교통카드 기준)</h4>
                    </div>

                    <div class="comDataTable xl">
                        <table class="basic">
                            <caption>역명, 서울, 공덕, 홍대입구, 디지털미디어시티, 마곡나루, 김포공항, 계양, 검암, 청라국제도시, 영종, 운서, 공항화물청사, 인천공항1터미널을 포함한 표</caption>
                            <colgroup>
                                <col style={{width:"15%"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>역명</th>
                                    <th>서울</th>
                                    <th>공덕</th>
                                    <th>홍대<br/>입구</th>
                                    <th>디지털<br/>미디어<br/>시티</th>
                                    <th>마곡<br/>나루</th>
                                    <th>김포<br/>공항</th>
                                    <th>계양</th>
                                    <th>검암</th>
                                    <th>청라<br/>국제<br/>도시</th>
                                    <th>영종</th>
                                    <th>운서</th>
                                    <th>공항<br/>화물<br/>청사</th>
                                    <th>인천<br/>공항<br/>1터미널</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- thead 있을때 --> */}
                                <tr>
                                    <td>공덕</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                                <tr>
                                    <td>홍대입구</td>
                                    <td>1,550</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                                <tr>
                                    <td>디지털미디어시티</td>
                                    <td>1,550</td>
                                    <td>1,550</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>마곡나루</td>
                                    <td>1,750</td>
                                    <td>1,650</td>
                                    <td>1,650</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>김포공항</td>
                                    <td>1,750</td>
                                    <td>1,750</td>
                                    <td>1,650</td>
                                    <td>1,650</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                                <tr>
                                    <td>계양</td>
                                    <td>1,950</td>
                                    <td>1,850</td>
                                    <td>1,850</td>
                                    <td>1,750</td>
                                    <td>1,550</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>   
                                <tr>
                                    <td>검암</td>
                                    <td>2,050</td>
                                    <td>1,950</td>
                                    <td>1,950</td>
                                    <td>1,850</td>
                                    <td>1,650</td>
                                    <td>1,650</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>청라국제도시</td>
                                    <td>2,150</td>
                                    <td>2,050</td>
                                    <td>2,050</td>
                                    <td>1,950</td>
                                    <td>1,750</td>
                                    <td>1,750</td>
                                    <td>1,650</td>
                                    <td>1,550</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>영종</td>
                                    <td>3,350</td>
                                    <td>3,250</td>
                                    <td>3,250</td>
                                    <td>3,150</td>
                                    <td>2,950</td>
                                    <td>2,950</td>
                                    <td>2,850</td>
                                    <td>2,250</td>
                                    <td>1,200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr> 
                                <tr>
                                    <td>운서</td>
                                    <td>3,850</td>
                                    <td>3,750</td>
                                    <td>3,750</td>
                                    <td>3,650</td>
                                    <td>3,450</td>
                                    <td>3,450</td>
                                    <td>3,250</td>
                                    <td>2,500</td>
                                    <td>1,700</td>
                                    <td>1,200</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>공항화물청사</td>
                                    <td>4,450</td>
                                    <td>4,350</td>
                                    <td>4,350</td>
                                    <td>4,250</td>
                                    <td>4,050</td>
                                    <td>4,050</td>
                                    <td>3,650</td>
                                    <td>2,900</td>
                                    <td>2,300</td>
                                    <td>1,200</td>
                                    <td>1,200</td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                                <tr>
                                    <td>인천공항1터미널</td>
                                    <td>4,750</td>
                                    <td>4,650</td>
                                    <td>4,650</td>
                                    <td>4,550</td>
                                    <td>4,350</td>
                                    <td>4,350</td>
                                    <td>3,850</td>
                                    <td>3,200</td>
                                    <td>2,600</td>
                                    <td>1,300</td>
                                    <td>1,200</td>
                                    <td>1,200</td>
                                    <td></td>
                                </tr>   
                                <tr>
                                    <td>인천공항2터미널</td>
                                    <td>5,350</td>
                                    <td>5,250</td>
                                    <td>5,250</td>
                                    <td>5,150</td>
                                    <td>4,950</td>
                                    <td>4,950</td>
                                    <td>4,450</td>
                                    <td>3,800</td>
                                    <td>3,200</td>
                                    <td>1,900</td>
                                    <td>1,800</td>
                                    <td>1,200</td>
                                    <td>1,200</td>
                                </tr>                                               
                            </tbody>
                        </table>                                                
                    </div>
                    
                    <div class="comDataTable tablePc">
                        <table class="basic">
                            <caption>첫차부터 막차까지 시간대별 직통열차와 일반열차의 상행, 하행 운행 여부를 나타낸 표</caption>
                            <colgroup>
                                <col style={{width:"13.333%"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th rowspan="2">구분</th>
                                    <th colspan="2">직통열차</th>
                                    <th colspan="2">일반열차</th>
                                </tr>
                                <tr>
                                    <th>상행선(서울방면)</th>
                                    <th>하행선(공항방면)</th>
                                    <th>상행선(서울방면)</th>
                                    <th>하행선(공항방면)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- thead 있을때 --> */}
                                <tr>
                                    <td>첫차 ~ 09시</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>09시 ~ 13시</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><button type="button" class="btn blue line" onclick="openPopup('sample01');" aria-label="간편 지연증명서 안내">열차지연</button></td>
                                </tr>
                                <tr>
                                    <td>13시 ~ 19시</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>19시 ~ 막차</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>                                                  
                            </tbody>
                        </table>                                                
                    </div>

                    <div class="comDataTable tableMo1">
                        <table class="basic">
                            <caption>첫차부터 막차까지 시간대별 직통열차의 상행, 하행 운행 여부를 나타낸 표</caption>
                            <colgroup>
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th rowspan="2">구분</th>
                                    <th colspan="2">직통열차</th>
                                </tr>
                                <tr>
                                    <th>상행선(서울방면)</th>
                                    <th>하행선(공항방면)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- thead 있을때 --> */}
                                <tr>
                                    <td>첫차 ~ 09시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>09시 ~ 13시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>13시 ~ 19시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>19시 ~ 막차</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>                                                  
                            </tbody>
                        </table>                                                
                    </div>
                    <div class="comDataTable tableMo2">
                        <table class="basic">
                            <caption>첫차부터 막차까지 시간대별 일반열차의 상행, 하행 운행 여부를 나타낸 표</caption>
                            <colgroup>
                                <col style={{width:"auto"}} />
                                <col style={{width:"auto"}} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th rowspan="2">구분</th>
                                    <th colspan="2">일반열차</th>
                                </tr>
                                <tr>
                                    <th>상행선(서울방면)</th>
                                    <th>하행선(공항방면)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- thead 있을때 --> */}
                                <tr>
                                    <td>첫차 ~ 09시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>09시 ~ 13시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>13시 ~ 19시</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>19시 ~ 막차</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>                                                  
                            </tbody>
                        </table>                                                
                    </div>

                    {/* 담당부서 */}
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default SubBasic;