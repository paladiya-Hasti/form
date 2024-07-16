import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  let [userdata, setuserdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handledata = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    //   console.log(name,value)
    setuserdata({ ...userdata, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (
      userdata.email.length > 0 &&
      userdata.password.length > 0 &&
      userdata.username.length > 0
    ) {
      toast.success("🦄 successfully!", {
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
    } else {
        toast.error('🦄 fail!', {
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
            
    }
  };

  return (
    <div>
      <ToastContainer/>
      <h2>Simple Form!</h2>
      <form onSubmit={handlesubmit}>
        <label>Name : </label>
        <input
          type="text"
          placeholder="enter  username"
          value={userdata.username}
          name="username"
          onChange={handledata}
        />
        <br></br>
        <label>Email : </label>
        <input
          type="email"
          placeholder="enter  email"
          value={userdata.email}
          name="email"
          onChange={handledata}
        />
        <br></br>
        <label>Password : </label>
        <input
          type="text"
          placeholder="enter  password"
          value={userdata.password}
          name="password"
          onChange={handledata}
        />
        <br></br>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
