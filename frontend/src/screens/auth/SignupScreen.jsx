import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')

  const handleSingup= async ()=>{
    try {
      axios.post('http://127.0.0.1:8000/auth/signup', {
        username:username,
        email: email, 
        password: password, 
      }).then((response)=>{
        localStorage.setItem('token', response.data.token);
      }).catch((error)=>{
        setError(error.response.data)
      });
  
    } catch (error) {

      console.error('Login error:', error.response.data);
    }
  }


  return (
    <div className="bg-black h-screen p-10 flex justify-center items-center"> 
      <div className=" bg-white  flex justify-center items-center align-middle flex-col text-center h-3/4  w-96 rounded-lg">
        <div className='flex items-center justify-center flex-col text-black sm:w-1/2 '>
        <h1 className="font-bold  text-4xl">ShopVue</h1>
        <p className=" text-red-400 text-sm"> {error} </p>

        </div>
        <form className="flex flex-col items-center justify-center p-10   ">
        <input
            className="
            appearance-none
            bg-transparent
            w-full
            h-10
            px-3
            mb-2
            outline-none
            border-b
            border-gray-950
            placeholder-gray-500
            "
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="
            appearance-none
            bg-transparent
            w-full
            h-10
            px-3
            mb-2
            outline-none
            border-b
            border-gray-950
            placeholder-gray-500
            "
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="
            appearance-none
            bg-transparent
            w-full
            h-10
            px-3
            mb-2
            outline-none
            border-b
            border-gray-950
            placeholder-gray-500
            "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link className="
          bg-gray-950 decoration-sky-500  text-white py-2 px-10 rounded-md m-5
          " onClick={handleSingup}>
            SignUp
          </Link>
        </form>
        <Link to="/login">
  Already User ? Login
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
