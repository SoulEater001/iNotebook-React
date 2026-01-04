import React from "react";

const About = () => {
    return (
        <div className="container my-5">
            <div className="about-card mx-auto">

                <h2 className="text-center mb-4 about-title">📒 About iNotebook</h2>

                <p className="about-text">
                    <strong>iNotebook</strong> is a clean, secure, and intelligent note-taking
                    app built using the <strong>MERN stack</strong>. It helps you capture ideas,
                    organize them efficiently, and access them anywhere with ease.
                </p>

                <hr className="my-4" />

                {/* Features */}
                <h4 className="section-title mb-3">✨ Features</h4>
                <ul className="feature-list mb-4">
                    <li>✔️ Create, update, and delete notes instantly</li>
                    <li>✔️ Organize notes using flexible tags</li>
                    <li>✔️ Secure login with JWT authentication</li>
                    <li>✔️ Fully responsive UI powered by React + Bootstrap</li>
                </ul>

                {/* Developer */}
                <h4 className="section-title mb-3">👨‍💻 About the Developer</h4>
                <p className="about-text">
                    Hi, I'm <strong>Shivam Kumar Dewangan</strong>, a Computer Science
                    student passionate about building modern web applications and clean UI.
                    This project was created to sharpen full-stack development using
                    <strong> MongoDB, Express, React, and Node.js</strong>. 🚀
                </p>

                {/* Buttons */}
                <div className="text-center mt-4">
                    <a
                        href="https://github.com/SoulEater001/iNotebook-React"
                        target="_blank"
                        rel="noreferrer"
                        className="btn about-btn-dark mx-2"
                    >
                        <i className="bi bi-github me-2"></i> GitHub
                    </a>

                    <a
                        href="https://enhancedesign.co.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn about-btn-primary mx-2"
                    >
                        🌐 Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
