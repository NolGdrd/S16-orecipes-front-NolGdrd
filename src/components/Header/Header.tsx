import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img src="src\assets\logo.png" alt="logo" className="logo" />
            <form className="auth-form">
                <div>
                    <label for="email">Adresse mail </label>
                    <input type="text" name="email" id="email" /> 
                </div>
                <div>
                    <label for="password">Password </label>
                    <input type="text" name="password" id="password" /> 
                </div>
            </form>
        </header>
    )
}

export default Header;