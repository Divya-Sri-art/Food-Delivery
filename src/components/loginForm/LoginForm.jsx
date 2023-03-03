import React,{useState} from 'react'
import loginClasses from "./loginForm.module.css"
import { AiOutlineClose } from 'react-icons/ai'


const LoginForm = (props) => {
 
  const [data,setData] = useState({
    username:'',
    password:''
  })
  const {username,password} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }
  return (
    <div className={loginClasses["Container"]}>
      <div className={loginClasses["sub-wrapper"]}>

        <h4>Login Now</h4>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" placeholder="username" value={username} onChange={changeHandler} /><br />
          <input type="password" name="password" placeholder="password" value={password} onChange={changeHandler} /><br />
          <input type="submit" name="submit" />
          <button type="submit">cancel</button>
        </form>
      </div>
      <button className={loginClasses.icon} onClick={()=>{
        props.setlogin(false)
      }}>
        <AiOutlineClose />
        </button>
      </div>
  )
}

export default LoginForm