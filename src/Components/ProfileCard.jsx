import React from 'react'
import Profiles from './Data'




export const ProfileCard = ({Name,img,description,title}) => {
  return (
    <>
      <div style={{backgroundColor:'yellow',margin:'10px',border:'10px dashed red',borderRadius:'15px'}}>
        <div style={{display:'flex',justifyContent:'center',margin:'0px'}}>
           <img src={img} alt="" height="150px"/>
          <div>
               <h1 style={{marginLeft:'10px'}}>{Name} 🔥🔥🔥🔥</h1>
               <h3 style={{marginLeft:'10px'}}>{title}</h3>
           </div> 
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <p style={{padding:'10px',dispaly:'flex',justifyContent:'center'}}><b>Descripiton:</b>{description}</p>
        </div>
        </div>
    </>
  )
}
