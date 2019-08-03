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
      <div id="call">CALL (801) 824 - 5060 FOR A FREE FIRST LESSON</div>
      <br/>
      <div id="firstp">CM VOICE STUDIO OFFERS PRIVATE VOICE LESSONS IN VARIOUS SINGING STYLES, ACTING COACHING AND AUDITION TRAINING FOR THE BUDDING PERFORMER TO THE PROFESSIONAL.
LESSONS ARE TAUGHT BY CAROLINE MORRIS.
      <hr/>
      <img id='sing' src={c} alt="woman singing"/>
</div>
      <p id="one">You have the innate ability to express yourself through music</p>
      <p id="two">You can pursue your personal and professional music goals through individual, uplifting musical enrichment.</p>
      <p id="three">Lessons and coaching's will be a time of discovery and play - a time to work hard while having fun for personal and professional growth.

</p>

    </div>
  </Layout>
)

export default IndexPage
