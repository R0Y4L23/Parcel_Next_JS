import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
var axios = require('axios');
var FormData = require('form-data');

const Index = () => {

 
  const [isRegister, setIsRegister] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const register =async () => {
    setLoading(true)
    if (password !== passwordConfirm) {
      alert('Passwords do not match')
      setLoading(false) 
    } 
    else 
    {
      var data = new FormData();
      data.append('username', username);
      data.append('email', email);
      data.append('password', password);
      data.append('address', address);

      var config = {
        method: 'post',
        url: 'https://parcel-next-js.vercel.app/register',
        data: data
      };

      await axios(config)
        .then(function (response) 
        {
          //console.log(response);
          sessionStorage.setItem('token', response.data.token)
          sessionStorage.setItem('user', email)
         Router.push("/home")
         setLoading(false)
        })
        .catch(function (error) {
          for (let i = 0; i < error.response.data.errors.length; i++) {
            alert(error.response.data.errors[i].msg)
          }
          //console.log(error);
          setLoading(false)
        });
    }
  }

  const login =async () => {
    setLoading(true)
    var data = new FormData();
data.append('email', email);
data.append('password', password);

var config = {
  method: 'post',
  url: 'https://parcel-next-js.vercel.app/login',
  data : data
};

await axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data));
  sessionStorage.setItem('token', response.data.Token)
  sessionStorage.setItem('user', email)
  Router.push("/home")
  setLoading(false)
})
.catch(function (error) {
  for (let i = 0; i < error.response.data.errors.length; i++) {
            alert(error.response.data.errors[i].msg)
          }
  //console.log(error);
  setLoading(false)
});
  }

  const handleRegisterOrLogin = async () => {
    if (isRegister) {
      await register()
    } else {
      await login()
    }
    
  }

  return (
    <div className=' bg-[#8BCA3A] sm:h-screen h-auto w-screen flex items-center'>
      <div className='  bg-[rgb(247,246,242)] lg:w-1/3 md:w-1/2 sm:w-2/3 w-full sm:h-auto h-full sm:py-20 py-40 mx-auto px-16'>
        <p className='uppercase font-bold text-2xl text-[rgb(151,207,78)]'>Member {isRegister ? "Register" : "Login"}</p>
        <hr />
        <form className='flex flex-col mt-10' onSubmit={(e)=>{e.preventDefault()}}>
          <label className='text-2xl text-[rgb(151,207,78)]'>Email</label>
          <input className='border-solid border-2 rounded-lg p-2' type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Password</label>
          <input className='border-solid border-2 rounded-lg p-2' type='text' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          {isRegister && <><label className='text-2xl text-[rgb(151,207,78)] mt-5'>Confirm Password</label>
            <input className='border-solid border-2 rounded-lg p-2' type='text' value={passwordConfirm} onChange={(e)=>{setPasswordConfirm(e.target.value)}}/>
            <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Username</label>
            <input className='border-solid border-2 rounded-lg p-2' type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
            <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Address</label>
            <input className='border-solid border-2 rounded-lg p-2' type='password' value={address} onChange={(e)=>{setAddress(e.target.value)}}/></>}
            <button className='bg-[rgb(151,207,78)] text-white rounded-lg p-2 mt-10' onClick={handleRegisterOrLogin}>{loading?"Loading...":isRegister ? "Register" : "Login"}</button>
        </form>
        <p className='mt-10 text-lg text-[rgb(151,207,78)]'>{isRegister ? "Already have an Account" : "Do not have an Account"}?  <span className='text-green-700 cursor-pointer' onClick={() => { setIsRegister(!isRegister) }}>{isRegister ? "Register" : "Login"}</span></p>


      </div>
    </div>
  )
}

export default Index
