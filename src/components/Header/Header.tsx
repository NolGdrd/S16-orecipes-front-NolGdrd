import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img src="src\assets\logo.png" alt="logo" className="logo" />
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