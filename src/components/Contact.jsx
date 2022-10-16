import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "../style";

const Contact = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');


    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('', '', form.current, '')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    return (
        <div>
            <section className="text-gray-700 body-font relative">
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
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                name="from_name"
                                onChange = {e => setUserName(e.target.value)}
                                value = {userName}
                                className="w-full bg-white input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                            <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="from_email"
                                onChange = {e => setUserEmail(e.target.value)}
                                value = {userEmail}
                                className="w-full bg-white  input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                            />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                onChange = {e => setUserMessage(e.target.value)}
                                value = {userMessage}
                                className="w-full textarea textarea-success bg-white"
                            ></textarea>
                            </div>
                        </div>
                        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                            <button className={`flex font-poppins font-normal cursor-pointer text-[16px] text-white btn btn-outline btn-primary`}>
                            Send Message
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
