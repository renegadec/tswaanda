import React from "react";
import styles from "../style";

const Contact = () => {
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
                    <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                        <label for="name" className="leading-7 text-sm text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                        />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                        <label
                            for="email"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white  input input-bordered input-success text-gray-700 py-1 px-3 duration-200 ease-in-out"
                        />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                        <label
                            for="message"
                            className="leading-7 text-sm text-gray-600"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full textarea textarea-success bg-white"
                        ></textarea>
                        </div>
                    </div>
                    <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
                        <button className={`flex font-poppins font-normal cursor-pointer text-[16px] text-white btn btn-outline btn-primary`}>
                        Send Message
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
