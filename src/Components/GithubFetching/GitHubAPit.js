import React,{useState} from 'react'
import axios from 'axios';
import './github.css';


const GitHubAPit = () => {
    const[id,setId]=useState("");
    const[data,setData]=useState({})
    const IDhandler=(e)=>{
        setId(e.target.value)
    }
    const SearchHandler=()=>{
         axios.get(`https://api.github.com/users/${id}`)
         .then((response)=>{
            setData(response.data)
            console.log(response.data);
            
    })
         .catch((error)=>{
            console.error("There was an error fetching the data!", error);
            setData({error: "This user does not exist in github"})
            
         })
    }
  return (
    <div className='header'>
        <h1 className='Heading'>HEY,Just Enter Your Name and Get your Details</h1>
        <div className='search-bar'>
            <input type="text" placeholder='Enter your github username.....' onChange={IDhandler} id='input' />
            <button onClick={SearchHandler}>Search</button>


        </div >
        <div className='data'>
            {data.error? (<h1>{data.error}</h1>) : 
        <div className='data-container'>
           
            <img src={data.avatar_url} alt="profile" width="150" />
             <h1><strong>Name: {data.name}
            </strong></h1>
            <h5>Bio:{data.bio}</h5>
            <p>Followers:{data.followers}</p>
            <p>Following:{data.following}</p>
            <p>Public Repos:{data.public_repos}</p>
        </div>}

        </div>
        
        
    </div>
  )
}

export default GitHubAPit