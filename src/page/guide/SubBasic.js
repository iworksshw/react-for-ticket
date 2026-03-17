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
                    

                    
                    {/* 담당부서 */}
                    <ComSubBtm department={"영업계획처"} number={"1599-7788"} />

                </div>
            </div>
        </div>
    );
}

export default SubBasic;