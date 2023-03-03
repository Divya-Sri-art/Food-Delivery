import React,{useState} from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Restaurants from './components/restaurants/Restaurants'
import Features from './components/features/Features'
import Testimonials from './components/testimonials/Testimonials'
import Download from './components/download/Download'
import Order from './components/order/Order'
import LoginForm from './components/loginForm/LoginForm'


function App  () {
  const [login,setLogin]=useState(false)
  return (
    <div>
        { login && <LoginForm login={login} setlogin={setLogin}/>  }
      <Navbar setlogin={setLogin}/>
      <Home />
      <Restaurants />
      <Features />
      <Testimonials />
      <Download />
      <Order /> 
  </div>
  );
}

export default App;