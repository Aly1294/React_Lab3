import React,{useState} from 'react'
import './Register.css'
// import './Register.css'
let person ={
    name:'',
    password:'',
    city:'',
    email:'',
}

let person2 ={
    name:'',
    password:'',
    city:'',
    email:'',
}
function Register() {
    let [userData,setUserData]=useState(person)
    let [error_username,setError_username]=useState()
    let [error_email,setErrorEmail]=useState()
    let [error_password,setErrorPassword]=useState()
    
    let [userData_display,setUserData_display]=useState(person2)

    // console.log(userData)
    
    let data={}
    function getData_username(e){
        // console.log(e.target.value)
        
        if (e.target.value.length==0)
        {
            setError_username('Name is required')

        }
        else if(e.target.value.length<3){
            setError_username('Name Must be more than 3 characters')
        }
        else if(e.target.value.length>=6){
            setError_username('Name Must be less than 6 characters')
        }
        else{
            setError_username()
            data = {...userData,...{name:e.target.value,}}
            // console.log(data);
            setUserData(data)
        }

        // console.log("UserData = "+userData.name);
    }


    function getData_userEmail(e){
        // console.log(e.target.value)
        data = {...userData,...{email:e.target.value,}}
        console.log(data);
        setUserData(data)
        if (e.target.value.length==0)
        {
            setErrorEmail('email is required')

        }
        else{
            setErrorEmail()
            data = {...userData,...{email:e.target.value,}}
            // console.log(data);
            setUserData(data)
        }
    }


    function getData_userCity(e){
        // console.log(e.target.value)
        data = {...userData,...{city:e.target.value,}}
        // console.log(data);
        setUserData(data)
    }


    function getData_userPassword(e){
        // console.log(e.target.value)
        
        if (e.target.value.length==0)
        {
            setErrorPassword('password is required')

        }
        else{
            setErrorPassword()
            data = {...userData,...{password:e.target.value,}}
            // console.log(data);
            setUserData(data)
        }
    }

    function saveData(e){
        e.preventDefault()
        // console.log(error)
        if(error_email==undefined&&error_password==undefined&&error_username==undefined){
            setUserData_display(userData)
        }
        
    }
    function blur (element){
        console.log("blur")
        element.target.style.outline='none'
    }
    function focous (element){
        console.log("focous")
        element.target.style.outline='1px solid blue'
    }
    
  return (
    <div>
        
        <form className='w-50 ms-5 mt-4 p-5'>
          <h3>Register Here</h3>
          <div>
            <label className='me-3' htmlFor="username">Username</label>
            <input onBlur={blur} onFocus={focous} onChange={getData_username} className= {error_username?"error":""}  type="text" placeholder="username" name="username" />
            <small style={{color:'red'}} >{error_username}</small>
          </div>
          <div className='my-3'>
            <label className='me-3' htmlFor="useremail">Email</label>
            <input onBlur={blur} onFocus={focous} onChange={getData_userEmail} className= {error_email?"error":""} type="email" placeholder="E-mail" name="useremail" />
            <small style={{color:'red'}} >{error_email}</small>
          </div>

          <select onBlur={blur} onFocus={focous} className='mb-3' onChange={getData_userCity}>
            <option value='0'>Select City</option>
            <option value='1'>Cairo</option>
            <option value='2'>Giza</option>
            <option value='3'>Aswan</option>
          </select>
          
          <div className='mb-3'>
            <label className='me-3 ' htmlFor="password">Password</label>
            <input onBlur={blur} onFocus={focous} onChange={getData_userPassword} className= {error_password?"error":""}  type="password" placeholder="Password" name="password" />
            <small style={{color:'red'}} >{error_password}</small>
          </div >
        
          <button  onClick={saveData} className='btn btn-success' >Log In</button>
          
        </form>

        <div className='mt-3 ms-5'>
            <h1>{userData_display.name}</h1>
            <h1>{userData_display.email}</h1>
            <h1>{userData_display.city=='3'?'Aswan':''}</h1>
            <h1>{userData_display.city=='2'?'Giza':''}</h1>
            <h1>{userData_display.city=='1'?'Cairo':''}</h1>
            <h1>{userData_display.password}</h1>
        </div>
    </div>
  )
}

export default Register