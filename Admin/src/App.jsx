import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/Sigup";
import Cards from "./pages/Cards";
import Events from "./pages/Events";
import NewCard1 from "./pages/NewCard1";
import NewCard2 from "./pages/NewCard2";
import NewEvent from "./pages/NewEvent";
import EditCard1 from "./pages/EditCard1";
import EditCard2 from "./pages/EditCard2";
import EditEvent from "./pages/EditEvent";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import RequireAuth from "./component/Auth/RequireAuth";

export default function App() {
  return (
   <Routes>
      <Route path="/" element={<RequireAuth><Dashboard/></RequireAuth>}/>
      <Route path="/cards" element={<RequireAuth><Cards/></RequireAuth>}/>
      <Route path="/events" element={<RequireAuth><Events /></RequireAuth>}/>
      <Route path="/new/card" element={<RequireAuth><NewCard1 /></RequireAuth>}/>
      <Route path="/new/card/location" element={<RequireAuth><NewCard2 /></RequireAuth>}/>
      <Route path="/new/event" element={<RequireAuth><NewEvent /></RequireAuth>}/>
      <Route path="/edit/card" element={<RequireAuth><EditCard1 /></RequireAuth>}/>
      <Route path="/edit/card/location" element={<RequireAuth><EditCard2 /></RequireAuth>}/>
      <Route path="/edit/event" element={<RequireAuth><EditEvent /></RequireAuth>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<RequireAuth><SignUp /></RequireAuth>}/>
      <Route path="/frgpwd" element={<ForgotPassword />}/>
      <Route path="*" element={<NotFound />}/>
   </Routes>
  )
}