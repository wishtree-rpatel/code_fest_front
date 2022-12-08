import { Routes, Route } from "react-router-dom";
import Dummy from "../Pages/Dummy.js";

const ProtectedPages = () => {
  return (
    <Routes>
      <Route path="/dummy" element={<Dummy />} />
    </Routes>
  );
};
export default ProtectedPages;
