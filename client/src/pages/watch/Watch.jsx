import { Link } from "@material-ui/core"
import { ArrowBackOutlined } from "@material-ui/icons"
import { useLocation } from "react-router-dom"
import "./watch.scss"

export default function Watch() {
    const location = useLocation()
    console.log(location)
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
        </Link>
        <video className="video" autoPlay progress controls src="https://vimeo.com/657108124" />
        </div>
    )
}
