import React from "react";
import { Route, Routes } from "react-router-dom";
import CheckUser from "./router/CheckUser.js";
import ProtectedPages from "./router/ProtectedPages.js";
import "./App.css";
import ToasterTester from "./components/ToasterTester.js";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/toaster" element={<ToasterTester/>}/>
          <Route
            path="/*"
            element={
              // <CheckUser>
                <ProtectedPages />
              // </CheckUser>
            }
          ></Route>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
