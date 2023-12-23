
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin =()=>{
    const navigate = useNavigate()
    const[user,setUser] = useState({email: "" , pass: ""})

     function updateUser(e){
        setUser({...user,[e.target.name]:e.target.value.trim()})
     }

     const getuser = async (e) => {
        e.preventDefault()
       // console.log(user);
        try {
          const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: `${user.email}`,
              password: `${user.pass}`,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('userData', JSON.stringify(data));
            localStorage.setItem('id', JSON.stringify(data.id));
            //console.log('Data saved to local storage:', data);
    
            if (data.id && data.token) {
              navigate('/second');
            } else {
              console.error('Invalid response data:', data);
            }
          } else {
            console.error('Error during fetch:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      

    return(
        <div className="signin">
            <p>Welcome back! 👋</p>
            <h2>Signin to your account</h2>

            <form onSubmit={getuser}>
            <label>Your email</label>
            <input type="text" placeholder="Enter your Email" onChange={updateUser} name="email"></input>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={updateUser} name="pass"></input>

            <button type="submit">CONTINUE</button>

            <a>Forget Your Password?</a>

            </form>
        </div>
    )
}

export default Signin