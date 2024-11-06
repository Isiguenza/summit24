// src/LandingPage.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';

import backgroundSVG from '../assets/back.svg';
import iosLogo from '../assets/logoioslab.svg';
import { motion } from 'framer-motion';
import { Button } from "../components/ui/button"




const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
};

const LandingPage: React.FC = () => {
    return (
        <div className="relative min-h-screen  place-items-center text-center p-6 bg-black overflow-hidden">

            {/* Fondo con SVG desenfocado */}
            <img
                src={backgroundSVG}
                alt="Background SVG"
                className="absolute inset-0 w-full h-full blur-lg opacity-80 object-cover pointer-events-none z-0"
            />

            {/* Contenido principal encima del fondo */}


            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Logo SVG */}
                <motion.img
                    src={iosLogo}
                    alt="Logo iOS"
                    className="w-40 mb-4 mt-6"
                    variants={fadeInUp}
                />

                {/* Modelo 3D de Spline centrado y responsivo */}
                <motion.div
                    className="w-full md:h-[500px] mt-3 mb-3 overflow-hidden"
                    variants={fadeInUp}
                >
                    <Spline scene="https://prod.spline.design/qWIyQSMJPrCZhBtB/scene.splinecode" />
                </motion.div>

                <motion.p className="text-2xl text-white mb-8 max-w-4xl" variants={fadeInUp}>
                    Sé parte del <span className="font-bold">iOS Lab Summit 2024</span> y vive una experiencia académica única. Descubre nuevas apps y herramientas diseñadas para revolucionar tu aprendizaje.
                </motion.p>

                {/* Fecha y ubicación */}
                <motion.div className="text-white text-center mb-8" variants={fadeInUp}>
                    <p className="text-lg font-semibold">Noviembre 12, 2024</p>
                    <p className="text-sm">2:00 p.m • Jardín Central UPMX</p>
                </motion.div>

                {/* Botón personalizado */}
                <motion.div variants={fadeInUp}>
                    <Button variant="outline">Registrate ahora</Button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LandingPage;
