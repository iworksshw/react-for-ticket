import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DatePicker from 'tui-date-picker';
import ComSubInfo from '../../components/common/ComSubInfo';
import ComSubBtm from '../../components/common/ComSubBtm';
import ComGroupTop from '../../components/common/ComGroupTop';
import ComBoardList from '../../components/common/ComBoardList';
import ComPaging from '../../components/common/ComPaging';






function BoardList() {
    const dataList = {
        "number" : 1,
        "page" : [
            { "no" : 10, "title" : "2025년 공항철도 여름철도학교 지원자 모집 에어부산 인천국제공항제2여객터미널 이전 안내 2025년 공항철도 여름철도학교 지원자 모집 에어부산 인천국제공항제2여객터미널 이전 안내", "date" : "25.09.02", "view" : 12334},
            { "no" : 9, "title" : "에어부산 인천국제공항제2여객터미널 이전 안내", "date" : "25.09.01", "view" : 12334},
            { "no" : 8, "title" : "2025년 공항철도 하반기 신입사원 채용 공고", "date" : "25.08.29", "view" : 12334},
            { "no" : 7, "title" : "독립구간 정기권 운영 종료 알림", "date" : "25.08.28", "view" : 12334},
            { "no" : 6, "title" : "공항철도 운임 조정 안내", "date" : "25.08.24", "view" : 12334},
            { "no" : 5, "title" : "제 21대 대통령선거 임시공휴일 평일 열차 시각표 적용 알림", "date" : "25.08.21", "view" : 12334},
            { "no" : 4, "title" : "[훈련상황] 공항철도 일부구간 열차운행 중단 안내", "date" : "25.08.15", "view" : 12334},
            { "no" : 3, "title" : "공항철도, 2025년 재난대응 안전한국훈련 실시(5.21.(수))", "date" : "25.08.12", "view" : 12334},
            { "no" : 2, "title" : "공항철도 역사투어 참가자 모집(4/23~30)", "date" : "25.08.10", "view" : 12334},
            { "no" : 1, "title" : "직통열차 소소(笑疏)한 이벤트!", "date" : "25.08.02", "view" : 12334},
        ],
    }

    return (
        <div className="layoutContArea">
            <div className="cptBasicGroup">
                <div className="basicGroupArea">
                    {/* 서브타이틀/브레드크럼 */}
                    <ComSubInfo text={`<em>인천국제공항과 서울역 간 무정차(논스톱)로 가장 안전하고 빠르게 연결</em>하며, ​공항 이용객을 위한 특화된 서비스와 편의 시설을 제공하는 고급형 열차입니다.`} />

                    {/* <!-- 리스트 상단 --> */}
                    <ComGroupTop />

                    {/* <!-- 게시판 리스트 --> */}
                    <ComBoardList data={dataList} />
                    
                    {/* <!-- 페이징 --> */}
                    <ComPaging number={dataList.number} />
                    
                    {/* 담당부서 */}
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default BoardList;