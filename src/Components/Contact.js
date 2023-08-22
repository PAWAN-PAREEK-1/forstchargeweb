import React from 'react'
import "../Style/Contact.css";
import location from "../Assets/img/location.svg";
import call from "../Assets/img/call.svg";
import email from "../Assets/img/email.svg";

const Contact = () => {
  return (
    <div>
        <div className="Contact">
            <div className="contact-left">
                        <h1>Contact Us For Assistance</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mauris placerat, volutpat arcu vel, imperdiet turpis. Etiam volutpat luctus nunc, id commodo justo.</p>
                        <hr />
                        <div className="call">
                        <h3><img src={location} alt="" />
                        502,Liberty Chambers Opp.Rishikesh Triveni Appartment,Timaliwad,Nanpura,Surat,Gujarat 395001</h3>
                        <h3><img src={call} alt="" />
                        +91 830-606-3022</h3>
                        <h3><img src={email} alt="" />
                        Info@firstCharge.co.in</h3>
                        </div>

            </div>
            <div className="contact-right">
                <div className="contact-right-box">
                            <h3>Get In Touch</h3>
                            <div className="inputs">
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="text" placeholder='Enter Your Mail' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message hear'></textarea>
                </div></div>


            </div>

        </div>
    </div>
  )
}

export default Contact