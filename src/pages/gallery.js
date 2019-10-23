import React from "react"
import { Link } from "gatsby"
import './index.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot ,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import c from '../images/caroline.jpg'
import sing from '../images/photo-1503593827931-ae71bae09809.jpeg'
import 'pure-react-carousel/dist/react-carousel.es.css';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpeg';
import c3 from '../images/c3.jpeg'
import c4 from '../images/1.jpg'
import c5 from '../images/2.jpg'
import c6 from '../images/3.jpg'
import c7 from '../images/4.jpg'
import c8 from '../images/5.jpg'
import c9 from '../images/6.jpg'
import c10 from '../images/7.jpg'
import c11 from '../images/8.jpg'
import c12 from '../images/9.jpg'
import c13 from '../images/10.jpg'
import c14 from '../images/11.jpg'
import c15 from '../images/12.jpg'
import c16 from '../images/13.jpg'
import c17 from '../images/14.jpg'

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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={17}
        isPlaying ={true}
      >
        <Slider style={{backgroundColor: '#FFD0C3', height: '60vh'}}>
          <Slide style={{backgroundColor: '#FFD0C3'}} index={0}> <img src={c1} alt='Caroline Morris' style={{objectFit:'contain'}}></img> </Slide>
          <Slide index={1}><img src={c9} alt="Caroline Morris" style={{ objectFit:'contain'}}/></Slide>
          <Slide index={2}><img src={c3} alt="Caroline Morris" style={{ objectFit:'contain'}}/></Slide>
          <Slide index={3}><img src={c4} style={{objectFit:'contain'}} alt="Caroline Morris" style={{ objectFit:'contain'}}/></Slide>
          <Slide style={{backgroundColor: '#FFD0C3'}} index={4}> <img src={c5} alt='Caroline Morris' style={{objectFit:'contain'}}></img> </Slide>
          <Slide index={5}><img style={{objectFit:'contain'}} src={c15} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={6}><img src={c7} alt="Caroline Morris" style={{objectFit:'contain'}}/></Slide>
          <Slide index={7}><img src={c8} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={8}><img src={c9} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={9}><img src={c10} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide style={{backgroundColor: '#FFD0C3'}} index={10}> <img src={c14} alt='Caroline Morris' style={{objectFit:'contain'}}></img> </Slide>
          <Slide index={11}><img src={c4} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={12}><img src={c13} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={13}><img src={c14} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={14}><img src={c15} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={15}><img src={c16} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>
          <Slide index={16}><img src={c17} alt="Caroline Morris" style={{width: '100%', objectFit:'contain'}}/></Slide>

        </Slider>
        <Dot slide={0}></Dot>
        <Dot slide={1}></Dot>
        <Dot slide={3}></Dot>
        <Dot slide={4}></Dot>
        <Dot slide={5}></Dot>
        <Dot slide={6}></Dot>
        <Dot slide={7}></Dot>
        <Dot slide={8}></Dot>
        <Dot slide={9}></Dot>
        <Dot slide={10}></Dot>
        <Dot slide={11}></Dot>
        <Dot slide={12}></Dot>
        <Dot slide={13}></Dot>
        <Dot slide={14}></Dot>
        <Dot slide={15}></Dot>
        <Dot slide={16}></Dot>
        <br/>
        <ButtonBack className='but'>Back</ButtonBack>{' '}
        <ButtonNext className='but'>Next</ButtonNext>

      </CarouselProvider>
      </div>
  </Layout>
)

export default IndexPage
