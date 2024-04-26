import "./Product.css";
import surveillance from "../Images/SurvalenceDrone.png";
import QuadDrone from "../Images/QuadDrone.png";
import MiniDrone from "../Images/MiniDrone.png";
const Product = () => {
  return (
    <>
      <div className="main-product">
        <div className="product-nav">
          <ul>
            <li>
              {" "}
              <i className="bi bi-people-fill"></i>
              <h4>
                150+ <br />{" "}
              </h4>
              <p>happy customer</p>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <i className="bi bi-chat-right-text"></i>
              <h4>
                200+ <br />{" "}
              </h4>
              <p>Satisfactory Reviews</p>
            </li>
          </ul>
          <ul>
            <li>
              {" "}
              <i className="bi bi-suitcase-lg-fill"></i>
              <h4>
                15+ <br />{" "}
              </h4>
              <p>Product</p>
            </li>
          </ul>
          <ul>
            <li>
              <i className="bi bi-megaphone-fill"></i>
              <h4>
                1000+ <br />{" "}
              </h4>
              <p>Product Fanbase</p>
            </li>
          </ul>
        </div>

        <h1 className="producth1">Some Of Our Products</h1>
        <div className="prouct-image">
          <h2>
            <img className="leftimage" src={surveillance} />
            SURVEILLANCE DRONE{" "}
          </h2>
          <h2>
            QUADCOPTER <img className="quadDrone" src={QuadDrone} />
          </h2>
          <h2>
            <img className="miniDrone" src={MiniDrone} />
            MINIDRONE
          </h2>
        </div>
        <div className="dronecard-main">
        <div className="dronecard"> 
            <img className="diif-image" src="https://5.imimg.com/data5/ANDROID/Default/2022/9/RO/YF/BG/154201792/product-jpeg.jpg"/>
            <h3 className="dronetext">Agriculture and <br/> Mapping Drone</h3>
            </div>
        <div className="dronecard"> 
            <img className="diif-image" src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D"/>
            <h1 className="dronetext">Agriculture and <br/> Mapping Drone</h1>
            </div>
        <div className="dronecard"> 
            <img className="diif-image" src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww"/>
            <h1 className="dronetext">VideoGraphy <br/> Drone</h1>
            </div>
        </div>
        <a className="viewallproduct" href="/">View All Products</a>
      </div>
    </>
  );
};

export default Product;