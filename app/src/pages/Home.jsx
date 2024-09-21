import React from 'react'
import '../index.css'

export default function Home() {
  return (
    <div>
      <div id="page-wrapper">


    <section id="header" class="wrapper">
    <div class = "navbar">
    <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">News</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
</div>


            <div id="logo">
                <h1><a href="index.html">First Generation Investors</a></h1>
                <p>Join our course now!</p>
            </div>


            <nav id="nav">
                <ul>
                    <li class="current"><a href="index.html">Home</a></li>
                    <li><a href="#">Modules</a></li>
                </ul>
            </nav>

    </section>


    <section id="intro" class="wrapper style1">
        <div class="title">The Introduction</div>
        <div class="container">
            <p class="style1">What are we about</p>
        </div>
    </section>


    <section id="main" class="wrapper style2">
        <div class="title">Our Donors</div>
        <div class="container">


                <a href="#" class="image featured">
                    <img src="images/pic01.jpg" alt="" />
                </a>


                <section id="features">
                    <header class="style1">
                        <h2>Donors</h2>
                        <p>These are our donors</p>
                    </header>
                    <div class="feature-list">
                        <div class="row">
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon fa-comment">.</h3>
                                    <p>..</p>
                                </section>
                            </div>
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon solid fa-sync">Dono 2</h3>
                                    <p>.</p>
                                </section>
                            </div>
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon fa-image">Dono3</h3>
                                    <p>.</p>
                                </section>
                            </div>
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon solid fa-cog">Dono4</h3>
                                    <p>.</p>
                                </section>
                            </div>
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon solid fa-wrench">Dono5</h3>
                                    <p>.</p>
                                </section>
                            </div>
                            <div class="col-6 col-12-medium">
                                <section>
                                    <h3 class="icon solid fa-check">Dono6</h3>
                                    <p>.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <ul class="actions special">
                        <li><a href="#" class="button style1 large">Get Started</a></li>
                        <li><a href="#" class="button style2 large">More Info</a></li>
                    </ul>
                </section>

        </div>
    </section>


</div>
    </div>
  )
}
