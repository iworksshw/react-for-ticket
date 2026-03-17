import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";

function Business3() {
    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    
                    <div className="inner business">
                        <h2 style={{marginBottom:10}}>관련단체소개</h2>
                        <p>한국스포츠레저와 함께하는 관련 단체 입니다.</p>
                        <ul className="corpsList cf">
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/corps_img_1.png`} alt="#"/>
                                <div>
                                    <strong>문화체육관광부</strong>
                                    <a href="http://www.mcst.go.kr" rel="noreferrer" target="_blank">www.mcst.go.kr</a>
                                </div>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/corps_img_2.png`} alt="#"/>
                                <div>
                                    <strong>국민체육진흥공단</strong>
                                    <a href="http://www.kspo.or.kr" rel="noreferrer" target="_blank">www.kspo.or.kr</a>
                                </div>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/corps_img_3.png`} alt="#"/>
                                <div>
                                    <strong>사행산업통합감독위원회</strong>
                                    <a href="http://www.ngcc.go.kr" rel="noreferrer" target="_blank">www.ngcc.go.kr</a>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </section>
            <CptFooter />
        </section>
    );
}
export default Business3;