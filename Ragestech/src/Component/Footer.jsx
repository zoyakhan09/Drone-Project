import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                    <h3>RAGES<span>TECH</span></h3>
                    <p> Unlock the future with RagesTech -Your Ultimate </p>
                    <p>Destination for Drones,Robots and More!</p>
                    <div className="footer-icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Site menu</h5>
                    <ul>
                        <li className="nav-item">
                            <a className="" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="" href="/">Product</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                    <h5>Contact us </h5>
                    
                    <p><i className="fa-solid fa-envelope"></i> ragestech360@gmail.com</p>
                    <p><i className="fa-solid fa-paper-plane"></i>Bhopal Madhya pradesh</p>
                </div>
            </div>
        </div>
    </div>
   
      <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <Link className="text-reset fw-bold">RagesTech</Link>
        </div>
</>
  )
}

export default Footer