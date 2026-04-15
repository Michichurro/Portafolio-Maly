import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="resume-section" id="sobre-mi">
            <div className="container">
                <div className="resume-content">
                    <motion.div 
                        className="resume-column-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="resume-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>
                                Un poco <br />
                                <span className="serif-italic accent-text">sobre mi</span>
                            </h2>
                        </motion.div>
                        <div className="resume-image-wrapper">
                            <img 
                                src="/images/maly-about.png" 
                                alt="Maly Gomez"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="resume-column-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="resume-categories">
                            
                            {/* Habilidades Principales */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Habilidades</h3>
                                <div className="skills-grid" style={{ marginBottom: '2rem' }}>
                                    <span className="skill-tag">Estrategia & Medios</span>
                                    <span className="skill-tag">PR & Comunicación</span>
                                    <span className="skill-tag">Gestión de Cuentas</span>
                                    <span className="skill-tag">Data & Tools</span>
                                    <span className="skill-tag">Planificación ON/OFF</span>
                                    <span className="skill-tag">Negociación</span>
                                </div>
                            </div>

                            {/* Experiencia */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Experiencia</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">Feb 2025 – Mar 2026</div>
                                        <div className="resume-item-content">
                                            <h4>Oniria</h4>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-light-secondary)', lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <li>Lideré el área de medios dentro de campañas integrales</li>
                                                <li>Trabajé de cerca con cuentas y creatividad para bajar ideas a planes concretos</li>
                                                <li>Coordiné con equipos internos para que todo salga en tiempo y forma</li>
                                                <li>Ejecuté y di seguimiento a campañas multicanal</li>
                                                <li>Analicé resultados y fui optimizando las campañas</li>
                                                <li>Acompañé en la bajada de propuestas y armado de estrategias</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">Jun 2022 – Jul 2024</div>
                                        <div className="resume-item-content">
                                            <h4>Brick</h4>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-light-secondary)', lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <li>Gestioné cuentas como Tigo, Claro, NGO, Banco Familiar y González Giménez</li>
                                                <li>Armé y ejecuté planes de medios offline según objetivos de campaña</li>
                                                <li>Negocié espacios y manejé presupuestos</li>
                                                <li>Hice seguimiento de campañas y análisis de competencia</li>
                                                <li>Trabajé con equipos internos para asegurar la implementación de las campañas</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">Ene a Jun 2022</div>
                                        <div className="resume-item-content">
                                            <h4>Bierdermann</h4>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-light-secondary)', lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <li>Desarrollé estrategias de medios offline</li>
                                                <li>Di seguimiento a campañas y optimización de resultados</li>
                                                <li>Acompañé en la planificación y ejecución de campañas</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">Ene 2018 – Ago 2021</div>
                                        <div className="resume-item-content">
                                            <h4>Nasta</h4>
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-light-secondary)', lineHeight: '1.6', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                                <li>Fui creciendo de asistente a ejecutiva dentro del equipo de medios</li>
                                                <li>Participé en el armado de estrategias para cuentas como Tigo</li>
                                                <li>Analicé audiencias y planifiqué campañas</li>
                                                <li>Ejecuté pautas y armé reportes de performance</li>
                                                <li>Trabajé con herramientas como IBOPE y TGI</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Estudios */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Educación</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">Superior</div>
                                        <div className="resume-item-content">
                                            <h4>Marketing y Publicidad</h4>
                                            <p>Universidad Columbia<br/><strong>Licenciatura en Marketing y Publicidad</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resume-category">
                                <h3 className="resume-category-title">Herramientas</h3>
                                <div className="skills-grid">
                                    <span className="skill-tag">IBOPE</span>
                                    <span className="skill-tag">TGI</span>
                                    <span className="skill-tag">Audimedia</span>
                                    <span className="skill-tag">Influencity</span>
                                    <span className="skill-tag">Google Docs</span>
                                    <span className="skill-tag">Excel Avanzado</span>
                                </div>
                            </div>

                            {/* Referencias */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Referencias Laborales</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">
                                            <a href="https://wa.me/595981140391" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+595 981 140391</a>
                                        </div>
                                        <div className="resume-item-content">
                                            <h4>Federico Céspedes</h4>
                                            <p><strong>Director de Medios</strong><br/>Oniria</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">
                                            <a href="https://wa.me/59599462980" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+595 994 62980</a>
                                        </div>
                                        <div className="resume-item-content">
                                            <h4>Oscar González</h4>
                                            <p><strong>Coordinador Digital</strong><br/>Oniria</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">
                                            <a href="https://wa.me/595961526964" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+595 961 526964</a>
                                        </div>
                                        <div className="resume-item-content">
                                            <h4>Fernando López</h4>
                                            <p><strong>Coordinador Digital</strong><br/>Brick</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">
                                            <a href="https://wa.me/595972131975" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>+595 972 131975</a>
                                        </div>
                                        <div className="resume-item-content">
                                            <h4>Jackeline Aquino</h4>
                                            <p><strong>Coordinadora de Medios</strong><br/>Brick</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
