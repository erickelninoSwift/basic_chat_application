import "./index.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import User from "./pages/User";
import Inbox from "./pages/Inbox";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index="/login" element={<Login />} />
          <Route path="/users" element={<User />} />
          <Route path="/inbox" element={<Inbox />} />
        </Route>
      </Routes>
      ;
    </>
  );
}

export default App;
