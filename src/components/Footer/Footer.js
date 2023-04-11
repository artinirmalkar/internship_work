import React from 'react'
import './Footer.css'
import  image from  '../../static/images/logo.PNG'
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
    return (
        <div className="footer row mright">
            <div className="first textalign col-md-6">
                <img src={image} alt="logo" />
                <p>An integrated AI talent acquisition platform, helping screen <br />
                 applicant volumes and connect relevant talent.</p>
            </div>
            <div className="second textalign col-md-3 col-lg-2">
                <ul><li><a href="#">Employers</a></li>
                <li><a href="#">Candidates</a></li></ul>
            </div>
            <div className="third textalign col-md-3 col-lg-2">
                <ul>
                    <li><a href="#">Login/Register</a></li>
                    <li><a href="#">Supports</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="forth textalign col-md-3 col-lg-2">
                <ul>
                <h3>Contact</h3>
                    <li><a href="#">reach@zaajira.com</a></li>
                    </ul>
                    <ul className='icon'>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
