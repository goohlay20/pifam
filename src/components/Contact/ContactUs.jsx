import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


export const ContactUs = () => {
  const form = useRef();

  const successful_alert = () => {
    Swal.fire({
        title: "Message Sent!",
        text: "",
        imageUrl: '/src/assets/sent-mail.gif',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Email Sent!"
      });
  }

  const failed_alert = () => {
    Swal.fire({
        title: "Message Error!",
        text: "We encountered an error while sending your message. Please try again later.",
        imageUrl: '/src/assets/failed.gif',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Message Error!"
      });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n1ydzfq', 'template_8kmeu0e', form.current, {
        publicKey: '1DDEjHbTM-Dg47kWw',
      })
      .then(
        () => {
            successful_alert();
            form.current.reset();
        },
        (error) => {
            failed_alert();
            form.current.reset();
        },
      );
  };

  return (
    <section class="content-center text-gray-600 h-screen bg-warm_beige body-font relative" id="contact">
    <div class="container h-screen py-5 px-5 mx-auto">
        <div class="flex flex-col pt-20 text-center w-full mb-12">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">About PiFAM Team</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
        PiFAM is an AI-powered application that provides range of Filipino meals suggestions curated to suit every taste and preference. We are a team of passionate foodies and tech enthusiasts who are dedicated to making your life easier and your meals more enjoyable. Our mission is to help busy families plan and prepare delicious and nutritious meals with ease.  
        </p>
        
        </div>
        <div class="lg:w-1/2 md:w-2/3  mx-auto">
        <h1 class=" sm:text-3xl text-center text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div class="flex flex-wrap -m-2">
                
                <div class="p-2 w-1/2">
                <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                    <input type="text" id="name" name="from_name" class="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-red-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                </div>
                </div>
                <div class="p-2 w-1/2">
                <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="from_email" class="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-red-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                </div>
                </div>
                <div class="p-2 w-full">
                <div class="relative ">
                    <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" class="w-full bg-white bg-opacity-90 rounded border border-gray-300 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-red-400 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                </div>
                </div>
            </div>
            <button type="submit" value="Send" class="mt-2 p-2 rounded-md bg-rhubarb_red text-white font-semibold">Submit</button>
        </form>
        </div>
    </div>
    </section>
  )
}

export default ContactUs


