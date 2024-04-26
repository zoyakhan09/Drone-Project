import "./Hero.css";
import mainImage from "../Images/MAINDRONE.jpg";
const Hero = () => {
  return (
    <>
      <div className="main-hero">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators"></div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={mainImage} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className="hero-text">
                  <h4>Elevating Tomorrows</h4>
                  <h1 className="technology-texth1">TECHNOLOGY</h1>
                  <h5>Today</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Card-heading">
          <h1 className="card-heading">Services We Offer</h1>
          <a className="view-all-services">View All Services</a>
        </div>
        <div className="Card-con">
          <div className="Card-bdy">
            <h4 className="card-title">Drones for Every</h4>
            <h4 className="card-span"> Purpose</h4>
            <h5 className="card-subtitle"></h5>
            <ul>
              <li>Aerial Photography Drones</li>
              <li>Videography Drones</li>
              <li>Racing and FPV Drones</li>
              <li>Professional Surveying Drones</li>
              <li>Mapping Drones</li>
              <li>
                Agricuture Crop Monitoring <br />
                Drones
              </li>
              <li>Recreational and Hobbyyist Drones</li>
            </ul>
          </div>
          <div className="Card-bdy">
            <h4 className="card-title">Robots for Efficiency </h4>
            <h4 className="card-span"> and innovation</h4>
            <ul>
              <li>Industrial Autimation Robots</li>
              <li>Educational and STEM Robotics</li>
              <li>Service and Healthcare Robots</li>
              <li>Custom Ronotic Solutions</li>
              <li>
                Research and Development <br /> Robotics
              </li>
            </ul>
          </div>
          <div className="Card-bdy">
            <h4 className="card-title">Drones for Every</h4>
            <h4 className="card-span"> Purpose</h4>
            <ul>
              <li>
                Motors, Propellers,and <br />
                Batteries
              </li>
              <li>Sensors and Controllers</li>
              <li>Chassis and Frames</li>
              <li>Cameras and Gimbals</li>
              <li>
                Software and Programming <br />
                Tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
