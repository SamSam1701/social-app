import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'
import signinImage from '../assets/signup.jpg'

const Auth = () => {
    const [isSingup, setIsSignup] = useState(true);
    const handleChange = () =>{
         
    }
  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>
                    {isSingup?'Sign Up':'Sign In'}
                </p>

                <form onSubmit={()=>{}}>
                    {isSingup &&(
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text"
                            name="fullName"
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                            />
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Auth
