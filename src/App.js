import ReactSlick from './components/ReactSlick'
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="img-input">
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701065459/designEslogo_vsuour.svg" alt=""/>
          <div className='icons-container'>
            <div className='ip-container'> 
            <input type="search" placeholder='Search here...' className='ips'/>
            <FaSearch/>
            </div>
            <FaUser/>
            <Popup
     trigger={
       <button type="button" className="trigger-button">
         <MdOutlineArrowDropDown/>
       </button>
     }
     position="bottom left"
   >
     <p className='log-sign'>Login</p>
     <p className='log-sign'>Sign Up</p>
   </Popup>
            
            <FaHeart/>
            <BsCartFill/>
          </div>
        </div>
        <hr className="hr"/>
        <div className="items">
            <p>All Jewellery</p>
            <p>Gold</p>
            <p>Silver</p>
            <p>Diamond</p>
            <p>Precious Stone</p>
            <p>Collections</p>
            <p>Gifts</p>
            <div className='gold-rate'>
            <p>Gold Rate</p>
            <Popup
     trigger={
       <button type="button" className="trigger-button2">
         <MdOutlineArrowDropDown/>
       </button>
     }
     position="bottom left"
   >
     <p className='p-g'>GOLD RATE 24KT(999): 5860/G</p>
     <p className='p-g'>GOLD RATE 24KT(999): 5860/G</p>
     <p className='p-g'>GOLD RATE 24KT(999): 5860/G</p>
     <p className='p-g'>GOLD RATE 24KT(999): 5860/G</p>
   </Popup>
   </div>
            <p>Contact Us</p>
        </div>
      </div>
      <div className="body-container">
          <h1 className="heading">Explore a trendy collection of
          jewellery carefully designed to 
          suit your style and taste.</h1>
          <button type="button" className="button">Shop now</button>
      </div>
      <div className="first-footer">
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701067185/assurance_orskcr.svg" alt=""/>
          <p className='f-p'>6 MONTHS ASSURANCE</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078974/exchange_giqx9j.png" alt=""/>
          <p className='f-p'>EASY EXCHANGE</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701079010/return_fillyo.png" alt=""/>
          <p className='f-p'>15 DAYS RETURN POLICY</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701079023/transparency_al2prh.png" alt=""/>
          <p className='f-p'>COMPLETE TRANSPARENCY</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078985/icon-one_iiijk6.png" alt=""/>
          <p className='f-p'>HUID COMPLIANT GOLD</p>
        </div>
        <div>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078995/icon-two_jzn8it.png" alt=""/>
          <p className='f-p'>CUSTOMISED JEWELLERY</p>
        </div>
      </div>
      <div className="categories">
        <h1>categories</h1>
        <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701067759/bottom-icon_didzsd.svg" alt="" className="below-head-logo"/>
        <div className="cat">
          <div>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701067485/neckless_jachx2.png" alt=""/>
            <p>Necklaces</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078334/ear-rings_jngf1q.png" alt=""/>
            <p>Ear rings</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078364/ring_c2oh9o.png" alt=""/>
            <p>Rings</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078325/bangles_e3jyl0.png" alt=""/>
            <p>Bangles</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701078352/pendants_fosidk.png" alt=""/>
            <p>Pendents</p>
          </div>
        </div>
        <div className="featured-products"> 
            <h1>FEATURED PRODUCTS</h1>
            <p>Dazzling collection to make you shine the way you are meant to</p>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701067759/bottom-icon_didzsd.svg" alt=""/>
        </div>
      </div>
      <ReactSlick/>
      <div className='shop-by-collection'>
        <h1>SHOP BY COLLECTION</h1>
        <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701067759/bottom-icon_didzsd.svg" alt="" className="below-head-logo"/>
        <div className='img-cont'>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701070403/new-collection_zu41fg.png" alt="" className='new-collection'/>
          <div className='ita-exq'>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701070378/italian-design_je9xge.png" alt="" className='ita-ex'/>
          <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701070353/exquisite_pbkn2a.png" alt="" className='ita-ex'/>
          </div>
        </div>
      </div>
      <div className='exquisite-collection'>
        <div className='h'>
          <h1>Exquisite Collection</h1>
          <p>Dazzling collection to make you shine the way you are meant to</p>
          <button className='btn-exq'>Shop Now</button>
        </div>
      </div>
      <div className='social-media'>
        <h1>SOCIAL MEDIA</h1>
        <div className='cards-container'>
        <div className='card-container'>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701072116/social_nnsrtg.png" alt=""/>
            <h1 className='heading-social'>Antique big stud with jhumka</h1>
            <p className='paragraph-social'>It is the mid off the "Fiesta" of Antique studs, do come and enjoy the best.</p>
        </div>
        <div className='card-container'>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701072116/social_nnsrtg.png" alt=""/>
            <h1 className='heading-social'>Antique big stud with jhumka</h1>
            <p className='paragraph-social'>It is the mid off the "Fiesta" of Antique studs, do come and enjoy the best.</p>
        </div>
        <div className='card-container'>
            <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701072116/social_nnsrtg.png" alt=""/>
            <h1 className='heading-social'>Antique big stud with jhumka</h1>
            <p className='paragraph-social'>It is the mid off the "Fiesta" of Antique studs, do come and enjoy the best.</p>
        </div>
        </div>
      </div>
      <div className='customized-jewellary'>
        <div className='customized-card'>
        <h1>Customised Jewellery &
        Personalised Jewellery</h1>
        <button className='btn-exq'>Explore</button>
        </div>
      </div>
      <div className='connect-with-us'>
        <h1>CONNECT WITH US</h1>
        <p>We are always available to guide you at your convenience</p>
        <div className='connect-with-us-card-container'>
        <div className='connect-with-us-card'>
              <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701074320/tour_dldzyg.png" alt=""/>
              <p>Take a</p>
              <p>Virtual Tour</p>
              <button className='get-started'>Get Started</button>
        </div>
        <div className='connect-with-us-card2'>
              <IoCall className='vid'/>
              <h1>080 41527999</h1>
              <p>Any Questions? Call us on our Toll free no.</p>
        </div>
        <div className='connect-with-us-card'>
              <FaLocationDot className='vid'/>
              <p>Need Help getting a Loan?</p>
              <p>Gold
Scheme</p>
              <button className='get-started'>Get Started</button>
        </div>
        <div className='connect-with-us-card'>
              <IoVideocam className='vid'/>
              <p>Schedule a</p>
              <p>Video Call</p>
              <button className='get-started'>Get Started</button>
        </div>
        <div className='connect-with-us-card'>
              <BsCalendar2Date className='vid'/>
              <p>Book an</p>
              <p>Appointment</p>
              <button className='get-started'>Get Started</button>
        </div>
        </div>
      </div>
      <div className='footer-sections'>
        <div className='foot-card'>
        <img src='https://res.cloudinary.com/dqjixulez/image/upload/v1701076378/kandalaa-logo-footer_qauq8a.png' alt=''/>
        <div className='company'>
          <p className='p-h'>Company</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Collections</p>
            <p>Gallery</p>
        </div>
        <div className='account'>
          <p className='p-h'>Account</p>
          <p>Login</p>
          <p>Create an account</p>
        </div>
        <div className='account'>
          <p className='p-h'>QUICK LINKS</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className='contact-us'>
          <p className='p-h'>Contact Us</p>
          <p># 743, 4th Block, 10th Main Rd,
4th Block, Jayanagar, 33rd Cross Rd, Bengaluru,
Karnataka 560011
info@kandalajewellers.com
(+91) 80 4152 7999</p>
        </div>
        </div>
        <hr/>
        <p>Copyright Kandalaa House of Jewellery 2023 | All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
