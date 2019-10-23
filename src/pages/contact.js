import React from "react"
import { Link } from "gatsby"
import './index.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import c from '../images/caroline.jpg'
import sing from '../images/photo-1503593827931-ae71bae09809.jpeg'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="main">

    <p id="first"><Link to='/' style={{color:'#1F1159'}}>Glimmer of Light</Link></p>
      <p id="voice">Music Studio</p>

      <hr></hr>
      <ul>
      <nav>
        <li><Link to='/about'>ABOUT ME</Link></li>
        <li><Link to='/gallery'>GALLERY</Link></li>
        <li><Link to='/prices'>PRICES AND POLICIES</Link></li>
        <li><Link to='/classes'>CLASSES AND SCHEDULE</Link></li>
        <li><Link to='/contact'>CONTACT ME</Link></li>
        </nav>
      </ul>
      <div className="flexcontain">

      <div id="formdiv">
  <form action="https://formspree.io/Glimmeroflightstudios@gmail.com" method="POST">
    <h1 className="head">Name:</h1> <input type="text" name="name" />
      <h1 className="head">Email:</h1>
    <input type="text" name="_replyto" />
      <h1 className="head">Message:</h1>

    <textarea id="mes" name="message" defaultValue={""} />

    <input type="submit" id="send" defaultValue="Send" />
  </form>
</div>


        <div className="info"> <br/>glimmeroflightmusicstudios@gmail.com<br/>

      (801) 824-5060<br/>

      <a href='https://www.facebook.com/caroline.j.morris.3'>Find me on Facebook</a>


      </div>
        </div>

    </div>
  </Layout>
)

export default IndexPage
