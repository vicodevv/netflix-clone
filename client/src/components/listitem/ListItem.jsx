import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./listitem.scss"

export default function ListItem({index, item}) {
    const[isHovered, setIsHovered] = useState(false)
    const[movie, setMovie] = useState(false)

    useEffect(()=>{
        const getMovie = async ()=>{
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ4NTEzYTZmM2RhYmFhMmIzZmYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA2MzE4MywiZXhwIjoxNjU2MTQ5NTgzfQ.SvIMAiA8A7nauYQV3_NHv4RlbgSI3yBchzWYlfgic1I"
                    }
                }) 

            } catch (err) {
                console.log(err)
            }
        }
    })
    
    return (
        <div className="listItem" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        style={{left:isHovered && index * 225 -50 + index * 2.5}}>
           <img src={item.image}></img>
           {isHovered && (
           <>
           <video src={item.trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>{item.duration}</span>
                <span className="limit">+{item.limit}</span>
                <span>{item.year}</span>
            </div>
            <div className="desc">
            {item.description}
            </div>
            <div className="genre">{item.genre}</div>
        </div> </>
        )}
           
        </div>
    );
}
