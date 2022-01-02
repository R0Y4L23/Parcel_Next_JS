import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

const Index = () => {

 
  const [isRegister, setIsRegister] = React.useState(false)

  const handleRegisterOrLogin = () => {
    Router.push("/home")
  }

  return (
    <div className=' bg-[#8BCA3A] sm:h-screen h-auto w-screen flex items-center'>
      <div className='  bg-[rgb(247,246,242)] lg:w-1/3 md:w-1/2 sm:w-2/3 w-full sm:h-auto h-full sm:py-20 py-40 mx-auto px-16'>
        <p className='uppercase font-bold text-2xl text-[rgb(151,207,78)]'>Member {isRegister ? "Register" : "Login"}</p>
        <hr />
        <form className='flex flex-col mt-10'>
          <label className='text-2xl text-[rgb(151,207,78)]'>Email</label>
          <input className='border-solid border-2 rounded-lg p-2' type='text' />
          <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Password</label>
          <input className='border-solid border-2 rounded-lg p-2' type='text' />
          {isRegister && <><label className='text-2xl text-[rgb(151,207,78)] mt-5'>Confirm Password</label>
            <input className='border-solid border-2 rounded-lg p-2' type='text' />
            <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Username</label>
            <input className='border-solid border-2 rounded-lg p-2' type='text' />
            <label className='text-2xl text-[rgb(151,207,78)] mt-5'>Address</label>
            <input className='border-solid border-2 rounded-lg p-2' type='password' /></>}
            <Link href={"/home"} passHref><button className='bg-[rgb(151,207,78)] text-white rounded-lg p-2 mt-10' >{isRegister ? "Register" : "Login"}</button></Link>
        </form>
        <p className='mt-10 text-lg text-[rgb(151,207,78)]'>{isRegister ? "Already have an Account" : "Do not have an Account"}?  <span className='text-green-700 cursor-pointer' onClick={() => { setIsRegister(!isRegister) }}>{isRegister ? "Register" : "Login"}</span></p>


      </div>
    </div>
  )
}

export default Index
