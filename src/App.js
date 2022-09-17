import './App.css'
import React, {useEffect, useState} from 'react'
import { MyButton } from './Components/MyButton';
import { ProfileCard } from './Components/ProfileCard';
import Profiles from './Components/Data';
function App(){//finctional component
  // const myAge=23
  // console.log(myAge);
  //incremnet a Regular varaible :my Age=21+1

const [count,setCount]=useState(0);
//increment a state variable  setCount(count+1)

const [fullName,setFullName]=useState('🙋‍♂️🙋‍♂️')



const getRandomName = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  setFullName(data.results[0].name.first + ' ' + data.results[0].name.last)
  return fullName;
}

useEffect(()=>{
  getRandomName()
},[])


  return(
    <>
     {/* <h1 className='one'> Hi i am learning React🥳🥳🥳🥳</h1>
    <h1 style={{color:'red'}}>{myAge}🙋‍♂️🙋‍♂️🙋‍♂️</h1> */}
    <h1 style={{color:'red'}}>{count}🥳🥳🥳</h1>
    <button style={{width:'100px',heigth:'30px',backgroundColor:'yellow'}} onClick={()=>{setCount(count+1)}}>click ➕➕</button>
    <button style={{width:'100px',heigth:'30px',backgroundColor:'orange',margin:'20px'}} onClick={()=>{setCount(count-1)}}>click ➖➖</button>
    <MyButton title='Buy' color='yellow'/>
    <MyButton title='Buy' color='green' />
    {Profiles.map(profile =>(
     < ProfileCard img={`https://robohash.org/${Math.random()} .png`} Name={fullName} title={profile.title} description={profile.description}/>
    ))}
  </>
  )
   
}






//how to create your own component (MyButton.js)
//props-->title,color
//how to make a functional component
//variables
//console.logging
// how to write jsx
//inline styling
//👉👉 {} these squigglies basically say that you are about write javascript
//JSX--->{put Stuff in here}
//<></>--jsx fragments
//STATE-->



export default App;