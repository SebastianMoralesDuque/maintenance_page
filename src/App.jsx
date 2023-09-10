
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="flex flex-col items-center space-y-4">
        <img className="w-32 animate-pulse" src="tu_logo.png" alt="Tu Logo" />

        <h1 className="text-4xl text-red-500 animate-bounce">
          ¡Nuestros Aviones Están en Mantenimiento!
        </h1>

        <p className="text-lg">
          Estamos ocupados puliendo nuestras alas y ajustando nuestros motores para llevarte a nuevos destinos increíbles.
        </p>

        <p className="text-lg">
          Volveremos a volar en poco tiempo. Si tienes alguna pregunta sobre tus próximas aventuras, ¡no dudes en{' '}
          <a
            className="text-yellow-500 hover:bg-white hover:text-blue-500"
            href="mailto:tucorreo@example.com"
          >
            contactarnos
          </a>
          !
        </p>

        <div className="flex space-x-4">
          <SocialIcon
            url="https://www.instagram.com/"
            icon={<FaInstagram className="mr-2" />}
            label="Instagram"
          />
          <SocialIcon
            url="https://www.facebook.com/"
            icon={<FaFacebook className="mr-2" />}
            label="Facebook"
          />
          <SocialIcon
            url="https://twitter.com/"
            icon={<FaTwitter className="mr-2" />}
            label="Twitter"
          />
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
      </div>
    </div>
  );
}

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
