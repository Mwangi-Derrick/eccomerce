import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";


function Footer() {
  const listItems = [
    {help:['Help Center','How to shop','Contact us','Return policy']},
    {about:['About Us','Returns And Refunds Policy','Jumia Express']},
    {makeMoney:['Sell On Jumia','Become a sales consultant','Become a logistics service patner']},
  ]
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="top">
        <div className="left"></div>
        <section className="profile">
          <a href="https://github.com/DerrickMwangi13" rel="noreferrer" target="_blank"><GitHubIcon className="icon github" /></a>
        <a href="https://www.linkedin.com/in/derrick-mwangi-bab062276/" rel="noreferrer" target="_blank"><LinkedInIcon className="icon linkedin" /></a>
          <a href="https:///www.instagram.com/k.usarigama_" rel="noreferrer" target="_blank"><InstagramIcon className="icon instagram" /></a>
          <a href="mailto:mwangiderrick334@gmail.com"><EmailIcon className="icon email"/></a>
        </section> 
      <div className="right"></div>
      </div>
      <div className="bottom">
        <div className="footer-links">
          <div className="need-help">
            <h4>NEED HELP?</h4>
            <ul>
              {
                (listItems[0].help).map((item,index) =>
                { return (<li key={index}><p>{item}</p></li>) })
              }  
            </ul>
          </div>
          <div className="about">
          <h4>ABOUT US</h4> 
            <ul>
            {
                (listItems[1].about).map((item,index) =>
                { return (<li key={index}><p>{item}</p></li>) })
              }  
            </ul>
          </div>
          <div className="make-money">
            <h4>MAKE MONEY WITH JUMIA</h4>
            <ul>
            {
              (listItems[2].makeMoney).map((item,index) =>
               { return (<li key={index}><p className="list">{item}</p></li>) })
              }  
            </ul>
          </div>
        </div>
        <section className="copyright">
          &copy;Copyright {year}, Developed by Derrick Mwangi.All rights reserved.
        </section>
      </div>
    </footer>
  );
}

export default Footer;
