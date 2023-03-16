import React from "react";  
import "./form.css";

export const Form = () => {
  return ( 
    <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
    <br></br>
      <h1>FORM REGISTRATION</h1>
      <br></br>
      <h4>
            Fill The Form</h4>
      <div id="contact-container1">
        <div className="contact-info1">
          </div>
          <form>
            <div className='col1'>
              <div className="form-group1">
                <label>FirstName</label>
                <input style={{color: "white"}} type="text"/>
              </div>
              <div className="form-group1">
                <label>LastName</label>
                <input style={{color: "white"}} type="text"/>
              </div>
              </div>
              <div className='col1'>
              <div className="form-group1">
                <label>Email</label>
                <input style={{color: "white"}} type="email"/>
              </div>
              <div className="form-group1">
                <label>Phone</label>
                <input style={{color: "white"}} type="tel"/>
              </div>
              </div>
              <div className="col1">
                <div className="form-group1 solo1">
                <label for="cars">Choose Problem Statement:</label>
                <select style={{color: "white"}} name="cars" id="cars">
                    <option style={{color: "white"}} value="volvo"  >P1</option>
                    <option style={{color: "white"}} value="saab">p2</option>
                    <option  style={{color: "white"}}value="mercedes">p3</option>
                    <option  style={{color: "white"}} value="audi">p4</option>
                </select>
                </div>
              </div>
              <div className="col1">
                <div className="form-group1 solo1">
                  <button className="primary1">Send Message</button>
                </div>
              </div>
          </form>
          </div>
          <br></br>
          <br></br>
          
          
    </>
  );
}
export default Form
