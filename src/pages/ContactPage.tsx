import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/Layout';
import { PageHero } from '../components/PageHero';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (isSubmitting) return;
  setIsSubmitting(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formState.name.trim(),
        email: formState.email.trim(),
        phone: formState.phone?.trim() || "—",
        message: formState.message.trim(),
        time: new Date().toLocaleString()
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // success
    setSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  } catch (error) {
    console.error("Email send failed:", error);
    alert("Message failed to send. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Layout>
      {/* Hero Banner */}
      <PageHero
        title="Get in Touch"
        subtitle="We are here to answer any questions you may have about our services. Reach out and we'll respond as soon as we can."
        image="/shutterstock_2576724281.jpg" />


      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.2
              }}>

              <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-lilac-100 p-2.5 rounded-lg text-lilac-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                      Our Location
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      Goshen-Hill Care Services
                      <br />
                      Jubilee House, 3 The Drive
                      <br />
                      Brentwood, Essex CM13 3FR
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-lilac-100 p-2.5 rounded-lg text-lilac-600 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                      Phone Number
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      01277286120
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Mon-Fri from 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-lilac-100 p-2.5 rounded-lg text-lilac-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                      Email Address
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      contact@goshenhillcare.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-lilac-100 p-2.5 rounded-lg text-lilac-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-sm sm:text-base mb-1">
                      Office Hours
                    </h3>
                    <p className="text-charcoal-light text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    {/* <p className="text-charcoal-light text-sm">
                      Saturday - Sunday: Closed
                    </p> */}
                    <p className="text-xs text-lilac-600 mt-1 font-medium">
                      Care services operate 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-gray-50 rounded-xl border border-lilac-100">
                <h4 className="font-semibold text-charcoal text-sm mb-2">
                  Need immediate assistance?
                </h4>
                <p className="text-charcoal-light text-xs sm:text-sm mb-3">
                  For urgent care inquiries or existing client support, please
                  call our 24/7 support line.
                </p>
                <a
                  href="tel:01277286120"
                  className="text-lilac-600 font-semibold text-sm hover:underline">

                  Call Emergency Support →
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.4
              }}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-md border border-gray-100">

              <h2 className="text-lg sm:text-xl font-bold text-charcoal mb-5">
                Send us a message
              </h2>

              {submitted ?
              <div className="text-center py-10">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">

                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7" />

                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-light text-sm mb-5">
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </p>
                  <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm">

                    Send another message
                  </Button>
                </div> :

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5">

                  <div>
                    <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5">

                      Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 outline-none transition-all text-sm"
                    placeholder="John Doe" />

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5">

                        Email Address
                      </label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 outline-none transition-all text-sm"
                      placeholder="john@example.com" />

                    </div>
                    <div>
                      <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5">

                        Phone Number
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 outline-none transition-all text-sm"
                      placeholder="+44 123 456 7890" />

                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-charcoal mb-1.5">

                      Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-lilac-400 focus:ring-2 focus:ring-lilac-200 outline-none transition-all resize-none text-sm"
                    placeholder="How can we help you?" />

                  </div>

                  <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}>

                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              }
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>);

}