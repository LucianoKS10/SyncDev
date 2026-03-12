import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    const [mostrarCadastro, setMostrarCadastro] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const [cadastroNome, setCadastroNome] = useState("");
    const [cadastroEmail, setCadastroEmail] = useState("");
    const [cadastroPassword, setCadastroPassword] = useState("");

    const toggleLogin = () => {
        setMostrarLogin(!mostrarLogin);
    };

    const toggleCadastro = () => {
        setMostrarCadastro(!mostrarCadastro);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login enviado:", { email: loginEmail, password: loginPassword });
        setMostrarLogin(false);
    };

    const handleCadastroSubmit = (e) => {
        e.preventDefault();
        console.log("Cadastro enviado:", { 
            nome: cadastroNome, 
            email: cadastroEmail, 
            password: cadastroPassword 
        });
        setMostrarCadastro(false);
    };

    return (
        <div className="Main">
            <header>
                <nav>
                    <div className="logo">SyncDev</div>
                    <ul className="menu">
                        <li><a href="#home">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li>
                            <Link to="/focus">Acesse o Focus!</Link>
                        </li>
                        <li>
                            <button className="botao-login" onClick={toggleLogin}>login</button>
                        </li>
                        <li>
                            <button className="cadastro-botao" onClick={toggleCadastro}>cadastro</button>
                        </li>
                    </ul>
                </nav>
            </header>

            {mostrarLogin && (
                <div className="Borda-Super">
                    <form className="form-content" onSubmit={handleLoginSubmit}>
                        <h3>Login</h3>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="Seu email"
                                className="login-input"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                placeholder="Sua senha"
                                className="login-input"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="confirmar-btn">
                            Entrar
                        </button>
                        <button type="button" onClick={toggleLogin} className="cancelar-btn">
                            Fechar
                        </button>
                    </form>
                </div>
            )}

            {mostrarCadastro && (
                <div className="Borda-Super">
                    <form className="form-content" onSubmit={handleCadastroSubmit}>
                        <h3>Cadastro</h3>
                        <div className="input-group">
                            <label>Nome</label>
                            <input 
                                type="text" 
                                placeholder="Seu nome"
                                className="login-input"
                                value={cadastroNome}
                                onChange={(e) => setCadastroNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                placeholder="Seu email"
                                className="login-input"
                                value={cadastroEmail}
                                onChange={(e) => setCadastroEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Senha</label>
                            <input 
                                type="password" 
                                placeholder="Sua senha"
                                className="login-input"
                                value={cadastroPassword}
                                onChange={(e) => setCadastroPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="confirmar-btn">
                            Cadastrar
                        </button>
                        <button type="button" onClick={toggleCadastro} className="cancelar-btn">
                            Fechar
                        </button>
                    </form>
                </div>
            )}

            <main>
                <section id="home" className="hero">
                    <h1>Bem-vindo ao SyncDev</h1>
                    <p>Uma plataforma de Comunicação e Organização Interativa</p>
                </section>

                <section id="sobre" className="sobre">
                    <h2>Sobre Nós</h2>
                    <div className="conteudo-sobre">
                        <div className="texto-sobre">
                            <p>Nosso site dá suporte a professores e alunos que necessitam de apoio e notícias para suporte</p>
                        </div>
                        <div className="imagem-sobre">
                            <div className="placeholder-img"></div>
                        </div>
                    </div>
                </section>

                <section id="servicos" className="servicos">
                    <h2>Nossos Serviços</h2>
                    <div className="cards">
                        <div className="card">
                            <h3>Quem Ajudamos?</h3>
                            <p>Ajudamos discentes, docentes e servidores</p>
                        </div>
                        <div className="card">
                            <h3>Desenvolvimento</h3>
                            <p>Sites e aplicações web personalizadas</p>
                        </div>
                        <div className="card">
                            <h3>Suporte</h3>
                            <p>Manutenção e suporte contínuo</p>
                        </div>
                    </div>
                </section>

                <section id="contato" className="contato">
                    <h2>Entre em Contato</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Seu nome" required />
                        <input type="email" placeholder="Seu email" required />
                        <textarea placeholder="Sua mensagem" rows="2" required></textarea>
                        <button type="submit" className="btn">Enviar</button>
                    </form>
                </section>
            </main>

            <footer>
                <marquee>&copy; 2025 SyncDev. Todos os direitos reservados.</marquee>
            </footer>
        </div>
    );
}

export default App;
