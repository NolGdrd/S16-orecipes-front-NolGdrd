import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
            <img src="src\assets\logo.png" alt="logo" className="logo" />
            <h1 className="header-title">Orecipes</h1>
            </div>
            <form className="auth-form">
                <div>
                    <input className="auth-form-input" type="text" name="email" id="email" placeholder="Adresse mail"/> 
                </div>
                <div>
                    <input className="auth-form-input" type="text" name="password" id="password" placeholder="Password" /> 
                </div>
                <button type="submit" className="auth-form-button">OK</button>
            </form>
        </header>
    )
}

export default Header;