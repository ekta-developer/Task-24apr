import React, { useState } from "react";
import { Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../images/login.jpg";
import { Form, useForm } from "react-hook-form";
const style = { color: "#e85347", fontSize: "11px", fontStyle: "italic" };

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm();


  const handleChange = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
     trigger("username");
     trigger("password");
    console.log("Username:", username);
    console.log("Password:", password);

    // You can perform further actions with username and password here
  };
  const navigate = useNavigate();
 
  //   const [formData, setFormData] = useState({});
  //   const [loading, setLoading] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState(null);

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.id]: e.target.value });
  //     console.log(formData);
  //   };

  //   const handleSubmit = async (e) => {
  //      e.preventDefault();
  //     try {
  //       setLoading(true);
  //       setErrorMessage(null);
  //       const res = await fetch("http://pg.demoquaeretech.in/api//login", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(formData),
  //       });
  //       const data = await res.json();
  //       console.log(data);
  // //check status of api==>
  //       if (data.status === "Failed") {
  //         setErrorMessage(data.message);
  //         setLoading(false);
  //         alert("Authentication Error! Invalid user");
  //         return;
  //       }

  //       if (data.status === "Success") {
  //         navigate("/dashboard");
  //         localStorage.setItem("userData", JSON.stringify(data));
  //         setLoading(false);
  //       }
  //     } catch (err) {
  //       setErrorMessage(err.message);
  //       setLoading(false);
  //     }
  //   };
  const onSubmit = (data) => {
    if (data.username === "admin@gmail.com" && data.password === "123456" )
    {
      navigate("/dashboard");
    }
    console.log(data);
   
  };
  return (
    <>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-logo">
                <a href="admin-dashboard.html">
                  <img src={imgLogin} alt="Dreamguy's Technologies" />
                </a>
              </div>

              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Login</h3>
                  <p className="account-subtitle">Access to our dashboard</p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <div className="input-block mb-4">
                      <label className="col-form-label">Email Address</label>
                      <Input
                        className="form-control"
                        type="text"
                        id="username"
                        // {...register("username", {
                        //   required: true,
                        //   pattern: /^[a-zA-Z\s]*$/,
                        // })}
                        // value={watch(`username`)}
                        // onChange={handleChange}
                      />
{/* 
                      <span className="invalid">
                        {errors.username?.type === "required" && (
                          <span style={style}>username field is required</span>
                        )}
                        {errors.username?.type === "pattern" && (
                          <span style={style}>Digits are not allowed</span>
                        )}
                      </span> */}
                    </div>
                    <div className="input-block mb-4">
                      <div className="row align-items-center">
                        <div className="col">
                          <label className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                          <a className="text-muted" href="forgot-password.html">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="position-relative">
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          // {...register("password", {
                          //   required: true,
                            
                          // })}
                          // value={watch(`password`)}
                          // onChange={handleChange}
                         
                        />
                          {/* <span className="invalid">
                        {errors.password?.type === "required" && (
                          <span style={style}>Password field is required</span>
                        )}
                        </span> */}
                        <span
                          className="fa-solid fa-eye-slash"
                          id="toggle-password"
                        ></span>
                      </div>
                    </div>
                    <div className="input-block mb-4 text-center">
                      <Link to={"/dashboard"}>
                        <button
                          className="btn btn-primary account-btn"
                          type="submit"
                        >
                          Login
                        </button>
                      </Link>
                    </div>
                    <div className="account-footer">
                      <p>
                        Don't have an account yet?{" "}
                        <Link to="/register">Register</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
