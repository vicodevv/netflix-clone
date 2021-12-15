import "./register.scss"

export default function Register() {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button className="loginButton">Sign In</button>
            </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV</h1>
                <h1>shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="input">
                    <input type="email" placeholder="Email address"/>
                    <button className="registerButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}
