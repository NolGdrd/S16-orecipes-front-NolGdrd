import { useState } from "react";
import { MdLogout } from "react-icons/md";
import "./Header.scss";

function Header() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch("https://orecipesapi.onrender.com/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Connexion impossible");
            }

            const data = await response.json();

            
            setUser(data.pseudo);
            setErrorMessage(null); 

        } catch (error) {
            setUser(null);
            setErrorMessage("Connexion impossible"); 
        }
    };

    const handleLogout = () => {
        // Réinitialise les états lors de la déconnexion
        setUser(null);
        setEmail("");
        setPassword("");
    };
    
        



    return (
        <header className="header">
            <div className="header-logo">
                <img src="src/assets/logo.png" alt="logo" className="logo" />
                <h1 className="header-title">Orecipes</h1>
            </div>
            {user ? (
                <div className="user-info">
                    <span className="user-info-welcome">Bienvenue, {user}!</span>
                    <button onClick={handleLogout} className="auth-form-button-logout"><MdLogout /></button>
                </div>
            ) : (
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="auth-form-input"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Adresse mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <input
                            className="auth-form-input"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="auth-form-button">OK</button>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                </form>
            )}
        </header>
    );
}

export default Header;