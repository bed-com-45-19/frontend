import React from 'react'
import  './BookingDetails.css';

function BookingDetails() {
    return (
      <body>
        <div className="container">
          <form className="form-group">
            <h1 className="text-center">Online Booking</h1>

            <div id="form">
  
              
                   
                    <div id="input3">
                        <span id="input-group" className="text-primary"></span>
                        
                       
                        <label className="text-white" for="input-group"></label>
                        </div>
                        
                      
                        <div id="input5">
                        <h3 className="text-white">BOOK YOUR PRODUCT USING THIS FORM</h3>
                            <h3 className="text-white"> Enter your Personal Details</h3>
                        </div>

                        <div id="input6">
                            <input type="text" id="input-group" placeholder="Full Name"/>
                            <input type="number" id="input-group" placeholder="Phone"/>
                            <input type="Email" id="input-group1" placeholder="Email"/>
                        </div>
                        <div id="input4">
                          <input type="number" id="input-group1" placeholder="how many reams of paper do you want.. (prices: 1 ream=$100)"/>

                        </div>  
                        <button type="submit" className="submit-btn">book now</button>
                        <button type="reset" className="reset-btn">Clear Form</button>
                      
            </div>
         

          </form>
        </div>

        <div> WE SELL AND WE SATISFY OUR CUSTOMERS</div>
      </body>
    );
}

export default BookingDetails
