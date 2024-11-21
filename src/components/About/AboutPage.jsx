import React from 'react';
import { Button, Typography } from '@mui/material';
import logo from '../../assets/logo.png'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section 1: Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to Jansi Rani Silks! We are dedicated to bringing you the best online shopping experience with top-quality products, fast shipping, and exceptional customer service.
          </p>
        </section>

        {/* Section 2: Company Overview */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Company Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <Typography variant="h5" className="font-bold text-2xl text-gray-800 mb-4">
              Our Story
            </Typography>
            <Typography variant="body1" className="text-lg text-gray-600">
              Founded in 1998, Jansi Rani Silks was created with one goal in mind: to offer the best quality products at affordable prices. Our team of passionate individuals works tirelessly to ensure that you have access to the latest trends, excellent customer service, and a smooth shopping experience. We believe in the power of convenience and strive to make your shopping experience enjoyable from start to finish.
            </Typography>
          </div>
        </section>

        {/* Section 3: Mission Statement */}
        <section className="mt-12 bg-gray-200 py-8 px-4 rounded-lg">
          <div className="text-center">
            <Typography variant="h4" className="font-bold text-gray-800 mb-4">
              Our Mission
            </Typography>
            <Typography variant="body1" className="text-lg text-gray-600 mb-6">
              At Jansi Rani Silks, our mission is to make shopping easier, faster, and more accessible for everyone. We want to create a seamless, enjoyable shopping experience that keeps customers coming back for more. Whether you're shopping for the latest fashion, home goods, electronics, or unique gifts, we're here to make your shopping experience effortless.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="w-full md:w-auto mx-auto"
            >
              Shop Now
            </Button>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section className="mt-12 text-center">
          <Typography variant="h4" className="font-bold text-gray-800 mb-8">
            Our Core Values
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Typography variant="h6" className="font-semibold text-lg text-gray-800 mb-4">
                Quality
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                We take pride in offering only the highest quality products that are tested for durability and reliability.
              </Typography>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Typography variant="h6" className="font-semibold text-lg text-gray-800 mb-4">
                Customer Satisfaction
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Our customers are our top priority. We’re committed to delivering exceptional service every step of the way.
              </Typography>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <Typography variant="h6" className="font-semibold text-lg text-gray-800 mb-4">
                Integrity
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                We operate with honesty and transparency in everything we do. Trust is the foundation of our business.
              </Typography>
            </div>
          </div>
        </section>

        {/* Section 5: Contact Information */}
        <section className="mt-12 text-center">
          <Typography variant="h4" className="font-bold text-gray-800 mb-4">
            Get in Touch
          </Typography>
          <Typography variant="body1" className="text-lg text-gray-600 mb-6">
            Have any questions or inquiries? Feel free to contact us anytime, and we’ll be happy to assist you.
          </Typography>
          <Button variant="outlined" color="primary" size="large" href="/contact">
            Contact Us
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
