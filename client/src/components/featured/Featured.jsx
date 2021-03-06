import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./featured.scss"

export default function Featured({type}) {
    const [content, setContent] = useState({})

    useEffect(() =>{
        const getRandomContent = async ()=>{
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ4NTEzYTZmM2RhYmFhMmIzZmYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA2MzE4MywiZXhwIjoxNjU2MTQ5NTgzfQ.SvIMAiA8A7nauYQV3_NHv4RlbgSI3yBchzWYlfgic1I"
                    }
                });
                setContent(res.data[0])
            } catch (err) {
                console.log(err)
            }
        };
        getRandomContent()
    }, [type])
    return (
        <div className="featured">
            {type &&(
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                    </select>
                    </div>
                    )}
            <img src={content.image} alt="" />
            <div className="info">
                <img src={content.imageTitle} alt="" />
                <span className="description">
                    {content.description}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                            <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>More Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
