import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/flights" element={<Home />} />
        <Route path="/bookSeat" element={<Home />} />
        <Route path="/bookings" element={<Home />} />
        <Route path="/passengerDetails" element={<Home />} />
        <Route path="/payment" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
