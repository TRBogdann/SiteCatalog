
import React from "react";
import "./Contact.css";
import telPhoto from "../media/telefon.png";
import addPhoto from "../media/email.png";
import cosPhoto from "../media/cos.png";
import locPhoto from "../media/locatie.png"
function Contact()
{
    return(
        <div className="contact">
        <div className="dateDeContact">

        <div className="pair">
        <img alt="img" src={cosPhoto}></img>
        <p>Gard beton | Spalieri vie | Spalieri gard | Tuburi beton | Boltari | Coame temelie</p>
        </div>

        <div className="pair">
        <img alt="img" src={telPhoto}></img>
        <p>Telefon: +40 722-226-424</p>
        </div>

        <div className="pair">
        <img alt="img" src={addPhoto}></img>
        <p>Email: pitigoi81@yahoo.com</p>
        </div>

        <div className="pair">
        <img alt="img" src={locPhoto}></img>
        <p>Locatie:</p>
        </div>

        <div className="containMap">
        <iframe className="maps" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.9197941570283!2d24.23237517516557!3d44.924966569256995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d19ee8d5b8e37%3A0xf902e25574f4579c!2sSC%20PITIGOI%20SRL!5e0!3m2!1sro!2sro!4v1695998326435!5m2!1sro!2sro" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no<li>referrer<li>when<li>downgrade"></iframe>
        </div>
        <div className="logoPhoto">
        </div>

        </div>
        </div>
    )
}

export default Contact;