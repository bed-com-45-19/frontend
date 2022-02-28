import React from "react";
import "./LogIn.css";

function LogIn() {
  return (
    <body>
      <div className="container">
        <form className="form-group">
          <h1 className="text-center">Online Shop Booking </h1>

          <div id="form">
            <h3 className="text-white">Login into your account </h3>n
            <div id="input">
              <input type="email" id="input-group" placeholder="Email" />
              <input type="password" id="input-group" placeholder="Password" />
           
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

export default LogIn;
