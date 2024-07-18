import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  let [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [useserror, setuseserror] = useState({
    username: false,
    email: false,
    password: false,
  });
  
  const handledata = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
      // console.log(name,value)
    setuserdata({ ...userdata, [name]: value });
  };
  let usernameRegex=/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
  let emailRegex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const handlesubmit = (e) => {
    e.preventDefault();
   
    
    if (passwordRegex.test(userdata.password) && emailRegex.test(userdata.email) && usernameRegex.test(userdata.username)) {
      toast.success(" successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setuseserror({ ...userdata, password: false ,email:false, username :false});
    } else {
      toast.error("🦄 fail!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setuseserror({ ...userdata, password: true ,email:true,username:true});
    }

  };

  return (
    <div>
      <ToastContainer />
      <h2>Simple Form!</h2>
      <form onSubmit={handlesubmit}>
        <label>Name : </label>
        <input
          type="text"
          placeholder="enter  username"
          value={userdata.username}
          name="username"
          onChange={handledata}
          style={{
            backgroundColor: useserror.username
              ? "red"
              : userdata.username.length > 0
              ? "green"
              : "black",
          }}
        />
        <br></br>
        <label>Email : </label>
        <input
          type="email"
          placeholder="enter  email"
          value={userdata.email}
          name="email"
          onChange={handledata}
          style={{
            backgroundColor: useserror.email
              ? "red"
              : userdata.email.length > 0
              ? "green"
              : "black",
          }}
        />
        <br></br>
        <label>Password : </label>
        <input
          type="text"
          placeholder="enter  password"
          value={userdata.password}
          name="password"
          onChange={handledata}
          style={{
            backgroundColor: useserror.password
              ? "red"
              : userdata.password.length > 0
              ? "green"
              : "black",
          }}
        />
        {useserror.password ? <p>enter click password</p> : null}
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
