import CptHeader from "../../components/common/CptHeader";
import CptFooter from "../../components/common/CptFooter";

function Business2() {
    return (
        <section style={{width:"100%"}}>
            <CptHeader />
                <section className="subContents">
                    
                    <div className="inner business vote">
                        <h2 style={{marginBottom:10}}>상품소개</h2>
                        <p style={{marginBottom:65}}>
                        <strong>스포츠가 설렌다 스포츠토토</strong><br />
                        두뇌로 즐기는 스포츠 레저게임 스포츠토토는 스포츠에 대한 관심과 참여를 통해 <br/>
                        경기를 분석하면서 즐기는 스포츠레저 게임입니다.<br />
                        </p>
                        <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/vote_main_img1.png`} alt="#" />

                        <dl className="cf">
                            <dt><strong>스포츠토토</strong>는 전세계인의<br/><strong>스포츠레저 게임</strong>입니다.</dt>
                            <dd>
                            영국, 이탈리아 등 유럽에서는 이미 100여년 전부터  풋볼풀스, 토토칼치오, 라퀴니엘라 등의 스포츠토토<br/>
                            게임을 운영하고 있습니다.<br/>
                            매주 수 천만 명의 스포츠 팬들이 참여할 정도로 크게 인기를 얻고 있으며, 아시아에서는 우리나라를 비롯해 <br/>
                            중국, 홍콩, 일본, 싱가포르 등지에서 활발히 시행되고 있습니다.<br/>
                            국내 스포츠토토는 지난 2001년 10월부터 처음 발매를 시작했습니다. <br/>
                            축구, 야구, 농구, 배구, 골프 등의 경기를 대상으로 게임 참가자가 경기결과를 분석하고 예측한 후, 경기 결과에<br/>
                            따라 배당금을 지급 받는 방식으로 운영되고 있습니다.
                            </dd>
                        </dl>

                        <dl className="cf">
                            <dt>운동경기에 적극적으로<br/>참여하는 <strong>지적(Skill)게임</strong></dt>
                            <dd>
                            전적으로 운에 좌우되는 복권(로또, 주택복권 등) 과 달리 토토는 경기의 결과를 참가자가 상세히 분석하여<br/>
                            예측하는 지적(Skill)게임입니다.<br/>
                            참가자는 선호하는 운동 경기를 관람하시는데에서 그치지 않고 적극적으로 게임에 참여하여 즐기고<br/>
                            궁극적으로는 국내스포츠 발전과 기금 조성에 이바지하게 됩니다.
                            </dd>
                        </dl>

                        <h2 className="small">운영 흐름도</h2>
                        <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/vote_main_img2.png`} alt="#" />

                        <h2 className="small" id="toto">투표권 상품 분류</h2>
                        <ul className="cf">
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/vote_main_img3.png`} alt="#" />
                                <strong>토토</strong>
                                <p>고정환급률</p>
                                <span>고객들이 참여한 전체 구입금액에서<br/>사전에 확정된 비율로 적중금을 구성하고,<br/>개별적중금은 적중자수로 나누어<br/>결정하는 방식</span>
                            </li>
                            <li>
                                <img src={`${process.env.PUBLIC_URL}/resource/images/sub/business/vote_main_img4.png`} alt="#" />
                                <strong>프로토</strong>
                                <p>고정배당률</p>
                                <span>사업운영자가 경기결과 등 투표항목에<br/>배당률(Odds)을 미리 제시하고,<br/>고객은 항목을 선택하여 베팅하는 방식<br/>(사전 확정된 적중금 배당 방식)</span>
                            </li>
                        </ul>

                        <h2 className="small">토토 소개</h2>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="3" scope="row" className="head" width="220">축구토토</th>
                                <th width="200">승무패</th>
                                <td>14경기의 승/무/패를 예측</td>
                            </tr>
                            <tr>
                                <th>스페셜(+)</th>
                                <td>2경기(더블) 또는 3경기(트리플)의 최종점수를 예측</td>
                            </tr>
                            <tr>
                                <th>매치</th>
                                <td>경기를 대상으로 전반전 점수와 최종점수를 예측</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="2" scope="row" className="head" width="220">배구토토</th>
                                <th width="200">스페셜</th>
                                <td>2경기(더블) 또는 3경기(트리플)의 최종 세트스코어와 1세트 점수차 예측</td>
                            </tr>
                            <tr>
                                <th>매치</th>
                                <td>1경기의 1~3세트 승리팀과 각 세트별 점수차 예측</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="3" scope="row" className="head" width="220">야구토토</th>
                                <th width="200">승1패</th>
                                <td>14경기의 승/1(1점차 이내 승부)/패를 예측</td>
                            </tr>
                            <tr>
                                <th>스페셜(+)</th>
                                <td>2경기(더블) 또는 3경기(트리플)의 최종점수대를 예측</td>
                            </tr>
                            <tr>
                                <th>매치</th>
                                <td>1경기의 최종점수대 및 양팀의 홈런유무(OX)를 예측</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th scope="row" className="head" width="220">골프토토</th>
                                <th width="200">스페셜</th>
                                <td>한 대회의 5명 또는 7명의 4라운드(연장전 제외) 최종타수를 예측</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="3" scope="row" className="head" width="220">농구토토</th>
                                <th width="200">승5패</th>
                                <td>14경기의 승/5(5점차 이내 승부)/패를 예측</td>
                            </tr>
                            <tr>
                                <th>스페셜(+) & 스페셜N</th>
                                <td>2경기(더블) 또는 3경기(트리플)의 최종점수대를 예측* 스페셜N : 미국프로농구(NBA) 경기 대상 발매</td>
                            </tr>
                            <tr>
                                <th>매치 & W매치</th>
                                <td>1경기의 1+2쿼터 점수대와 최종점수대를 예측 * W매치: 한국여자농구연맹(WKBL) 경기 대상 발매</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="2" scope="row" className="head" width="220">종목통합</th>
                                <th width="200">토토OX</th>
                                <td>여러 종목의 2~3경기에 제시된 10~15개 이벤트의 발생 여부(OX)를 예측</td>
                            </tr>
                            <tr>
                                <th>토토언더오버</th>
                                <td>여러 종목의 5, 7경기 홈팀 및 원정팀의 각각에 제시된 최종득점이 기준 값보다 낮은지, 높은지(U/O) 예상</td>
                            </tr>
                            </tbody>
                        </table>
                        
                        <h2 className="small">프로토 소개</h2>

                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="2" scope="row" className="head" width="220">프로토 승부식</th>
                                <th rowSpan="2" width="200">게임방법</th>
                                <td>대상경기 중 2개~10개 경기 또는 지정된 경기 중 1개 경기를 선택한 후 해당게임의 승(무)패,<br/>핸디캡 승(무)패, 총득점 언더/오버 등을 예측하여 맞히는 게임</td>
                            </tr>
                            <tr>
                                <td>선택한 결과가 모두 맞아야 적중으로 인정</td>
                            </tr>
                            </tbody>
                        </table>

                        <table width="100%">
                            <tbody>
                            <tr>
                                <th rowSpan="2" scope="row" className="head" width="220">프로토 기록식</th>
                                <th rowSpan="2" width="200">게임방법</th>
                                <td>대상경기리스트 중 1개 게임에 대한 결과를 예측하는 방식</td>
                            </tr>
                            <tr>
                                <td>스코어, 득점선수, 우승자 등 다양한 경기 기록 유형을 제공</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                    
                </section>
            <CptFooter />
        </section>
    );
}
export default Business2;