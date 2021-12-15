import { PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add } from "@material-ui/icons"
import { useState } from "react"
import "./listitem.scss"

export default function ListItem({index}) {
    const[isHovered, setIsHovered] = useState(false)
    const trailer = "https://youtu.be/SL9aJcqrtnw";
    return (
        <div className="listItem" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        style={{left:isHovered && index * 225 -50 + index * 2.5}}>
           <img src="https://occ-0-4616-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe4MOeHcKDegnaMHGCqTNKvf2NO1sJviVS4NnNkIYoiNV8ERxGvYeH7jM6wjzOL7q0mNbIxyeo7w6NqsSsK-2p9UbY0iaKO7uEAMlCAzYyTCArnGsO7yXW7Gn-8YKG30KjqtUZR38aiob2-ngg4tVK_Oh0Q.webp?r=5dd" alt="" />
           {isHovered && (
           <>
           <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrow className="icon"/>
                <Add className="icon"/>
                <ThumbUpAltOutlined className="icon"/>
                <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
                <span>2h 12m</span>
                <span className="limit">18+</span>
            </div>
            <div className="desc">
            Framed and condemned to a penal colony in French Guiana, a safecracker bonds with a counterfeiter and fellow prisoner in a dangerous quest for freedom.
            </div>
            <div className="genre">Action</div>
        </div> </>
        )}
           
        </div>
    );
}
