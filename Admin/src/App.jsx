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

export default function App() {
  return (
   <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/cards" element={<Cards/>}/>
      <Route path="/events" element={<Events />}/>
      <Route path="/new/card" element={<NewCard1 />}/>
      <Route path="/new/card/location" element={<NewCard2 />}/>
      <Route path="/new/event" element={<NewEvent />}/>
      <Route path="/edit/card" element={<EditCard1 />}/>
      <Route path="/edit/card/location" element={<EditCard2 />}/>
      <Route path="/edit/event" element={<EditEvent />}/>
    
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/frgpwd" element={<ForgotPassword />}/>
      <Route path="*" element={<NotFound />}/>
   </Routes>
  )
}