import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.scss"

const Navbar = () => {
    const [isScrolled, SetIsScrolled] = useState(false);
    
    window.onscroll = () =>{
        SetIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                    <Link to="/" className="link">
                    <span>Home</span>
                    </Link>
                    <Link to= "/series" className="link">
                    <span>TV Shows</span>
                    </Link>
                    <Link to = "/movies" className="link">
                    <span>Movies</span>
                    </Link>
                    <span>New & Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>Kids</span>
                    <Notifications className="icon"/>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Account</span>
                            <span>Help Center</span>
                            <span>Sign out of Netflix</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
