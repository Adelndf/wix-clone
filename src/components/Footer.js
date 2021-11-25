import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper-all">
        <div className="footer__main">
          This website was designed with <span>Wix.</span>
        </div>
        <div className="footer__bot">
          <div className="footer__botLeft">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="footer__botRight">
            <p>Build with passion and {`<3`} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
