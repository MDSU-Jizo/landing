import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PAGES } from "./environments/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          {
              PAGES.map((args) => (
                  <Route
                      key={args.url}
                      path={args.url}
                      element={args.page}
                  />
            ))
          }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
