// src/LandingPage.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import CustomButton from '../components/CustomButton';
import backgroundSVG from '../assets/back.svg';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 bg-black overflow-hidden">
      
      {/* Contenido principal */}
      <h1 className="text-5xl font-bold text-white mb-4">SUMMIT 24</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-lg">
        Prepárate para experimentar una nueva experiencia académica.
      </p>
      
      {/* Modelo 3D de Spline centrado */}
      <div className="w-full h-96 md:h-[500px] mt-6 mb-8">
        <Spline scene="https://prod.spline.design/qWIyQSMJPrCZhBtB/scene.splinecode" />
      </div>

      {/* Fecha y ubicación */}
      <div className="text-white text-center mb-8">
        <p className="text-lg font-semibold">Noviembre 12, 2024</p>
        <p className="text-sm">2:00 p.m • Jardín Central UPMX</p>
      </div>
      
      {/* Botón personalizado */}
      <CustomButton href="#" text="Registrarse" />

      {/* SVG en la parte inferior como fondo con desenfoque */}
      <img 
        src={backgroundSVG} 
        alt="Background SVG" 
        className="absolute bottom-0 w-full h-full blur-lg opacity-80 object-cover pointer-events-none"
      />
    </div>
  );
};

export default LandingPage;
