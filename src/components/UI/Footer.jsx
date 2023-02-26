import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {

    const year=new Date().getFullYear
  return (<footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_box">
                <div className="logo">
                    <div className="logo_img">
                        <img src={logo} alt=""/>
                    </div>
                    <h2>FitBody</h2>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Placeat ut mollitia eum ipsum iure velit doloribus unde minus.
                    Dolore ipsa id minus sunt ipsum suscipit dolorem.</p>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#"onClick={true} >Our Program</a></li>
                    <li><a href="#"onClick={true}>Our Plan</a></li>
                    <li><a href="#"onClick={true}>Become a Member</a></li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Quick Links</h4>

                <ul className="footer_links">
                    <li><a href="#"onClick={true}>About Us</a></li>
                    <li><a href="#"onClick={true}>Contact Us</a></li>
                    <li><a href="#"onClick={true}>Support</a></li>
                </ul>
            </div>

            <div className="footer_box">
                <h4 className="footer_title">Company</h4>

                <ul className="footer_links">
                    <li><a href="#"onClick={true}>Our Program</a></li>
                    <li><a href="#"onClick={true}>Our Plan</a></li>
                    <li><a href="#"onClick={true}>Become a Member</a></li>
                </ul>
            </div>
        </div>
        <p className="copyrights">CopyRights -{year} Developed by Prashath. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer