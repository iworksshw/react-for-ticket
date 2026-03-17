import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";

function Business1() {
    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    
                    <div className="inner business">
                        <h2>체육진흥투표권</h2>
                        <p className="subText">한국스포츠레저는 국민체육진흥공단의</p>
                        <p className="boldText"><strong> 「체육진흥투표권사업」 수탁사업자입니다.</strong></p>
                        <p className="left">체육진흥투표권사업이란 “국민체육진흥법”에 의거하여 2001년 10월부터 도입된 국가정책사업으로 2002년 한일 월드컵 축구대회의 성공적 개최와 국민여가 체육육성<br/>
                        및국민체육재원 조성을 목적으로 시행된 공익사업입니다.<br/>
                        한국스포츠레저(주)는 발행사업자인 국민체육진흥공단으로부터 체육진흥투표권사업을 위탁받아 운영하고 있습니다.<br/><br/>
                        체육진흥투표권(SPORTSTOTO, 스포츠토토)은 축구, 야구, 농구, 배구, 골프 등 스포츠경기의 결과를 예측 · 투표하여 경기 결과를 적중시킨 자에게 환급금을 교부하는<br/>
                        선진국형 스포츠레저 게임으로 고정환급률 방식의 ‘토토’와 고정배당률 방식의 ‘프로토’로 구성되어 있습니다.<br/>
                        체육진흥투표권 발행을 통해 조성된 수익금은 전액 국민체육진흥기금으로 편입되어 생활체육·전문체육·장애인체육 육성 뿐만 아니라, 국내에서 개최되는 각종  국제대회를<br/>
                        지원하는 등, 다양한 체육진흥 사업에 사용됨으로써 대한민국 스포츠 발전 및 활성화에 기여하고 있습니다.
                        </p>

                        <h2 className="small">체육진흥투표권사업 구조 및 기관별 역할</h2>
                        <p style={{marginBottom:80}}>체육진흥투표권사업은 관리·감독 기관, 발행사업자 등 관련 기관간<br/>유기적 협업을 통하여 투명하고 공정하게 운영됩니다.</p>
                        <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/business_chart1.png`} alt="#" style={{marginBottom:110}} />
                    </div>

                </section>
            
            <CptFooter />
        </section>
    );
}
export default Business1;