import React from 'react';
import { motion } from 'framer-motion';

// Imports all images from the brands folder dynamically
const modules = import.meta.glob('../assets/brands/*.{png,jpg,svg,webp}', { eager: true });
const brandLogos = Object.values(modules).map(mod => mod.default);

const BrandsMarquee = () => {
    // Si no hay logos, mostramos un mensaje amigable
    if (brandLogos.length === 0) {
        return (
            <section className="brands-section" id="marcas">
                <div className="container">
                    <div className="brands-empty">
                        <p>Sube tus logos (con la marca en blanco) en formato PNG dentro de la carpeta: <code>src/assets/brands</code>. Se mostrarán aquí automáticamente de forma dinámica.</p>
                    </div>
                </div>
            </section>
        );
    }

    // Duplicamos el array varias veces para crear el efecto infinito
    const loopItems = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

    return (
        <section className="brands-section" id="marcas">
            <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <motion.h2 
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: 'var(--text-white)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Otras marcas <span className="accent-text serif-italic">trabajadas</span>
                </motion.h2>
            </div>
            
            <div className="marquee-container">
                <div className="marquee-content">
                    {loopItems.map((logo, index) => (
                        <div key={index} className="brand-logo-wrapper">
                            <img src={logo} alt="Marca Trabajada" className="brand-logo" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsMarquee;
