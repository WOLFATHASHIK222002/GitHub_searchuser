import { useEffect, useState } from "react"
import User from "./User";
import './style.css'
import { Qr_gen } from "../Qr_generator/Qr_gen";

export default function Github_profile(){

    const[username,setusername]=useState("Ashik");
    const[userdata,setuserdata]=useState(null);
    // const[gendata,setGendata]=useState(null);
    const[Loading,setLoading]=useState(true);

    async function fetchgithubData(){
        setLoading(true);
        const res=await fetch(`https://api.github.com/users/${username}`);
        const data=await res.json();
        
        if(data){
            setuserdata(data);
            setLoading(false);
            setusername('');
            // //qr gen data
            // setGendata(data);
        }
        console.log(data);
    }

    const handleSubmit=()=>{
        fetchgithubData();
    }

    useEffect(()=>{
        fetchgithubData();
    },[])

    if(Loading){
        return<h1>Loading...</h1>
    }

   

    return(
    <>
        <div className="github_profile_container">
            <div className="input-wrapper">
                <input 
                name="search-by-username"
                type="text"
                className="intext"
                value={username}
                onChange={(event)=>setusername(event.target.value)}
                placeholder="Search the github username"/>
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userdata !== null ?
            <User user={userdata}/> : null}
            <div>
            {/* {gendata!==null?
            <Qr_gen qr_user={gendata}/>:null} */}
            </div>
           

        </div>
    </>
    )
}