import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img className="w-40 h-16" src="https://img.freepik.com/premium-vector/colorful-lines-car-toys-logo-symbol-vector-icon-illustration-design_15473-2384.jpg?w=740&fbclid=IwAR0z3mng3FbnwEXZTs09rV5If2COgFIPtzppydXW-23h6Qq-OEoBYjmDNms" alt="" />
   
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <a className="link link-hover"><FaFacebook/></a> 
    <a className="link link-hover"><FaInstagram/></a> 
    <a className="link link-hover"><FaSnapchat/></a>
  </div>
</footer>
  );
}

export default Footer;
