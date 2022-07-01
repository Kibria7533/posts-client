import React from "react";
import axios from 'axios';
import { useState } from 'react';

function Login(){
    const [user_name,setUsername]= useState(" ");
    const [password, setPassword] = useState(" ");



    const Save=async (e)=>{
        console.log("hello");
        await axios.post("http://localhost:5000/login",{
            user_name,
            password,

        },{headers: {'Accept': 'application/json',
                'Content-Type': 'application/json'}})
            .then((data)=>{
                console.log(data)
            })

    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">
                                    Sample Post
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="contact.html">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="signup.html">
                                    Signup
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3 py-3 py-lg-4" href="login.html">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header
                className="masthead"
                // style={{ backgroundImage: 'url("assets/img/post-bg.jpg")' }}
            >
                {/*<div className="container position-relative px-4 px-lg-5">*/}
                {/*    <div className="row gx-4 gx-lg-5 justify-content-center">*/}
                {/*<div className="col-md-10 col-lg-8 col-xl-7">*/}
                {/*    <div className="post-heading">*/}
                {/*                    <h1>Man must explore, and this is exploration at its greatest</h1>*/}
                {/*                    <h2 className="subheading">*/}
                {/*                        Problems look mighty small from 150 miles up*/}
                {/*                    </h2>*/}
                {/*                    <span className="meta">*/}
                {/*  Posted by*/}
                {/*  <a href="#!">Start Bootstrap</a>*/}
                {/*  on August 24, 2022*/}
                {/*</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </header>

            {/*form */}
            <div className="container login">
                <div className="row main">
                    <div className="panel-heading">
                        <div className="panel-title text-center">
                            <h1 className="title">Company Name</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="main-login main-center">
                        <form className="form-horizontal" method="post" action="#">
                            <div className="form-group">
                                <label htmlFor="username" className="cols-sm-2 control-label">
                                    Username
                                </label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user fa" aria-hidden="true" />
              </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="username"
                                            placeholder="Enter your Username"
                                            onChange={(e)=>{setUsername(e.target.value)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="cols-sm-2 control-label">
                                    Password
                                </label>
                                <div className="cols-sm-10">
                                    <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock fa-lg" aria-hidden="true" />
              </span>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="Enter your Password"
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group ">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block login-button"
                                    onClick={()=>Save()}
                                >Sign in
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export  default Login