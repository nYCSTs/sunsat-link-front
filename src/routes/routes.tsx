import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Satellites from "../pages/Satellites";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
      <Route path='/satellites' element={<Satellites />} />
      <Route path="*" />
    </Routes>
  )
}

export default AppRoutes;