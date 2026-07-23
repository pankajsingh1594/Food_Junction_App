import React from "react";
import { Link } from "react-router";

// Contact Page Component
const ContactPage = () => {
  return (
    <div className="px-10 pt-40 pb-30 max-md:px-5 max-md:pt-30 max-md:pb-20 bg-dark-background text-white">
      <div>
        <h1 className="text-3xl font-bold text-secondary">Contact Us</h1>
        <p className="mt-3">
          We'd love to hear from you! Whether you have a question, suggestion,
          or feedback about Food Junction, feel free to get in touch. Your
          opinions help improve the application and create a better experience
          for everyone.
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-15 max-md:mt-5 flex flex-wrap justify-between max-md:flex-col">
        <div>
          <h2 className="text-2xl font-bold text-secondary">Get in Touch</h2>
          <p className="font-bold mt-3">📧 Email</p>
          <Link to={"/"}>support@foodjunction.com</Link>
          <p className="font-bold mt-3">📞 Phone</p>
          <p>+91 98765 43210</p>
          <p className="font-bold mt-3">📍 Address</p>
          <p>123 Food Street, New Delhi, India</p>
        </div>
        <div className="max-md:mt-5">
          <h3 className="text-2xl font-bold text-secondary">Support Hours</h3>
          <ul className="list-disc pl-5 mt-3">
            <li>Monday – Friday: 9:00 AM – 8:00 PM</li>
            <li>Saturday – Sunday: 10:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div className="max-md:mt-5">
          <h2 className="text-2xl font-bold text-secondary">
            Customer Support
          </h2>
          <p className="mt-3">
            Our support team is available to assist you with:
          </p>
          <ul className="list-disc pl-5">
            <li>General inquiries</li>
            <li>Order-related questions</li>
            <li>Technical issues</li>
            <li>Suggestions and feedback</li>
          </ul>
        </div>
      </div>

      {/* Contact Message */}
      <div className="mt-15 max-md:mt-5">
        <h2 className="text-2xl font-bold text-secondary">Send Us a Message</h2>
        <p className="mt-3">
          Have a question or suggestion? Fill out the contact form below, and
          we'll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
