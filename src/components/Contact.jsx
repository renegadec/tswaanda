import React, { useRef, useState, useEffect  } from "react";
import emailjs from '@emailjs/browser';
import styles from "../style";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const [formValue, setFormValue] = useState({ userName: '', userEmail: '', userMessage: ''});
    const [formError, setFormError] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const form = useRef();

    const handleValidation = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }

    const sendMail = (e) => {
        e.preventDefault();

        setFormError(validationForm(formValue))
        setSubmit(true)

        emailjs.sendForm('service_fpijw18', 'template_zktzn2n', form.current, '_72folIpg0f-vHH9B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setFormValue({userName: '', userEmail: '', userMessage: ''})
    };

    const validationForm = (value) => {
        const errors = {};
        const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

        if(!value.userName) {
            errors.userName = "Please Enter Name";
            toast.error("Message not sent: Name Required")
        }

        if(!value.userEmail) {
            errors.userEmail = "Please Enter Email";
            toast.error("Message not sent: Email Required")
        }
        else if(!emailPattern.test(value.userEmail)){
            errors.userEmail = "Enter Valid Email";
            toast.error("Message not sent: invalid email")
        }
        if(!value.userMessage){
            errors.userMessage = "Please Enter Message";
            toast.error("Message not sent: Empty Message")
        }

        return errors;
    }

    useEffect( () => {
        if(Object.keys(formError).length === 0 && isSubmit)
        {
            toast.success("Message Sent. Thank you!")
        }
    }, [isSubmit]);

    return (
        <div>
            <section className="text-gray-700 body-font relative" id="contact">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className={`${styles.heading2} text-gradient`}>Contact Us</h1>
                    <p className={`${styles.paragraph}`}>
                    Get in touch with us if you have any questions
                    </p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form ref={form} onSubmit={sendMail} className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label htmlFor="userName" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="userName"
                                onChange = {handleValidation}
                                value = {formValue.userName}
                                className="w-full bg-white input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                            />
                            <span className="text-red-700">{ formError.userName }</span>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label
                                htmlFor="userEmail"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="userEmail"
                                onChange = {handleValidation}
                                value = {formValue.userEmail}
                                className="w-full bg-white  input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                            />
                            <span className="text-red-700">{ formError.userEmail }</span>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                htmlFor="userMessage"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                name="userMessage"
                                onChange = {handleValidation}
                                value = {formValue.userMessage}
                                className="w-full textarea textarea-success bg-white"
                            ></textarea>
                            <span className="text-red-700">{ formError.userMessage }</span>
                            </div>
                        </div>
                        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                            <button className={`flex font-poppins font-normal cursor-pointer text-[16px] text-white btn btn-outline btn-primary`}>
                            Send Message
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
