import React from 'react'
import '../index.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';


export default function Home() {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleLoginClick = () => {
    navigate('/login');  // Navigate to the /login route
  };
  return (
    <div>

      <div id="page-wrapper">
        <img src={Logo}></img>
        <header id="header" class="alt">
          <h1 id="logo"><a href="index.html">First Generation Investors </a></h1>
          <nav id="nav">
            <ul>
              <li class="current"><a href="http://127.0.0.1:5173/">Home</a></li>
              <li class="submenu">
                <ul>
                  <li><a href="left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="right-sidebar.html">Right Sidebar</a></li>
                  <li><a href="no-sidebar.html">No Sidebar</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li class="submenu">
                    <a href="#">Submenu</a>
                    <ul>
                      <li><a href="#">Dolore Sed</a></li>
                      <li><a href="#">Consequat</a></li>
                      <li><a href="#">Lorem Magna</a></li>
                      <li><a href="#">Sed Magna</a></li>
                      <li><a href="#">Ipsum Nisl</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Button class="button primary" onClick={handleLoginClick}>Login</Button>
              </li>
            </ul>
          </nav>
        </header>

        <section id="banner">

          <div class="inner">

            <header>
              <h2>First Generation Investors</h2>
            </header>
            <p>First Generation Investors (FGI) teaches high school students the power of investing and brings
              classroom lessons to life by providing students with real money to invest.</p>
            <footer>
              <ul class="buttons stacked">
                <li><a href="#main" class="button fit scrolly">Tell Me More</a></li>
              </ul>
            </footer>


          </div>

        </section>

        <article id="main">


          <header class="special container">
            <span class="icon solid fa-chart-bar"></span>
            <h2>Who are we?</h2>
            <p>FGI believes that financial education is key to unlocking a brighter future. Many high school students
              may not have access to the resources they need to learn about investing and FGI is doing the work to
              bridge the gap.</p>
          </header>


          <header class="container why">
            <span class="icon solid fa-chart-bar"></span>
            <h2>Why are you here?</h2>
            <p>With this application, we aim to collect and analyze student and tutor data to display impact for donors and investors, thereby increasing funding for FGI.</p>
            <footer>
              <ul class="buttons">
                <li><a href="https://www.firstgenerationinvestors.com/" class="button">Find Out More</a></li>
              </ul>
            </footer>
          </header>
          {/* <section class="wrapper style2 container special-alt">
            <div class="row gtr-50">
              <div class="col-8 col-12-narrower">


                <header>
                  <h2>Why are you here?</h2>
                </header>
                <p>With this application, we aim to collect and analyze student and tutor data to display impact for donors and investors, thereby increasing funding for FGI.</p>
                <footer>
                  <ul class="buttons">
                    <li><a href="https://www.firstgenerationinvestors.com/" class="button">Find Out More</a></li>
                  </ul>
                </footer>


              </div>
              <div class="col-4 col-12-narrower imp-narrower">


                <ul class="featured-icons">
                  <li><span class="icon fa-clock"><span class="label">Feature 1</span></span></li>
                  <li><span class="icon solid fa-volume-up"><span class="label">Feature 2</span></span></li>
                  <li><span class="icon solid fa-laptop"><span class="label">Feature 3</span></span></li>
                  <li><span class="icon solid fa-inbox"><span class="label">Feature 4</span></span></li>
                  <li><span class="icon solid fa-lock"><span class="label">Feature 5</span></span></li>
                  <li><span class="icon solid fa-cog"><span class="label">Feature 6</span></span></li>
                </ul>


              </div>
            </div>
          </section> */}



          <section class="table">
            <div class="row">
              <div class="col-4 col-12-narrower">


                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>Student Portal</h3>
                  </header>
                  <p>Access to all modules and progress with each module. Complete all 8 modules with the capstone to recieve $100. Complete an attendance form and end of class survey to show your progress throughout the course. Your feedback matters!</p>
                </section>


              </div>
              <div class="col-4 col-12-narrower">


                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>Tutor Portal</h3>
                  </header>
                  <p>Have an attendance form to verify students are showing up, as well as start class and show students class is in session.</p>
                </section>


              </div>
              <div class="col-4 col-12-narrower">


                <section>
                  <span class="icon solid featured fa-check"></span>
                  <header>
                    <h3>Admin Portal</h3>
                    <p>The admin portal has access to confidence levels of students before and after modules. This shows the impacts of our course, and why our course prepares high schoolers all around the country for key financial concepts!</p>
                  </header>
                  <p></p>
                </section>


              </div>
            </div>
          </section>



          <section class="wrapper style3 container special">


            <header class="major">
              <h2><strong>Enroll. Teach Invest.</strong></h2>
            </header>


            <div class="row">
              <div class="col-6 col-12-narrower">





              </div>
              <div class="col-6 col-12-narrower">





              </div>
            </div>
            <div class="row">
              <div class="col-6 col-12-narrower">




              </div>
              <div class="col-6 col-12-narrower">




              </div>
            </div>





          </section>


        </article>




        <section id="cta">


          <header>
            <h2>Ready to learn <strong>something</strong>?</h2>
            <p>Fill out our enrollment verification form and get started today! Like our mission, please do donate!</p>
          </header>
          <footer>
            <ul class="buttons">
              <li><a href="#" class="button primary">Enrollment Verification Form</a></li>
              <li><a href="https://www.firstgenerationinvestors.com/donate.html" class="button">Donate</a></li>
            </ul>
          </footer>


        </section>






      </div>
    </div>
  )
}



