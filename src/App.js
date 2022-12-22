import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import HomepageAnime from "./Music/Homepage/HomepageAnime";
function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route element={<HomepageAnime></HomepageAnime> } path="/"></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
