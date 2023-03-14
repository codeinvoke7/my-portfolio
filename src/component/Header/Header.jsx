import { PortfolioImage } from "../../asset";
import CallToAction from "../UI/CallToAction";
import classes from "./Header.module.css";
import HeaderFooter from "./HeaderFooter";

const Header = (props) => {
  return (
    <div className="container">
      <HeaderFooter />
      <div className="d-flex  justify-content-around flex-column flex-md-row flex-lg-row">
        <div className=" text-white p-4">
          <h1>Nice to meet you!</h1>
          <h1>
            I'm{" "}
            <span className={`${classes.nameUnderline}`}>Elijah Ndibe.</span>
          </h1>
          {/* <div className="pt-4" style={{textAlign: "justify"}}>
            <p>
              A web developer who is passionate about crafting pixel-perfect
              websites that are not only aesthetically pleasing but also highly
              functional. With experiences under my belt, I
              pride myself on my ability to turn complex ideas into beautiful
              and intuitive web experiences. Let's work together to bring your
              vision to life!
            </p>
          </div> */}
          <CallToAction link="https://wa.me/+2348141289176">
        CONTACT ME
      </CallToAction>
        </div>
        <div className={`${classes.display_img} p-4`}>
          <img src={PortfolioImage} alt="Display" width="300px" />
        </div>
      </div>
      <hr className="border border-light border-0.1 opacity-90 mt-5"></hr>
    </div>
  );
};

export default Header;
