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
      <br/>
        <div className="p1">Please read this page regarding studio policies.
If you ever have any questions, please feel free to contact me.
I hope you are looking forward to a productive and fun-filled semester!</div>
    <br/>
    <hr></hr>
    <br/>
    <div className="flexcontain">
        <div className="wrapper">
        <h1 className="head">Pricing</h1>
        </div>
        <div className='head2'>Private lessons are $80 a month for a weekly 30 minute lesson. Group classes are $40 a month or $150 for the term, plus $10 per sibling.  </div>
    </div>
    <br/>
    <hr></hr>
    <br/>
    <div className="flexcontain">
        <h1 className="head">Attendance</h1>
        <div className="head2">Please arrive to lessons on time.  If you will be late please text me with your ETA.  You will receive a reminder email 48 hours prior to each appointment.  In which case you will have 24 hours to reschedule the lesson if needed.  If lessons need to be rescheduled after the 24 hour window, there will be a $25 rescheduling charge or you can forfeit the lesson that week.</div>
    </div>
    <br/>
    <hr/>
    <br/>
    <div className="flexcontain">
        <h1 className="head">Practice</h1>
        <div className="head2">Beginning students should practice 20-30 minutes 5/x a week. Intermediate to Advanced students should practice 30-45 minutes 5-7/x a week.
<br/><br/>
Students will combine warm-ups, technique, breathing, singing songs AND performing in your practice sessions. Listening and watching performances on Youtube are also considered practicing. Please use the Weekly Practice Journal on the website to track practice time!</div>
    </div>
    <br/>
    <hr></hr>





    </div>
  </Layout>
)

export default IndexPage
