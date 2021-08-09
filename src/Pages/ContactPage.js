import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902698.9669478986!2d85.14664000204164!3d27.89682231700696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ead9a88632a967%3A0x14f1fd59667d955d!2z4KSs4KSf4KWN4KSf4KS-4KSwLCDgpKzgpL_gpKbgpYHgpLAgNDQ5MDA!5e0!3m2!1sne!2snp!4v1618557204951!5m2!1sne!2snp" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    {/*  */}
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+977 9823045757'} text2={''} title={'Phone'}/>
                    <ContactItem icon={email} text1={'ambadcr7@gmail.com'} text2={''} title={'Email'}/>
                    <ContactItem icon={location} text1={'Bidur 4, Battar, Nuwakot'} text2={'Bagmati, Nepal'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
