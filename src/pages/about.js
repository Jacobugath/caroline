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
          <img src={c} style={{width: '200px',height: '250px', marginLeft: 50}}alt="Caroline Morris"/>
          <div className='about' >
          <br></br>
          Caroline started taking voice lessons at age 15, and has studied vocal performance in college. She started at the University of Utah, but will finish her Bachelor’s degree in music from Brigham Young University. Caroline loves to perform as a soloist, in choir, and in theater and opera. She started in musicals in seventh grade, where she met her husband, Jacob, and has gone on to play roles in the Sound of Music, The Mystery of Edwin Drood, Annie Get Your Gun, The Mikado, and Phantom of the Opera.
          <br/><br/>
          <div >Caroline became involved with ACT years ago when she first played the role of Dolly Tate in Annie Get Your Gun. She then music directed Fiddler on the Roof, the premier show at the Valentine theater with ACT, as well as music directed a Christmas Carol, the Musical in 2018. Most recently, she was seen as the narrator in ACT‘s production of Joseph and the Amazing Technicolor Dreamcoat. You can see Caroline perform as the night club singer Jackie in the disco musical DISASTER at the Empress Theater this October.
      <br/>
      <br/>
      Caroline is also a caring and passionate voice teacher. Caroline has been teaching privately for several years, loves her students, and loves teaching people to sing well, audition confidently, and discover an appreciation for music and performing.
      </div>



          </div>
      </div>

      <br/>


    </div>

  </Layout>
)

export default IndexPage
