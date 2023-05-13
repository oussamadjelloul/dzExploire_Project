import {Route, Routes} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Search from "./pages/Search";
import PlaceDetail from "./pages/PlaceDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/place/:id" element={<PlaceDetail/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </>

  );
}

export default App;
