
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss" 
import axios from "axios"
import { useEffect, useState } from "react"
 

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(()=>{
        const getRandomLists = async()=>{
            try {
                const res = await axios.get(`lists${type ? "?type=" + type: ""}${genre ? "&genre=" + genre : ""}`,{
                    headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQ4NTEzYTZmM2RhYmFhMmIzZmYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjgyMzA1MywiZXhwIjoxNjUyOTA5NDUzfQ.jfd9MISIIzi5xG2vzLqpd275EhGJbMSbjdBov0VUekg"
                    }
                }
                );
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
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    )
}

export default Home
