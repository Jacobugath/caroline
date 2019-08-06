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

      <h1 id="first">Caroline Morris</h1>
      <p id="voice">Voice Studio</p>

      <hr></hr>
      <ul>
        <nav>
        <li>GALLERY</li>
        <li>ABOUT ME</li>
        <li>CONTACT ME</li>
        <li>PRICES AND POLICIES</li>
        <li>CLASSES AND LESSONS</li>
        <li>SCHEDULE  </li>
        </nav>
      </ul>
      <div id="call">CALL (801) 824 - 5060 FOR A FREE CONSOLTATION</div>

      <div id="firstp">Caroline Morris Music Studio offers private and group voice lessons as well as a variety of music classes.
      <hr/>
      <div id="flexcontain">
      <div id="image">
      <br/>
      <img id='sing' src={c} alt="woman singing"/>
      </div>
      <div id="Mission">
      <p id="one">
      <br/>
      <span>My Mission:</span><br/>
      To teach anyone who wants to learn to sing or sing better. Everyone has a voice talent in my studio. </p>
      <p id="two"> I will help you accustom your mind and body to singing and performing through technique and visualization. </p>
      <p id="three">You will discover new parts of yourself and have fun in the process. Improvement comes from the ability to laugh at yourself.

</p>
</div>
      </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
