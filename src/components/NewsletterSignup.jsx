import React, { useState } from 'react';
import { Mail } from 'lucide-react';

import news from '../assets/images/news.png';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section
      className="mx-auto px-4 py-16 bg-cover bg-center bg-gray-50"
      style={{ backgroundImage: `url(${news})` }}
    >
      <div className="max-w-xl mx-auto p-8 rounded-lg  text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-black mb-6">
          Sign up for deals, new products, and promotions
        </p>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4 border-b-2 border-black">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              className="w-full bg-transparent border-none px-4 pl-10 py-4 text-black placeholder-black focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-black py-4 px-8 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
