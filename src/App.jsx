import { useState } from "react";
import {Route,Routes,Router,BrowserRouter, Navigate} from "react-router-dom"
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Result from "./pages/result"
import './App.css'

function App() {

  const [user,setUser]=useState("");
  const [score,setScore]=useState(0);
  return(
      <BrowserRouter>
        <Routes>
         <Route path="/home" element={<Home user={user} setUser={setUser} />}/>
         <Route path="/quiz" element={<Quiz setScore={setScore}/>}/>
         <Route path="/result" element={<Result user={user} score={score} />}/>

         <Route path="*" element={<Navigate to="/home"/>}/>
       </Routes>
      </BrowserRouter>
  )



}

export default App
