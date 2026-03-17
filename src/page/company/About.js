
function Company() {
    return (
        <section className="subContents">
            <div className="inner">
                <h2>회사소개</h2>
                <div className="company cf">
                    <img src={`${process.env.PUBLIC_URL}/resource/images/sub/company/company.png`} alt="#" />
                    <div className="companyInfo">
                        <strong>한국스포츠레저 주식회사</strong>
                        <dl className="cf">
                            <dt>설립일</dt>
                            <dd>2025년 4월 10일</dd>
                        </dl>
                        <dl className="cf">
                            <dt>설립근거</dt>
                            <dd>국민체육진흥법 제 4장 25조</dd>
                        </dl>
                        <dl className="cf">
                            <dt>사업영역</dt>
                            <dd>체육진흥투표권(스포츠토토)사업</dd>
                        </dl>
                        <dl className="cf">
                            <dt>대표이사</dt>
                            <dd></dd>
                        </dl>
                        <dl className="cf">
                            <dt>주소</dt>
                            <dd>서울특별시 송파구 올림픽로 424(방이동), 올림픽공원 벨로드롬 103호, 105호</dd>
                        </dl>
                    </div>
                </div>
                
                <div className="map_wrap">
                    <img src={`${process.env.PUBLIC_URL}/resource/images/sub/company/map.jpg`} alt="한국스포츠레저(주) 위치" />
                </div>
                
            </div>
        </section>
    );
}
export default Company;