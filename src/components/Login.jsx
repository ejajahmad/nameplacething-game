import React from 'react'
import { useStateContext } from '../../context/StateContext'

export default function Login() {

    const {loginData, setLoginData, setIsLogin} = useStateContext()

    const handleOnChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
         if (loginData.username !== "" && loginData.roomId !== "") {
            console.log(loginData)
            setIsLogin(true)
         }
    }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleOnSubmit} >
    <input type="text" name="username" placeholder="name" className=" bg-transparent border border-indigo-500 pl-2 appearance-none outline-none"  onChange={handleOnChange}  />
    <input type="text" name="roomId" placeholder="room id" className=" bg-transparent border border-indigo-500 pl-2 appearance-none outline-none"  onChange={handleOnChange}/>
    <input type="submit" value="Let's play" className="w-full bg-purple-500 hover:bg-purple-600" />
  </form>
  )
}
