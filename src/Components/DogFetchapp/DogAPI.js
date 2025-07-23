import React,{useState} from 'react'


const DogAPI = () => {
    const[dogName,setDogName]=useState("");
    const[dogData,setDogData]=useState({});
    const InputHandle=(event)=>{
        setDogName(event.target.value);
    }
    const SearchHandler=()=>{
        fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
        .then((res)=>{
            setDogData(res.data);
            console.log(res.data);

        })
        .catch((error)=>{
            console.error("There was an error fetching the data!", error);
            setDogData({error: "This dog does not exist"})
        })
    }
  return (
    <div> 
        <h1>This is Dog app just give the dog name breed and get details..</h1>
        <div>
            <input type="text" placeholder='Enter your dog name' onChange={InputHandle} />
            <button onClick={SearchHandler}>Search</button>

        </div>
    </div>
  )
}

export default DogAPI