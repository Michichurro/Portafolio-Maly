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
                                        <div className="resume-item-year">2022 — 2024</div>
                                        <div className="resume-item-content">
                                            <h4>Brick</h4>
                                            <p><strong>Ejecutiva y Coordinadora de Medios</strong><br/>
                                            Planificación de campañas, negociación de espacios, manejo de presupuesto.</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2022</div>
                                        <div className="resume-item-content">
                                            <h4>Bierdermann</h4>
                                            <p><strong>Planificadora de Medios</strong><br/>
                                            Gestión estratégica de medios y campañas para diferentes cuentas.</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2018 — 2021</div>
                                        <div className="resume-item-content">
                                            <h4>Nasta</h4>
                                            <p><strong>Asistente y Ejecutiva de Medios</strong><br/>
                                            Armado de estrategias, gestión de cuentas como Tigo, Claro, NGO.</p>
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
