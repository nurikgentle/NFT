import { Route, Routes } from "react-router-dom";
import MainPage from "./PAGES/MAINPAGE/MainPage";
import NftPage from "./PAGES/NFTPAGE/NftPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nftPage/:address/:token" element={<NftPage />} />
      </Routes>
    </div>
  );
}

export default App;
