import React from "react";
import './paper.css'; 



function Signup() {
  

    return (
      <div className="App"> 
      <div class="container">
    <div className="paper-container">
      <div className="paper-content">
        <div class="row">
          <div class="col-6 d-none d-sm-block">
          <img src="https://nostalgic-hopper-ff2f23.netlify.app/images/img-8.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '450px' }} />
          </div>
          <div class="col-md-6 text-center">
            <div class="mb-4" >
  <h2>Sign Up</h2>
  </div>
  <form>
    
    
    <div class="form-group col-md-8 mx-auto mb-4">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter your email" />
    </div>
    <div class="form-group col-md-8 mx-auto mb-4">
      <label for="password">Password:</label>
      <input type="password" class="form-control" id="password" placeholder="Enter your password" />
    </div>
    
    <button type="submit" class="btn btn-primary mt-3">Sign Up</button>
  </form>
</div>

        </div>
      </div>
      </div>
      </div>
     
      
      
      
      


       </div>
    );
  }
  
  export default Signup ;