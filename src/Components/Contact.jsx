import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Accessibility, Send, ExternalLink } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-black shadow-sm border-b opacity-92">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-lg text-slate-300">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-slate-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Museum Avenue<br />
                    Cultural District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-slate-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-600">
                    <a href="tel:+1234567890" className="hover:text-slate-900 transition-colors">
                      (123) 456-7890
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Monday - Friday, 9 AM - 5 PM</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-slate-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-600">
                    <a href="mailto:info@Archomuseum.org" className="hover:text-slate-900 transition-colors">
                      info@Archomuseum.org
                    </a>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-slate-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monday - Wednesday</span>
                      <span className="text-slate-900 font-medium">10 AM - 6 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Thursday - Friday</span>
                      <span className="text-slate-900 font-medium">10 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Saturday - Sunday</span>
                      <span className="text-slate-900 font-medium">9 AM - 7 PM</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-100">
                      <span className="text-slate-600">Holidays</span>
                      <span className="text-slate-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="group-tours">Group Tours</option>
                    <option value="education">Educational Programs</option>
                    <option value="events">Private Events</option>
                    <option value="membership">Membership</option>
                    <option value="accessibility">Accessibility Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Group Tours */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900">Group Tours</h3>
            </div>
            <p className="text-slate-600 mb-4">
              Special guided tours available for groups of 10 or more. Advanced booking required.
            </p>
            <a href="mailto:groups@museum.org" className="text-slate-900 hover:text-slate-700 font-medium inline-flex items-center space-x-1">
              <span>Book a tour</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Accessibility */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Accessibility className="w-6 h-6 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900">Accessibility</h3>
            </div>
            <p className="text-slate-600 mb-4">
              We're committed to providing accessible experiences for all visitors. Contact us for assistance.
            </p>
            <a href="mailto:accessibility@museum.org" className="text-slate-900 hover:text-slate-700 font-medium inline-flex items-center space-x-1">
              <span>Learn more</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

         <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
  <h3 className="text-lg font-semibold text-slate-900 mb-4">Find Us</h3>

  {/* Embedded Google Map */}
  <div className="rounded-lg overflow-hidden w-full h-60 mb-4">
    <iframe
      title="Museum of Illusions Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8848425087617!2d77.21537397375263!3d28.633213284052943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd96788ff6db%3A0x2ab0c17c3b8f568c!2sMuseum%20of%20Illusions!5e0!3m2!1sen!2sin!4v1752761803116!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
    ></iframe>
  </div>

  <p className="text-slate-600 text-sm">
    Located in the heart of Connaught Place, New Delhi with easy access to public transportation.
  </p>
</div>

        </div>
      </div>
    </div>
  );
}

export default Contact;