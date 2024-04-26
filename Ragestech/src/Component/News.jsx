import "./News.css";
import Delhi from "../Images/Delhi.png";
import iit from "../Images/TechIIT.png";
import vits from "../Images/vits.png";
const News = () => {
  return (
    
    <div className="main-news">
      <div className="ourAssociate">
        <h1 className="heading1">Our Associates</h1>
        <div className="para">
          <p>
            At RagesTech, we belive in the power of collaboration and strategic
          </p>
          <p>
            partnerships to driveinnovation and deliver exceptinal value to our
          </p>
          <p>
            customers. Our network of trusted partner includes industry leaders,
          </p>
          <p>
            technology innovators, and organizations that share our commitment
          </p>
          <p>to pushing the boundaries of what technology can achieve</p>
        </div>
      </div>
      <div className="logos">
        <img className="logoimg" src={iit} />
        <img className="logoimg" src={Delhi} />
        <img className="logoimg" src={vits} />
      </div>
    </div>
  );
};

export default News;