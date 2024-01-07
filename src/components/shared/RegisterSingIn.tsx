import React from 'react'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const RegisterSingIn = () => {
  return (
    <div className="flex  w-full items-center justify-center ">
  <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
    <div className="m-2 w-full rounded-2xl  bg-cover bg-center text-white sm:w-2/5 flex gap-4 flex-col items-center justify-center " ><div>
    <h1 className="text-3xl font-black text-slate-700">Register</h1>
    <p className="mt-2 mb-5 text-base leading-tight text-gray-600">Register yourself here with your relevant Community!</p>
    </div>
    <Button className="w-full">As Team</Button>
      <Button className="w-full">As Player</Button>
      <Button className="w-full">As Umpire</Button>
    </div>
    <hr />
    <div className="w-full sm:w-3/5">
      <div className="p-8">
        <h1 className="text-3xl font-black text-slate-700">Sign In</h1>
        <p className="mt-2 mb-5 text-base leading-tight text-gray-600">Sign In if you already have a account</p>
        <form className="mt-8">
          <div className="relative mt-2 w-full">
            <input type="text" id="email"  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label htmlFor="email" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
          </div>
          <div className="relative mt-2 w-full">
            <input type="text" id="password" className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label htmlFor="password" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
          </div>
          <Button className="mt-4 w-full " type="submit" >Submit</Button>
        </form>
       
      </div>
    </div>
  </div>
</div>

  )
}

export default RegisterSingIn