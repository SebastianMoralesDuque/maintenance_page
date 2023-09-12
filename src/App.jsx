import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function SocialIcon({ url, icon, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 flex items-center"
    >
      {icon} {label}
    </a>
  );
}

function App() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center text-black">
      <div className="flex flex-col items-center space-y-4">
        <img
          className="animate-pulse"
          src="img/logo.png"
          alt="Tu Logo"
        />

        <h1 className="text-4xl text-red-500 animate-bounce">
          ¡Nuestros Aviones Están en Mantenimiento!
        </h1>

        <p className="text-lg">
          Estamos ocupados puliendo nuestras alas y ajustando nuestros motores para llevarte a nuevos destinos increíbles.
        </p>

        <p className="text-lg">
          Volveremos a volar en poco tiempo. Si tienes alguna pregunta sobre tus próximas aventuras, ¡no dudes en{' '}
          <a
            className="text-yellow-500 hover:text-blue-500"
            href="mailto:Ventasmarsuenos@gmail.com"
          >
            contactarnos
          </a>
          !
        </p>

        <div className="flex space-x-4">
          <SocialIcon
            url="https://www.instagram.com/marsuenosviajes/"
            icon={<FaInstagram className="mr-2" />}
            label="Instagram"
          />
          <SocialIcon
            url="https://api.whatsapp.com/send?phone=573137651041"
            icon={<FaWhatsapp className="mr-2" />}
            label="WhatsApp"
          />
          <SocialIcon
            url="mailto:Ventasmarsuenos@gmail.com"
            icon={<FaEnvelope className="mr-2" />}
            label="Gmail"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
