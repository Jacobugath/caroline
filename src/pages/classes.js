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
      <h1 className='head'>Classes Offered:</h1>
      Mommy and Me<br/>
      Music Movement and Creativity<br/>
      Intro to Music<br/>
      Music Dance Theater<br/><br/>

      <h1 className='head'>Class Details:</h1>
      All classes will begin in the first week of September. Classes are $40 a month, plus $10 per sibling or $150 for the term, plus $40 per sibling.<br/><br/>

      Mommy and Me, a 45 minute class, is offered Tuesday, Wednesday, or Thursday at 9:15am. Music Movement and Creativity, a 60 minute class, is offered Tuesday, Wednesday, or 10:00am. Music Dance Theater, a 60 minute class is offered Wednesday at 5:15pm. Intro to music is 60 minute class offered Wednesday at 4:00pm<br/><br/>

      Call or email to register. Accepted payments are Paypal, Venmo, cash or check.<br/><br/>
    <h1 className='head'>Class Descriptions:</h1>
      <u>Mommy and Me</u>- is a chance for parents and children from birth to age 6 play and sing together. <br/><br/>

      <u>Music, Movements, and Creativity</u>- is a children only class where we will explore different forms of dance and art and crafts.<br/><br/>

      <u>Music Dance Theater</u>- is for ages eight up. Participants will become greater singer, actors, and dancers.<br/><br/>

      <u>Intro to Music</u>- is for all ages who want want a gentle and fun entrance into the world of music.






    </div>

  </Layout>
)

export default IndexPage
