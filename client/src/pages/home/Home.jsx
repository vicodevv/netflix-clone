
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss" 
import axios from "axios"
import { useEffect, useState } from "react"
 

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre] = useState(null);

    useEffect(()=>{
        const getRandomLists = async()=>{
            try {
                const res = await axios.get(
                    `list${type ? "?type=" + type: ""}${genre ? "&genre=" + genre : ""}`,{
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ4NTEzYTZmM2RhYmFhMmIzZmYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA2MzE4MywiZXhwIjoxNjU2MTQ5NTgzfQ.SvIMAiA8A7nauYQV3_NHv4RlbgSI3yBchzWYlfgic1I"
                        }
                    }
                
                );
                setLists(res.data)
            } catch (err) { 
                console.log(err)
            };
            console.log(getRandomLists)
        };
        getRandomLists()
    },[type, genre]);
    return (
        <div className="home">
            <Navbar/>
            <Featured type={type}/>
            {lists.map((list) => (
                <List list ={list} />
            ))}
        </div>
    );
};

export default Home
