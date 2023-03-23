import React from 'react'
import PropTypes from 'prop-types'

export default function DataDetails( {data, onSendMessage}) {
    

    const handleSendMessage = () =>{
        onSendMessage(data.id,data.login,data.bio);
    }

   
  return (
    <div>
      {/* {data.map((d)=> {return (<ul key={d.id}> {d.login}  {d.id}  {d.avatar_url} </ul>)})} */}

      <ul>
        <li>LOGIN:{data.login}</li>
        <li>AVATAR_URL:{data.avatar_url}</li>
        <li>BIO:{data.bio}</li>
        <li>LOCATION:{data.location}</li>
      
        </ul>   
      
        <button onClick={handleSendMessage}>Send Message to App</button>
     
     
     
     
    </div>
  )
  }
  DataDetails.propTypes = {
  
    onSendMessage: PropTypes.func,
   
}