import React from "react";
import axios from 'axios';
import { useState } from 'react';

function Signup(){
    const [user_name, setUsername]=useState(" ");
    const [email, setEmail]=useState(" ");
    const [first_name, setFirst_name]=useState(" ");
    const [last_name, setLast_name]=useState(" ");
    const [password, setPassword]=useState(" ");
    const [created_at, setCreated_at]=useState(" ");
    const [country_code, setCountry_code]=useState(" ");

    const Save=async (e)=>{
        console.log("hello");
        await axios.post("http://localhost:5000/signup",{
            user_name,
            email,
            first_name,
            last_name,
            password,
            created_at,
            country_code
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
            <div className="container">
                <div className="row">
                    <form className="form-horizontal">
                        <fieldset>
                            {/* Form Name */}
                            <legend>Create Account</legend>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="full_name">
                                  User Name
                                </label>
                                <div className="controls">
                                    <input
                                        id=" User name"
                                        name=" User name"
                                        placeholder=" User name"
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setUsername(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>


                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="email">
                                    Email
                                </label>
                                <div className="controls">
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email."
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="father_name">
                                   First Name
                                </label>
                                <div className="controls">
                                    <input
                                        id="first_name"
                                        name="first_name"
                                        placeholder="Enter Your First Name"
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setFirst_name(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>
                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="mother_name">
                                    Last Name
                                </label>
                                <div className="controls">
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Enter your Last Name"
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setLast_name(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>

                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="mother_name">
                                    Password
                                </label>
                                <div className="controls">
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Enter your Password"
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setPassword(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>

                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="mother_name">
                                    Cerate Date
                                </label>
                                <div className="controls">
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Enter your Last Name"
                                        className="input-xlarge"
                                        type="date"
                                        onChange={(e)=>{
                                            setCreated_at(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>

                            {/* Text input*/}
                            <div className="control-group">
                                <label className="control-label" htmlFor="mobile">
                                   Country Code
                                </label>
                                <div className="controls">
                                    <input
                                        id="mobile"
                                        name="mobile"
                                        placeholder="Enter Your Country Code"
                                        className="input-xlarge"
                                        type="text"
                                        onChange={(e)=>{
                                            setCountry_code(e.target.value);
                                        }}
                                    />
                                    <p className="help-block">Error</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="control-group">
                                <label className="control-label" htmlFor="submit" />
                                <div className="controls">
                                    <button id="submit" name="submit"  onClick={()=>Save()}   className="btn btn-primary">
                                        Submit
                                    </button>



                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

        </>
    )
}


export  default Signup;