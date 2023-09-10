import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function App() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center text-white">
      <div className="text-4xl font-bold mb-4 text-center">
        Mantenimiento en Progreso
      </div>
      <p className="text-xl mb-8 text-center">
        Estamos trabajando en mejorar nuestro sitio. Mientras tanto, puedes contactarnos a través de nuestras redes sociales:
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center"
        >
          <FaInstagram className="mr-2" /> Instagram
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center"
        >
          <FaFacebook className="mr-2" /> Facebook
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 flex items-center"
        >
          <FaTwitter className="mr-2" /> Twitter
        </a>
      </div>
      <div className="mt-8 flex items-center justify-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
      </div>
    </div>
  );
}
