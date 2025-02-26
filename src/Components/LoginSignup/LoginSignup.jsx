import React, { useState } from "react";
import "./LoginSignup.css"
const LoginSignup = () => {

    const[action,setAction] = useState('Student')
    return ( 

        <div className="container">
             <div className="submit-container">
                <div className={action==="Tutors"?"submit gray":"submit"}onClick={()=>{setAction("Student")}}>Student</div>
                <div className={action==="Student"?"submit gray":"submit"}onClick={()=>{setAction("Tutors")}}>Tutors</div>
            </div>
            <div className="header">
                <div className="head1">Ubefu</div>
                <div className="des">Create Account</div>
                <div className="p">learn form varities of tutors and topics at your own pace</div>
                <div className="text">{action}</div>
                <div className="texth2"></div>            
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="First Name"/>
                </div>

                <div className="input">
                    <input type="text" placeholder="Last Name"/>
                </div>

                <div className="input">
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="input">
                    <input type="password" placeholder="Passowrd"/>
                </div>

                <div className="input">
                    <input type="password" placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgotten password? <span>Click Here</span></div>
            <div className="submit-container2">
                <div className="submit">CREATE ACCOUNT</div>
            </div>
        </div>
     );
}
 
export default LoginSignup;