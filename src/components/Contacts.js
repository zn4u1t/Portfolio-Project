import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { handleSubmit} = useForm();
  
    const serviceID = "service_gMail";
    const templateID = "template_ID";
    const userID = "user_aF5svgRg0ktEFF9NBMz7Y";
  
    const onSubmit = (data, r) => {
      sendEmail(
        serviceID,
        templateID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          subject: data.subject,
          description: data.description
        },
        userID
      )
      r.target.reset();
    }
  
    const sendEmail = (serviceID, templateID, variables, userID) => {
      emailjs.send(serviceID, templateID, variables, userID)
        .then(() => {
          setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
        }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id='contacts' className='contacts'>
            <div className='text-center'>
                <h1>Contact Me</h1>
                <p>Please fill out the form and I will contact you as soon as possible.</p>
                <span className='success-message'>{successMessage}</span>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            {/* NAME INPUT */}
                            <div className='text-center'>
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                name='name'
                                />
                                <div className='line'></div>
                            </div>
                            {/* PHONE INPUT */}
                            <div className='text-center'>
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Phone Number'
                                name='phone'
                                />
                                <div className='line'></div>
                            </div>
                            {/*EMAIL INPUT */}
                            <div className='text-center'>
                                <input
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                name='email'
                                />
                                <div className='line'></div>
                            </div>
                            {/* SUBJECT INPUT */}
                            <div className='text-center'>
                            <input
                            type='text'
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                            />
                            <div className='line'></div>
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12'>
                            {/*DESCRIPTION */}
                            <div className='text-center'>
                                <textarea
                                type='text'
                                className='form-control'
                                placeholder='Description'
                                name='description'
                                ></textarea>   
                                <div className='line'></div>
                            </div>  
                            <button className='btn-main-offer contact-btn' type='submit'>Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
