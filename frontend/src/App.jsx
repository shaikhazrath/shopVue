import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


import NotFound from "./screens/NotFound";
import Temp from "./screens/main/Temp";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import ShopDashboard from "./screens/Dashboard/ShopDashboard";
import Shop from "./screens/main/Shop";



function App() {
  const [token,setToken]= useState('')
  useEffect(()=>{
    setToken(localStorage.getItem('token'))
  },[token])

  return (
    <Router>
    {
      token ?
      <Routes>
        <Route path="/" element={<Shop/>}/>
      <Route path="/Temp" element={<Temp/>}/>
      <Route path="/dashboard" element={<ShopDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    :
    <Routes>
    <Route path="/" element={<Shop/>}/>
    <Route path="/temp" element={<Temp/>}/>

    <Route path="/Temp" element={<Temp/>}/>
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/signup" element={<SignupScreen />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
    }
  
  </Router>
  );
}

export default App;
