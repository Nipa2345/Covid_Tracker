/*In this example we can reduce the code or
and simplify the form code using some technique in react*/

import React, { useState } from 'react';
import './index.css';

const App = () => {

  //Hook: useState.
  //we can pass object inside useStat()
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  //Fat arrow function for all input fields
  const inputEvent = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.name);

    /* We can make this two line in one using destructuring */
    //const value = event.target.value;
    //const name = event.target.name;
    const { value,name } = event.target;

    //Callback function using fat arrow fun.
    setFullName((preValue) => {
      //console.log(preValue);

      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      }
      else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      }
      else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  //submit button event
  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmits} >
          <div>
            <h1> Hello {fullName.fname} {fullName.lname} </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>

            {/* it's called a controlled components */}
            <input 
              type="text"
              placeholder="Enter Your First Name"
              name="fName"
              onChange={inputEvent} //user type anything then this onChange event will call.
              value={fullName.fname} //Single source of truth. // user type anything ....
            />
            <input 
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input 
              type="email"
              placeholder="Enter Your Email Id"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete = "off"
            />
            <input 
              type="number"
              placeholder="Enter Your Phone Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <button type="Submit"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
