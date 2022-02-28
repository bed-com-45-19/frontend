import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <body>
      <div className="container">
        <form className="form-group">
          <h1 className="text-center">Please May You Register</h1>

          <div id="form">
            <h3 className="text-white">Enter Your Personal Details</h3>n
            <div id="input">
              <input type="text" id="input-group" placeholder="Full Name" />
              <input type="email" id="input-group" placeholder="Email" />
              <input type="password" id="input-group" placeholder="Password" />
              <input type="number" id="input-group" placeholder="Phone Number" />
      
            </div>
           
            <button type="submit" className="submit-btn">
              Submit Form
            </button>
            <button type="reset" className="reset-btn">
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default SignUp;
