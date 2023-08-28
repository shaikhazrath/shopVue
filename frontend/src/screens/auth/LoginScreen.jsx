import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const LoginScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('')

  
const handleLogin= async ()=>{
  try {
    axios.post('http://127.0.0.1:8000/auth/signin', {
      emailOrUsername: username, 
      password: password, 
    }).then((response)=>{
      localStorage.setItem('token', response.data.token);
      navigate('/');

    }).catch((error)=>{
      setError(error.response.data)

    });

  } catch (error) {
    console.error('Login error:', error.response.data);
  }
}
 

  return (
    <div className="bg-black h-screen p-10 flex justify-center items-center"> 
      <div className=" bg-white  flex justify-center items-center align-middle flex-col text-center h-2/3  w-96 rounded-lg">
        <div className='flex items-center justify-center flex-col text-black sm:w-1/2 '>
        <h1 className="font-bold  text-4xl">ShopVue</h1>
      {error ? 
        <p className=" text-red-400 ">{error}</p>
      :
      <p className="">Wellcome back </p>
    }

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
            placeholder="Username or email"
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
          <h1 className='ml-auto'>Forget password</h1>

          <Link className="
          bg-gray-950 decoration-sky-500  text-white py-2 px-10 rounded-md m-5
          " onClick={handleLogin}>
            Login
          </Link>
        </form>
        <Link to='/signup'>
      Dont have account ? signup
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
