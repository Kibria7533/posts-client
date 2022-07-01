import React, {useEffect} from "react";
import axios from "axios";
import {useState} from "react";
import Moment from 'react-moment';
function Post(){

    const [allpost, setAllpost] = useState("")

    useEffect( ()=>{
        getpost()
    })
    const getpost=async()=>{
        await axios.get("http://localhost:5000/all-post")
            .then((data)=>{
            console.log(data)
                setAllpost(data.data.result)
            })
            .catch((err)=>{
                console.log(err)
            })
    }


    const calendarStrings = {
        lastDay : '[Yesterday at] LT',
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd [at] LT',
        nextWeek : 'dddd [at] LT',
        sameElse : 'L'
    };

    return(
            <>

                <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="index.html">
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
                {/* Page Header*/}
                <header
                    className="masthead"
                    style={{ backgroundImage: 'url("assets/img/post-bg.jpg")' }}
                >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="post-heading">
                                    <h1>Man must explore, and this is exploration at its greatest</h1>
                                    <h2 className="subheading">
                                        Problems look mighty small from 150 miles up
                                    </h2>
                                    <span className="meta">
              Posted by
              <a href="#!">Start Bootstrap</a>
              on August 24, 2022
            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Post Content*/}
                {allpost.length>0 && allpost.map((post,ind)=>{
                    return(
                        <article key={ind} className="mb-4">
                            <div className="container px-4 px-lg-5">
                                <div className="row gx-4 gx-lg-5 justify-content-center">
                                    <div className="col-md-10 col-lg-8 col-xl-7">
                                        <p>
                                            {post.text}
                                            <Moment calendar={calendarStrings} >{post.createdAt}</Moment>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}




                {/* Footer*/}
                <footer className="border-top">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-twitter fa-stack-1x fa-inverse" />
                </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-facebook-f fa-stack-1x fa-inverse" />
                </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#!">
                <span className="fa-stack fa-lg">
                  <i className="fas fa-circle fa-stack-2x" />
                  <i className="fab fa-github fa-stack-1x fa-inverse" />
                </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="small text-center text-muted fst-italic">
                                    Copyright © Your Website 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>

    )
}
export default Post