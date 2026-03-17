import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuideLayout from "./components/layout/GuideLayout";
import Guide from "./components/Guide";
import TextList from "./page/guide/TextList";
import Divide from "./page/guide/Divide";
import SubBasic from "./page/guide/SubBasic";
import Img from "./page/guide/Img";
import SubInfo from "./page/guide/SubInfo";
import Table from "./page/guide/Table";
import BoardList from "./page/guide/BoardList";

import MainLayout from "./components/layout/MainLayout";
import CptMain from "./page/main/CptMain";
import Layout from "./components/layout/Layout";

import About from "./page/company/About";
import Ceo from "./page/company/Ceo";
import Organization from "./page/company/Organization";
import Business1 from "./page/business/Business1";
import Business2 from "./page/business/Business2";
import Business3 from "./page/business/Business3";
import Careers from "./page/board/Careers";
import CareersView from "./page/board/CareersView";
import Bidding from "./page/board/Bidding";
import BiddingView from "./page/board/BiddingView";
import Pr from "./page/board/Pr";
import PrView from "./page/board/PrView";
import Legal from "./page/legal/Legal";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CptMain />} />
        </Route>
        <Route path="/company" element={<Layout />}>
          <Route path="company" element={<About />} />
          <Route path="ceo" element={<Ceo />} />
          <Route path="organization" element={<Organization />} />
          {/* 
          <Route path="business/business1" element={<Business1 />} />
          <Route path="business/business2" element={<Business2 />} />
          <Route path="business/business3" element={<Business3 />} />
          <Route path="board/careers" element={<Careers />} />
          <Route path="board/careersView" element={<CareersView />} />
          <Route path="board/bidding" element={<Bidding />} />
          <Route path="board/biddingView" element={<BiddingView />} />
          <Route path="board/pr" element={<Pr />} />
          <Route path="board/prView" element={<PrView />} />
          <Route path="legal/legal" element={<Legal />} />
          */}
        </Route>
        <Route path="/guide" element={<GuideLayout />}>
          <Route path="TextList" element={<TextList />} />
          <Route path="Divide" element={<Divide />} />
          <Route path="Img" element={<Img />} />
          <Route path="SubInfo" element={<SubInfo />} />
          <Route path="Table" element={<Table />} />
          <Route path="BoardList" element={<BoardList />} />
          <Route path="SubBasic" element={<SubBasic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
