import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css';


const ReactSlick = () => {
    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: "60px",
    }
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Stones</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Ruby</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Emerald</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Gold</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Gold</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
          <div className="jummka-container"> 
            <div className="img-container">
                <img src="https://res.cloudinary.com/dqjixulez/image/upload/v1701068783/stones_hlxe4t.png" alt="" className="jumka"/>
            </div>
            <p>Gold</p>
            <h1 className="heading-slider">Rectangular studded jumkas gold</h1>
            <p>₹1250</p>
          </div>
        </Slider>
      </div>
    )
  }
  
  export default ReactSlick