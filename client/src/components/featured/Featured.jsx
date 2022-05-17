import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type &&(
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
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
            <img src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcSYRcvIqwfOTKajVhvy20B4SjgoUaT04RnbBAB57BJUzTdJSr4p6sjwoYXwtmnL0Ceiu_wzxAE2VVSk7F_vm6QdUNkM.webp?r=9c9" alt="" />
            <div className="info">
                <img src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABf9vPyZnebLOyjmr_3UFThGB85y7b2eXGM4tcaAcGBwW7fJttvipZrRaQnVnx8pai9y7vcZeKZ_An58B7d2UhXbeMfp-E253iCgO.png?r=494" alt="" />
                <span className="description">
                    Framed and condemned to a penal colony in French Guiana, a safecracker bonds with a counterfeiter and fellow prisoner in a dangerous quest for freedom.
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
