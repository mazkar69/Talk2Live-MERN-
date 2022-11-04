import React from "react";
import './App.css'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<HomePage></HomePage>} />
          <Route path="/chat" element={<ChatPage></ChatPage>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
