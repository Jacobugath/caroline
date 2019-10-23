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
import studio from '../images/studio.jpg'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="main">

    <p id="first"><Link to='/'>Glimmer of Light</Link></p>

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
      <div id="call">CALL (801) 824 - 5060 FOR A FREE CONSULTATION</div>

      <div id="firstp">Glimmer of Light Music Studio offers private and group voice lessons, piano lessons and cello lessons as well as a variety of music classes.
      <hr/>
      <div id="flexcontain">
      <div id="image">
      <br/>
      <img id='sing' src={studio} alt="woman singing"/>
      </div>
      <div id="Mission">
      <p id="one">
      <br/>
      <h1 className="head">Our Mission:</h1>
      To teach anyone who wants to learn to sing or play better. Everyone has talent in our studio. </p>
      <p id="two"> We will help you accustom your mind and body to singing and performing through technique and visualization. </p>
      <p id="three">You will discover new parts of yourself and have fun in the process. Improvement comes from the ability to laugh at yourself.

</p>
</div>
      </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
