import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <div className="card shadow border-0 rounded-3">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">📒 About iNotebook</h2>
                    <p className="card-text text-muted">
                        iNotebook is a simple and secure note-taking application built with <strong>MERN stack</strong>. 
                        It helps you manage your daily notes, keep track of important ideas, and access them anytime with ease.
                    </p>

                    <hr />

                    <h4 className="mb-3">✨ Features</h4>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">✔️ Create, read, update, and delete notes</li>
                        <li className="list-group-item">✔️ Organize notes with tags</li>
                        <li className="list-group-item">✔️ Secure authentication and authorization</li>
                        <li className="list-group-item">✔️ Responsive design powered by Bootstrap</li>
                    </ul>

                    <h4 className="mb-3">👨‍💻 About the Developer</h4>
                    <p className="text-muted">
                        Hi, I’m <strong>Shivam Kumar Dewangan</strong>, a Computer Science student passionate about building 
                        scalable web applications. This project was built to practice full-stack development using 
                        MongoDB, Express, React, and Node.js. 🚀
                    </p>

                    <div className="text-center">
                        <a href="https://github.com/SoulEater001/iNotebook-React" target="_blank" rel="noreferrer" className="btn btn-dark mx-2">
                            <i className="bi bi-github me-2"></i> GitHub
                        </a>
                        <a target="_blank" rel="noreferrer" className="btn btn-primary mx-2">
                            🌐 Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
